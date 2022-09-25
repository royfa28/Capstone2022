import axios from "axios";

const instance = axios.create(
    {
        // baseURL: "http://ec2-54-206-59-240.ap-southeast-2.compute.amazonaws.com:8080/"
    }
)

export default instance;