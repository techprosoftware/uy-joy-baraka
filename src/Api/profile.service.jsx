import axios from "./api";
const token = localStorage.getItem("token");

//* Indicates profile service is enabled
const ProfileService = {
  //* GET | profile to insert asynchronously
  GetProfile: async () =>
    await axios.get("/api/users/profile", {
      headers: {
        Authorization: `${token}`,
      },
    }),

  //* PATCH | Edit fullname REQUEST
  EditFullname: async (body) => {
    //* Get full profile name and update asynchronously
    const data = await axios.patch("/api/users/edit-full-name", body, {
      headers: {
        Authorization: `${token}`,
      },
    });

    //* If success, return true and continue to next;
    return data;
  },

  EditAvatar: async (body) => {
    //* Get image profile and update asynchronously
    const data = await axios.patch("/api/users/avatar", body, {
      headers: {
        Authorization: `${token}`,
      },
    });

    //* If success, return true and continue to next;
    return data;
  },

  //* PATCH | Edit phone REQUEST
  EditPhone: async (body) => {
    //* WATCH full phone and update asynchronously
    const data = await axios.patch("/api/users/edit-phone", body, {
      headers: {
        Authorization: `${token}`,
      },
    });

    //* If success, return true and continue to next;
    return data;
  },
};

export default ProfileService;
