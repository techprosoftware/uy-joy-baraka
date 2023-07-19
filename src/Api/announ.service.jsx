import axios from "./api";

const AnnounService = {
  getActiveCard: async (token) =>
    await axios.get(`/api/announcements/active`, {
      headers: { authorization: token },
    }),
  getDeActiveCard: async (token) =>
    await axios.get(`/api/announcements/inactive`, {
      headers: { authorization: token },
    }),

  setActiveCard: async (id, token) => {
    await axios
      .patch(
        `/api/announcements/activation/${id}`,
        {},
        {
          headers: { authorization: token },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  },

  deleteCard: async (id, token) => {
    await axios
      .delete(`/api/announcements/delete/${id}`, {
        headers: { authorization: token },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  },
  // SearchCard: async ()
};

export default AnnounService;
