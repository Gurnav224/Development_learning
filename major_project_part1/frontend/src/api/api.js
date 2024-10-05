
const baseUrl = 'http://localhost:3000/api';

const api = {
    getFeaturedCategory: async ()=> {
            const response = await fetch(`${baseUrl}/categories`);
            return response.json()
       
      
    },
    getAllProducts:async () => {
            const response = await fetch(`${baseUrl}/products`);
            return response.json()
        
    }
}

export default api