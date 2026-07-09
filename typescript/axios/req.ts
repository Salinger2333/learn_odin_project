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
const Request = (baseURL: string, timeout = 10000) => {
  const retryLimit = 3;
  const retryQueue: Array<() => void> = [];
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
      const config = res as RequestConfig;
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
      return handleServerError(orignalReq);
    },
  );

  const handleNetWorkError = () => {
    // retry
  };
  const handleUnauthorized = () => {
    // token refresh
  };
  const handleServerError = () => {
    // sort error to handle
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
