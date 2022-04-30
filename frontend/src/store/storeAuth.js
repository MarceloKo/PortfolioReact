import create from "zustand";

const useAuth = create((set) => ({
    isAuthenticated: false,
    setAuthorization: (value) => set({ Authorization: value }),
}));