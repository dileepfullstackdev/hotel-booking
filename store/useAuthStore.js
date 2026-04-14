import {create} from "zustand";

export const useAuthStore = create((set)=>({
    user: null,
    token:null,
    login: (userData,token)=> {
        localStorage.setItem("token",token);
        set({user:userData,token});
    },
    logout:()=>{
        localStorage.removeItem("token");
        set({user:null,token:null});
    },
    loadUser:()=>{
        const token =localStorage.getItem("token");
        if (token){
            set({token});
        }

    }
}))