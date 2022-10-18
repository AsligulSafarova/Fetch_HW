export const getProduct = (callback)=>
    fetch("https://dummyjson.com/products")
    .then(resp=>resp.json())
    .then(json =>callback(json.products))



 export const addUser = (body, callback) =>

    fetch("https://dummyjson.com/products/add ", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
    })
    .then(resp=>resp.json())
    .then(user_data=>callback(user_data))
 
     
