import axios from "./api";

const AnnounService = {
  getActiveCard: async (token) => {
    const data = await axios.get(`/api/announcements/active?p_page=12&c_page=1`, {
      headers: { authorization: token },
    });

    return data;
  },
  getDeActiveCard: async (token) =>
    await axios.get(`/api/announcements/inactive`, {
      headers: { authorization: token },
    }),

  setActiveCard: async (id, token) => {
    const data = await axios.patch(
      `/api/announcements/activation/${id}`,
      {},
      {
        headers: { authorization: token },
      }
    );

    return data;
  },

  deleteCard: async (id, token) => {
    const data = await axios.delete(`/api/announcements/delete/${id}`, {
      headers: { authorization: token },
    });

    return data;
  },

  CreateAnnoun: async (body, token) => {
    try {
      const data = await axios.post(`/api/announcements/create`, body, {
        headers: { authorization: token },
      });
      console.log(data);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default AnnounService;
