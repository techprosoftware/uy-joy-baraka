import axios from "./api";

const token = localStorage.getItem("token") || "";

const CardService = {
  getAllCard: async () => await axios.get(`/api/home`),
  getByCard: async (slug) => await axios.get(`/api/posts/${slug}`),
  getByPage: async (page) => await axios.get(`/api/home?c_page=${page}`),
  likeCard: async (id) => {
    try {
      const data = await axios.patch(
        `/api/announcements/${id}/like`,
        { announcement_id: id },
        {
          headers: { authorization: token },
        }
      );

      return data;
    } catch (error) {
      throw new Error(error)
    }
  },
  unLikeCard: async (id) => {
    try {
      return await axios.patch(
        `/api/announcements/${id}/unlike`,
        { announcement_id: id },
        {
          headers: { authorization: token },
        }
      );
    } catch (err) {
      return await err;
    }
  },
  getLike: async () => {
    try {
      return await axios.get(`/api/announcements/liked?p_page=50`, {
        headers: { authorization: token },
      });
    } catch (err) {
      return await err;
    }
  },
};

export default CardService;
