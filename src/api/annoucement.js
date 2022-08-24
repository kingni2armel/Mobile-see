import { api } from "../config";
import { BASE_URL } from "@env";

export const createAnnoucement = async (data)=>{
    try{
        const response = api.post("/annonce/create",data)
        return response.data
    }catch(err){
        console.log(BASE_URL)
    }
}
export const updateAnnoucement =  async(id,data)=>{
    try{
        const response = api.patch("/annonce/update",id,data)
        return response.data
    }catch(err){
        console.log(BASE_URL)
    }
}
export const deleteAnnoucement = async(id)=>{
    try{
        const response =  api.delete("/annonce/delete/",id)
        return response.data
    }catch(err){
        console.log(BASE_URL)
    }
}
export const getAllAnnoucement =  async()=>{
    try{
        const response = api.get("/annonce/all")
        return response.data
    }catch(err){
        console.log(BASE_URL)
    }
}
export const FindAnnoucement = async(id)=>{
    try{
        const response = api.get("/annonce/annonce/",id)
        return response.data
    }catch(err){
        console.log(BASE_URL)
    }
}