import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const getRequestWithNativeFetch = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Fetch Error: " + response.status);
  }
  return response.json();
};

const FetchGetReq = () => {
  const [data, setData] = useState(null);
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let postData = await getRequestWithNativeFetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=8`,
        );
        setData(postData);
        setError(null);
      } catch (error) {
        setData(null);
        setError(error);
      } finally {
        setLoding(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {loding && <div>loading page</div>}
      {error && <div>{error}</div>}

      <ul>
        {data &&
          data.map(({ id, title }) => {
            <li key={id}>
              <NavLink
                to={`/posts/${id}`}
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
              >
                {title}
              </NavLink>
            </li>;
          })}
      </ul>
      <div>Single Post Here</div>
    </div>
  );
};
/* eslint-disable no-unused-vars */
let sidebarUrl, commentsUrl, issueUrl;
const useAllData = () => {
  const [issue, setIssue] = useState();
  const [comments, setComments] = useState();
  const [sidebar, setSidebar] = useState();
  useEffect(() => {
    const dataFetch = async () => {
      const response = await Promise.all([
        fetch(sidebarUrl),
        fetch(commentsUrl),
        fetch(issueUrl),
      ]);

      const result = response.map((r) => r.json());
      const [sidebarResult, commentsResult, issueResult] = Promise.all(result);
    };

    dataFetch();
  }, []);

  return { issue, comments, sidebar };
};

export default FetchGetReq;
