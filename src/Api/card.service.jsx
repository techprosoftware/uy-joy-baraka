import axios from "./api";

const token = localStorage.getItem("token");

const CardService = {
  getAllCard: async () => await axios.get(`/api/home`),
  getByCard: async (slug) => await axios.get(`/api/posts/${slug}`),
  getByPage: async (page) => await axios.get(`/api/home?c_page=${page}`),
  likeCard: async (id) => {
    try {
      return await axios.patch(
        `/api/announcements/${id}/like`,
        { announcement_id: id },
        {
          headers: { authorization: token },
        }
      );
    } catch (err) {
      return await err;
    }
  },
  unLikeCard: async (id) => {
    try {
      return await axios.patch(`/api/announcements/${id}/unlike`, {}, {
        headers: {authorization: token},
      })
    } catch (err) {
      return await err
    }
  },
  getLike: async () => {
    try {
      return await axios.get(`/api/announcements/liked`, {
        headers: { authorization: token },
      });
    } catch (err) {
      return await err;
    }
  },
};

export default CardService;
// api/announcements/f26b2f68-5cd0-4fd9-875c-41163c90e0b3/unlike
