import create from "zustand";

 const useAnotation = create((set) => ({
    listSend:[],
    setListSend: (value) => set(() => ({ listSend: value })),


}));

export default useAnotation;