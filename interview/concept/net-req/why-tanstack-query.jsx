import { useState, useEffect } from "react";
const endpoint = import.meta.env.VITE_ENDPOINT;
export const Bookmark = ({ category }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(`${endpoint}/${category}`)
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((error) => setError(error));
  });
  return <div>some jsx</div>;
};

// 1. race conditions 没有清理函数
// 2. 无loading
//useEffect(() => {
// ...
// setIsLoading(true)
// fetch('...')
// ...
// .finally(()=>{
// if (!ignore) {
//     setIsLoading(false)
//   }
//})
//})
// 3. 没区分无数据和完全没有数据(无改条目) useState()
// 4. data/error的state 是独立的
// 5. 默认的use strict
