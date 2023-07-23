import axios from "./api";

const SearchService = {
  searchOnInput: async (body) => {
    console.log(body);
    try {
      const data = await axios.get(`/api/search?search=${body}`);
    return data;
    } catch (error) {
      console.log(error.message);
    }
  },

};

export default SearchService;
