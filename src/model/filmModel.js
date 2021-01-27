import  axios  from  "./axios";

export  default  {
    bannerList:()=>{
        return axios({
            method:"get",
            url:"banner"
        })
    },
    movielist:(params)=>{
         return axios({
             methods:'get',
             url:'movielist',
             params
         })
    }
}