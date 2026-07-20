import { useState, useEffect, useMemo, useRef, useCallback } from "react";

// basic ts debounce wrapper function
export function debounceFn(func: Function, delay: number) {
  let timer: number | undefined;
  return function (...args: any) {
    if (timer) clearTimeout(timer);
    return (timer = setTimeout(() => {
      func(...args);
    }, delay));
  };
}

const api = (value: unknown) => {
  return value;
};
// react中,组件重渲染,生成全新的防抖函数示例,定时器失效
// 假如防抖回调完全依赖外部参数,使用缓存
const debounceSearch = useMemo(
  debounceFn((value: any) => api(value), 500),
  [],
);

// 假如需要读取state或者props,进入闭包陷阱
// 依赖项是空的,只能读取到第一次渲染时的state
// 依赖项放[state],useMemo将重新创建防抖函数,又失效了

// 解法:使用ref
function useDebounceNoCleanUp(cb: Function, delay: number) {
  const cbRef = useRef(cb);

  // 每次渲染,都将最新的回调函数放入ref中,保证state/prop
  useEffect(() => {
    cbRef.current = cb;
  });

  return useCallback(() => {
    let timer: number | undefined;
    return function (...args: any) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cbRef.current(...args);
      }, delay);
    };
  }, [delay]);
}

// 最后给timer加一个ref,用来clean up
function useDebounce(cb: Function, delay: number) {
  const cbRef = useRef(cb);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    cbRef.current = cb;
  });
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);
  const debounceFn = useCallback(
    (...args: any) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        cbRef.current(...args);
      }, delay);
    },
    [delay],
  );
  return debounceFn;
}

// For debounce value
export function useDebounceValue<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncedValue;
}
