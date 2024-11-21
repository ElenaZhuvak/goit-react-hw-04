import axios from "axios";

export const fetchArticles = async (query, page) => {
    const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}&page=${page}&hitsPerPage=100`);
    return response.data
}