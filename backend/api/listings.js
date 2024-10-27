import client from './client';


const endpoint = '/listings';
const getListings = async () => {
    const response = client.get(endpoint)
    console.log(response.data)
};

export default {
    getListings,
}