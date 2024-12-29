import axios from "axios";

export const postUser = async (state) => {
  const url = `http://universities.hipolabs.com/search?country=${state}`;
  return (await axios.get(url)).data;
};
