import axios from 'axios';
import { setFiles, addFile } from "../reducers/fileReducer";

// TODO: put url to .env
const url = "http://localhost:5000/api/";


export function getFiles(dirId) {
	return async dispatch => {
		try {
			const response = await axios.get(`${url}files${dirId ? '?parent=' + dirId : ''}`, {
				headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` }
			});
			dispatch(setFiles(response.data));
		} catch (e) {
			console.log(e.response.data.message);
		}
	};
}

export function createDir(dirId, name) {
	console.log("🚀 ~ createDir ~ dirId:", dirId);
	console.log("🚀 ~ createDir ~ name:", name);
	return async dispatch => {
		try {
			const response = await axios.post(`${url}files`,
				{
					name,
					parent: dirId,
					type: 'dir'
				},
				{
					headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` }
				});
			dispatch(addFile(response.data));
		} catch (e) {
			console.log(e.response.data.message);
		}
	};
}