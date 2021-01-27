import  axios from "./axios"
export  default  {
    query:(params)=>{
         return  axios({
             method:"get",
             url:"userInfos",
             params
         })
    },
    add:(params)=>{
        return  axios({
            method:"post",
            url:"userInfos",
            data:params
        })
    }
}