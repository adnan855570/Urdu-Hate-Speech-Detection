import { apiClient } from "../axiosConfig";

export const signup = (payload) => {
	const response = apiClient.post("/signup", payload);
	return response;
};

export const signin = (payload) => {
	const response = apiClient.post("/signin", payload);
	return response;
};
