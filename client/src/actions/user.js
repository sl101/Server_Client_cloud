import axios from 'axios';
import { setUser } from "../reducers/userReducer";

// TODO: put url to .env
const url = "http://localhost:5000/api/";

export const register = async (body) => {
	await fetch(`${url}registration`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body
		}
	)
		.then(resp => resp.json())
		.then(data => console.log(data));
};

export const login = (body) => {

	return async dispatch => {
		await fetch(`${url}login`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body
			}
		)
			.then(resp => resp.json())
			.then(data => {
				dispatch(setUser(data));
				localStorage.setItem("token", JSON.stringify(data.token));
			});
	};

};

export const auth = () => {
	return async dispatch => {
		try {
			const response = await axios.get(`${url}auth`,
				{ headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` } }
			);
			dispatch(setUser(response.data.user));
			localStorage.setItem('token', JSON.stringify(response.data.token));
		} catch (e) {
			console.log("🚀 ~ auth ~ error:", e.response);
			localStorage.removeItem('token');
		}
	};
};