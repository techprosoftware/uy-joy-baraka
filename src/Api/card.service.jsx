import axios from "./api";

const token = localStorage.getItem('token')

const CardService = {
  getAllCard: async () => await axios.get(`/api/home`),
  getByCard: async (slug) => await axios.get(`/api/posts/${slug}`),
  getByPage: async (page) => await axios.get(`/api/home?c_page=${page}`),
  likeCard: async (id) => {
    try {
      return await axios.patch(`/api/announcements/${id}/like`, {announcement_id: id}, {
        headers: {authorization: token},
      })
    } catch (err) {
      return await err
    }
  }
}

export default CardService;
