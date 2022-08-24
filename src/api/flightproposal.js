import { api } from "../config";
import {BASE_URL} from "@env"

export const createFligthproposal = async(data)=>{
    try{
        const response = api.post("/vol/vol",data)
        return response.data
    }catch(err){
        console.log(BASE_URL)
    }
}
export const updateFlightproposal =  async(id,data)=>{
    try{
        const response =  api.patch("/vol/update",id,data)
        return response.data
    }catch(err){
        console.log(BASE_URL)
    }
}
export const deleteFlightproposal = async(id)=>{
    try{
        const response = api.delete("/vole/delete",id)
        return  response.data
    }catch(err){
        console.log(BASE_URL)
    }
}
export const findFlightproposal = async(data)=>{
    try{
        const response = api.get("/vol/vol",data)
        return response.data
    }catch(err){
        console.log(BASE_URL)
    }
}
export const getallFlightproposal = async()=>{
    try{
        const response = api.get("/vol/all")
        return response.data
    }catch(err){
        console.log(BASE_URL)
    }
}