import axios from "./api";

const SearchService = {
  searchOnInput: async (body, city, type, price_type) => {
    console.log(body);
    try {
        return await axios.get(`/api/search?${body ? `search=${body}` : city ? `&city=${city}` : type ? `&type=${type}` : price_type ? `&price_type=${price_type}` : ""}`);
    //   } else if (city && type && price_type) {
    //     const data = await axios.get(
    //       `/api/search?city=${city}&type=${type}$price_type=${price_type}`
    //     );
    //     return data;
    //   } else if (city && type) {
    //     const data = await axios.get(`/api/search?city=${city}&type=${type}`);
    //     return data;
    //   } else if (city && price_type) {
    //     const data = await axios.get(
    //       `/api/search?city=${city}&price_type=${price_type}`
    //     );
    //     return data;
    //   } else if (type && price_type) {
    //     const data = await axios.get(
    //       `/api/search?type=${type}&price_type=${price_type}`
    //     );
    //     return data;
    //   } else if (city) {
    //     const data = await axios.get(`/api/search?city=${city}`);
    //     return data;
    //   } else if (type) {
    //     const data = await axios.get(`/api/search?type=${type}`);
    //     return data;
    //   } else if (price_type) {
    //     const data = await axios.get(`/api/search?price_type=${price_type}`);
    //     return data;
    //   }
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default SearchService;
