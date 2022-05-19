import create from "zustand";

 const useAnotation = create((set) => ({
    listSend:[],
    getDate:true,
    setListSend: (value) => set(() => ({ listSend: value })),
    setGetDate: (value) => set(() => ({ getDate: value })),

}));

export default useAnotation;