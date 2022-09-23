import axios from "axios";

const instance = axios.create(
    {baseURL: "https://test-deploy.d31mrd1r61idsu.amplifyapp.com/"}
)

export default instance;