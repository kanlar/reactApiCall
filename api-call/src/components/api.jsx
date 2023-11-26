import axios from "axios";
const searchImages = async (e) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID wVk0na_7SSzh9t6X5n72SXCUDMTn_wnjEIR4jXhgOYk",
    },
    params: {
      query: e,
    },
  });
  return response.data.results;
};

export default searchImages;
