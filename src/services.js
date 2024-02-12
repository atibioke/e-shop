import axios from 'axios';

export const fetchProduct = async () => {
  try {
    const {data} = await axios.get(process.env.NEXT_PUBLIC_API_URL);

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
