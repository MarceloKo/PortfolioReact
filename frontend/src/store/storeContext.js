import create from "zustand";

 const useContext = create((set) => ({
    open: false,
    modalContent: {},
    setOpen: () => set(() => ({ open: true })),
    setClose: () => set(() => ({ open: false })),
    setModalContent: (content) => set(() => ({ modalContent: content })),

}));

export default useContext;