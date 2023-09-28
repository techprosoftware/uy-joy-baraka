import axios from "./api";

const AnnounService = {
  getAds: async (token) => {
    const data = await axios.get(`/ads/site`, {
      headers: { authorization: token },
    });
    return data;
  },
  getAdsMin: async (token) => {
    const data = await axios.get(`/ads/min-site`, {
      headers: { authorization: token },
    });
    return data;
  },

  getActiveCard: async (token) => {
    const data = await axios.get(`/api/announcements/active?p_page=50`, {
      headers: { authorization: token },
    });

    return data;
  },
  getDeActiveCard: async (token) =>
    await axios.get(`/api/announcements/inactive?p_page=50`, {
      headers: { authorization: token },
    }),

  setActiveCard: async (id, token) => {
    axios.interceptors.response.use(
      (res) => {
        console.log(res);
        return res;
      },
      (err) => {
        if (axios.AxiosError(err)) {
          console.log("dsad");
        }
      }
    );
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
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default AnnounService;
