import axios from 'axios';

// export const API_URL = 'http://89.223.124.38:4000/api';
export const API_URL = 'http://localhost:4000/api';
export const VK_API_URL = 'https://vkapi.botinviter.ru/VkApi/';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL
});

const $vk_api = axios.create({
  withCredentials: true,
  baseURL: VK_API_URL
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
})

$vk_api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('brtk')}`;
  return config;
})

$api.interceptors.response.use((config) => {
  return config;
}, async (error)=> {
  const originRequest = error.config
  if(error.response.status === 401 && error.config && !error.config._isRetry) {
    originRequest._isRetry = true;
    try {
      const response = await axios.get(`${API_URL}/refresh`,{ withCredentials:true });
      localStorage.setItem('token',response.data.accessToken)
      return $api.request(originRequest)
    } catch (e) {

    }
  }
   throw error;
})

const api =  {
  vk_api: $vk_api,
  main_api: $api
}; 
export default api;