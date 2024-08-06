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