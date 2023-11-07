import { newsApiKey } from "./Apikey";
import axios from "axios";

//endpoint
const apiBaseUrl = "https://newsapi.org/v2";
const breakingNewsUrl = `${apiBaseUrl}/top-headlines?country-za&apiKey-${newsApiKey}`;
const recommendedNewsUrl = `${apiBaseUrl}/top-headlines?country-za&category-business&apiKey-${newsApiKey}`;
const discoverNewsUrl = (discover) => `${apiBaseUrl}/top-headlines?country-za&category-${discover}&apiKey-${newsApiKey}`;
const searchNewsUrl = (query) => `${apiBaseUrl}/everything?q-${query}&apiKey-${newsApiKey}`;

//fetch data
const newsApiCall = async (endpoints, params) => {
    const options = {
        method: "GET",
        url: endpoints,
        params: params ? params : {},
    }

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log("Api try error: ", error);
        return {};
    }
}

//get news by type (breaking, recommended, discovery or user_search_query)
export const fetchBreakingNews = async () => {
    return await newsApiCall(breakingNewsUrl);
}

export const fetchRecommendedNews = async () => {
    return await newsApiCall(recommendedNewsUrl);
}

export const fetchDiscoverNews = async (discover) => {
    return await newsApiCall(discoverNewsUrl(discover));
}

export const fetchSearchNews = async (query) => {
    const endpoint = searchNewsUrl(query)
    return await newsApiCall(endpoint);
}