import { create } from "apisauce";


const apiClient = create({
    baseURL: "http://192.168.208.15:9000/api"
});

// apiClient.get('/listings').then(response => {
//     if(!response.ok)
//         return response.problem;
// })  # component should not know about the endpoint 

export default apiClient;  