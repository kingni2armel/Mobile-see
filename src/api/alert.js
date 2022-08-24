import { api } from "../config";
import { BASE_URL } from "@env";

export const createAlert =  async (data)=>{
    try{
        const response  = api.post("/alert/alert",data)
        return response.data
    }catch(err){
        console.log(BASE_URL)
    }
}
export const deleteAlert = async(id)=>{
    try{
        const response =  api.post("/alert/delete/",id)
        return response.data
    }catch(err){
        console.log(BASE_URL)
    }
}
export const updateAlert = async(id,data)=>{
    try{
        const response = api.patch("/alert/update/",id,data)
    }catch(err){
        console.log(BASE_URL)
    }
}
export const findAlert = async(data)=>{
    try{
        const response = api.get("/alert/find/",data)
        return response.data
    }catch(err){
        console.log(BASE_URL)
    }
}
export const getallAlert = async()=>{
    try{
        const response = api.get("/alert/aler/")
        return response.data
    }catch(err){
        console.log(BASE_URL)
    }
}
