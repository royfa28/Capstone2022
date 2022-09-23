import axios from "axios";

const instance = axios.create(
    {baseURL: "https://ec2-54-206-59-240.ap-southeast-2.compute.amazonaws.com/"}
)

export default instance;