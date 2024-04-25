import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '42322545-3f83537899e903f7192654afe',
    per_page: '12',
    image_type: 'photo',
    orientation: 'horizontal',
  },
});

export const getImages = async (query, page) => {
  const response = await instance(`?q=${query}&page=${page}`);
  const data = await response.data;
  console.log(data);
  return data;
};
