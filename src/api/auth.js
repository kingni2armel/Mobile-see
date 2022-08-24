import { api } from "../config";
import { BASE_URL } from "@env";

export const login =  async (data)=>{
    try{
        const response  = api.post("/auth/singin/",data)
        return response.data
    }catch(err){
        console.log(BASE_URL)
    }
}
export const register = async(data)=>{
    try{
        const response =  api.post("/auth/register/",data)
        return response.data
    }catch(err){
        console.log(BASE_URL)
    }
}
export const update = async(id,data)=>{
    try{
        const response = api.patch("/auth/update/",id,data)
    }catch(err){
        console.log(BASE_URL)
    }
}
export const deleteuser = async(id)=>{
    try{
        const response = api.delete("/auth/delete/",id)
        return response.data
    }catch(err){
        console.log(BASE_URL)
    }
}
export const getAlluser = async()=>{
    try{
        const response = await api.get('/auth/all')
        return response.data
    }catch(err){
        console.log(BASE_URL)
    }
}
export const findUser =async()=>{
    try{
        const response = await api.get("/auth/user",id)
        return response.data
    }catch(err){
        console.log(BASE_URL)
    }
}
export const resetPassword  =  async (data)=>{
    try{
        const response = await api.post("/auth/reset",data)
        return response.data
    }catch(err){
        console.log(BASE_URL)
    }
}