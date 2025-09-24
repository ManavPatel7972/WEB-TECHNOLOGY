import { create } from "zustand";

export const usePost = create((set) => {
  return {
    posts: [],
    loading: false,
    error: null,

    fetchPost: () => {
      set({ loading: true, error: null });
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          set({ posts: data, loading: false });
        })
        .catch((err) => {
          set({ error: err.message, loading: false });
        });
    },
  };
});
