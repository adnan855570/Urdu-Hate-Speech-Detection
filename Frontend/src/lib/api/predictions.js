import axios from "axios";

export const fetch_bert = async (input) => {
	const API_URL = "http://127.0.0.1:5000";

	const payload = {
		texts: [input],
	};

	const response = await axios.post(`${API_URL}/predict`, payload);

	return response.data?.predictions[0];
};

export const fetch_gpt = async (input) => {
	const modelId = "";
	const apikey = "";
	const response = await axios.post(
		"",
		{
			model: modelId,
			messages: [
				{role: "system", content: "Classify the sentiment of this tweet."},
				{role: "user", content: input},
			],
		},
		{
			headers: {
				Authorization: `Bearer ${apikey}`,
				"Content-Type": "application/json",
			},
		},
	);
	return response.data?.choices[0]?.message.content;
};

export const fetch_roberta = async (input) => {
	const API_URL = "http://127.0.0.1:5001";

	const payload = {
		texts: [input],
	};

	const response = await axios.post(`${API_URL}/predict`, payload);

	return response.data?.predictions[0];
};
