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
      console.log(data);

      return data;
    } catch (err) {
      console.log(err.message);
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
      return await axios.get(`/api/announcements/liked`, {
        headers: { authorization: token },
      });
    } catch (err) {
      return await err;
    }
  },
};

export default CardService;
