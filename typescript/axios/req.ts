import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
type RequestConfig<T = any> = InternalAxiosRequestConfig & {
  retry?: number;
  skipErrorHandler?: boolean;
};
type ResponseData<T = any> = {
  data: T;
  code: number;
  message: string;
};

const refreshToken = (): string => {
  return "newToken";
};
const showError = (string: string) => {};

const Request = (baseURL: string, timeout = 10000) => {
  const retryLimit = 3;
  let retryQueue: Array<() => void> = [];
  let isRefresh = false;
  const instance = axios.create({
    baseURL,
    timeout,
    headers: { "Content-Type": "application/json" },
  });

  // request interceptor
  instance.interceptors.request.use(
    (config: RequestConfig) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error: AxiosError) => Promise.reject(error),
  );

  //response interceptor
  instance.interceptors.response.use(
    (res: AxiosResponse<ResponseData>) => {
      const { data } = res;
      const config = res.config as RequestConfig;
      if (data.code !== 200 && !config.skipErrorHandler) {
        return Promise.reject(data);
      }
      return data.data;
    },
    (error: AxiosError) => {
      const orignalReq = error.config as RequestConfig;

      if (!error.request) {
        return handleNetWorkError(orignalReq);
      }
      if (error.response?.status === 401) {
        return handleUnauthorized(orignalReq);
      }
      return handleServerError(error, orignalReq);
    },
  );

  const handleUnauthorized = (orignalReq: RequestConfig) => {
    if (!isRefresh) {
      isRefresh = true;
      try {
        const newToken = refreshToken();
        localStorage.setItem("token", newToken);
        retryQueue.forEach((cb) => cb());
        return instance(orignalReq);
      } catch (error) {
        localStorage.removeItem("token");
        window.location.href = "/login";
        return Promise.reject(error);
      } finally {
        isRefresh = false;
        retryQueue = [];
      }
    }
    return new Promise((resolve) => {
      retryQueue.push(() => {
        resolve(instance(orignalReq));
      });
    });
  };

  const handleNetWorkError = (orignalReq: RequestConfig) => {
    if (orignalReq.retry ?? 0 < retryLimit) {
      const delay = 1000 * Math.pow(2, orignalReq.retry || 0);
      orignalReq.retry = (orignalReq.retry || 0) + 1;
      return new Promise((resolve) =>
        setTimeout(() => {
          resolve(instance(orignalReq));
        }, delay),
      );
    }
    return Promise.reject(new Error("Network Error"));
  };

  const handleServerError = (error: AxiosError, orignalReq: RequestConfig) => {
    const status = error.response?.status;
    const data = error.response?.data as ResponseData;
    switch (status) {
      case 500:
        showError("服务器内部错误");
        break;
      case 403:
        showError("无权限");
        break;
      default:
        showError(data?.message || "未知错误");
        break;
    }
    return Promise.reject({
      code: status || -1,
      message: data.message || error.message,
    });
  };

  return {
    request<T>(config: RequestConfig): Promise<T> {
      return instance.request(config);
    },
    get<T>(url: string, config?: RequestConfig): Promise<T> {
      return instance.get(url, config);
    },
    post<T>(url: string, data?: any, config?: RequestConfig): Promise<T> {
      return instance.post(url, data, config);
    },
  };
};
