
const baseUrl = 'http://localhost:3000/api';

const api = {
    getFeaturedCategory: async ()=> {
       const response = await fetch(`${baseUrl}/categories`);
       return response.json()
    }
}

export default api