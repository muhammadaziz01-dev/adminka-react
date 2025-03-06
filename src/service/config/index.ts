import axios from "axios";
import { getCookies, setCookies } from "../../utils/cookie";

const URL = import.meta.env.VITE_BASE_URL;
console.log("Base URL: " + URL);


const request = axios.create({
    baseURL: URL,
});

async function refreshAccessToken() {
    try {
        const _refresh_token = getCookies("refresh_token");

        if (!_refresh_token) {
            throw new Error("Refresh token not found in cookies");
        }

        // Refresh token endpointni to'g'ri ko'rsatamiz
        const response = await axios.post(`${URL}/auth/refresh`, { refresh_token: _refresh_token });

        const { access_token, refresh_token } = response.data;

        setCookies("access_token", access_token);
        setCookies("refresh_token", refresh_token);

        return access_token;
    } catch (error) {
        console.error("Error refreshing access token:", error);
        return null;
    }
}

// Request interceptor: har bir so‘rovga access_token qo‘shamiz
request.interceptors.request.use((config) => {
    const access_token = getCookies("access_token");
    if (access_token) {
        config.headers["Authorization"] = `Bearer ${access_token}`;
    }
    return config;
});

// Response interceptor: agar 401 bo‘lsa, refresh qilib qayta jo‘natamiz
request.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response && error.response.status === 401) {
            const access_token = await refreshAccessToken();

            if (access_token) {
                // Original requestni qayta jo'natamiz
                error.config.headers["Authorization"] = `Bearer ${access_token}`;
                return request(error.config);
            } else {
                console.error("Could not refresh access token, logging out...");
                return Promise.reject(error);
            }
        }

        return Promise.reject(error);
    }
);

export default request;
