import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
  headers: {
    Authorization:
      "Client-ID fd1ee3c285f1d6383333cb6901c5f7a41fa0cacb6a82043c9dd4e8553e3492c0 "
  }
});
