import axios from "./api";

const CardService = {
  getAllCard: async () => await axios.get(`/api/home`),
  getByCard: async (slug) => await axios.get(`/api/posts/${slug}`),
}

export default CardService;
