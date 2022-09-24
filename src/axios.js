import axios from "axios";

const instance = axios.create(
    {
        baseURL: "https://54.206.59.240:8080/"
    }
)

export default instance;