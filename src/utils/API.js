const URL_PREFIX = "http://localhost:3001"
// const URL_PREFIX = "https://augfish-api.herokuapp.com"

const API = {
    // login:function(userData){
    //     console.log(userData)
    //     return fetch(`${URL_PREFIX}/api/users/login`,{
    //         method:"POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //           },
    //         body:JSON.stringify(userData)
    //     }).then(res=> res.json()).catch(err=>null)
    // },
    // checkAuth:function(userData){
    //     return fetch(`${URL_PREFIX}/api/users/check/auth`,{
    //         method:"GET",
    //         body:JSON.stringify(userData)
    //     }).then(res=> res.json()).catch(err=>null)
    // },
    // getUsers:function(userId){
    //     return fetch(`${URL_PREFIX}/api/users/`,{
    //     }).then(res=>res.json()).catch(err=>null)
    // },
    getUserData:function(userId){
        return fetch(`${URL_PREFIX}/api/users/`+userId,{
        }).then(res=>res.json(res)).catch(err=>null)
    },
    // getOneTank:function(tankId){
    //     return fetch(`${URL_PREFIX}/api/tanks/${tankId}`,{
    //     }).then(res=>res.json()).catch(err=>null)
    // },
    createPoint:function(geoData){
        console.log(geoData)
        return fetch(`${URL_PREFIX}/api/geos`,{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body:JSON.stringify(geoData)
        }).then(res=> res.json()).catch(err=>null)
    }
    // createPoint:function(token,fishData){
    //     return fetch(`${URL_PREFIX}/api/fishes`,{
    //         method:"POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             "authorization": `Bearer ${token}`
    //           },
    //         body:JSON.stringify(fishData)
    //     }).then(res=> res.json()).catch(err=>null)
    // }
}

module.exports = API;