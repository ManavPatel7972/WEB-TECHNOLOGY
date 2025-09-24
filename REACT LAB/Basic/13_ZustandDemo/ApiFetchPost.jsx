import { useEffect } from "react";
import { usePost } from "../store/apiStore";

export const ApiFetchPost = () => {
  const { posts, error, loading, fetchPost } = usePost();

  useEffect(() => {
    fetchPost();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h1>Fetch Posts In Zustand</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};
