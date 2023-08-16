/* eslint-disable no-unused-vars */
import axios from "./api";

const SearchService = {
  searchOnInput: async (search, city, type, price_type) => {
    let params = {};

    if (price_type != "undefined") {
      params.price_type = price_type;
    }
    if (type != "undefined") {
      params.type = type;
    }
    if (city != "undefined") {
      params.city = city;
    }
    if (search != "undefined") {
      params.search = search;
    }
    params.p_page = 50;
    try {
      const data = await axios.get("/api/search?", { params });
      console.log(data);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  },
  
};

export default SearchService;
