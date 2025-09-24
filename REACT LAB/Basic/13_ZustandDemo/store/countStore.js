import { create } from "zustand";

// here create((set)=>{}) ====> set is a fun argument ma male
export const useCount = create((set) => {
  return {
    count: 0,
    inCount: (num) => {
      set((state) => {
        return { ...state, count: state.count + num };
      });
    },
    decCount: (num) => {
      set((state) => ({ ...state, count: state.count - num }));
    },
    resetCount: () => set({count : 0}),
  };
});
