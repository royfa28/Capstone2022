import axios from "axios";

const instance = axios.create(
    {baseURL: "https://54.206.59.240/"}
)

export default instance;