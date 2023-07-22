import axios from "./api";

const SearchService = {
  searchOnInput: async (body) => {
    const data = await axios.post(`/api/search?search=${body}`);
    return data;
  },

};

export default SearchService;
