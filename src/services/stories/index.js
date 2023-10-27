import axios from "axios"


const baseURL = import.meta.env.VITE_BACKEND_API

const getStories = async () => {
    const res = await axios.get(`${baseURL}/top-stories`)
    return res;
}

export { getStories }