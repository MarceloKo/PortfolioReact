import create from "zustand";

 const useDetails = create((set) => ({
    introInicio: "",
    introSobre:"",
    skills:[],
    projetos:[],
    experiencia:[],
    setIntroInicio: (value) => set(() => ({ introInicio: value })),
    setIntroSobre: (value) => set(() => ({ introSobre: value })),
    setSkills: (value) => set(() => ({ skills: value })),
    setProjetos: (value) => set(() => ({ projetos: value })),
    setExperiencia: (value) => set(() => ({ experiencia: value })),
}));

export default useDetails;