import qs from "qs";
import axios from "axios";

const ClientID = "0e905e5d2ea5ec6";
const ROOT_URL = "https://api.imgur.com";

export default {
  login() {
    // querystring parameters to be used by qs
    const querystring = {
      client_id: ClientID,
      response_type: "token",
    };
    // will go to imgur to authenticate token
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      querystring
    )}`;
  },
  fetchImages(token) {
    return axios(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  uploadImages(images, token) {
    const promises = Array.from(images.target.files).map((image) => {
      const formData = new FormData();
      formData.append("image", image);

      return axios.post(`${ROOT_URL}/3/image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    });
    return Promise.all(promises);
  },
};
