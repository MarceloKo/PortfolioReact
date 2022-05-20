import create from "zustand";

 const useToken = create((set) => ({
    token:'',
   
    setToken: (value) => set(() => ({ token: value })),

}));

export default useToken;