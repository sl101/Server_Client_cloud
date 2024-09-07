import axios from 'axios';
import { setFiles, addFile } from "../reducers/fileReducer";

// TODO: put url to .env
const url = "http://localhost:5000/api/";


export function getFiles(dirId) {
	return async dispatch => {
		try {
			const response = await axios.get(`${url}files/${dirId ? '?parent=' + dirId : ''}`, {
				headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` }
			});
			dispatch(setFiles(response.data));
		} catch (e) {
			console.log(e.response.data.message);
		}
	};
}

export function createDir(dirId, name) {
	return async dispatch => {
		try {
			const response = await axios.post(`${url}files/`,
				{
					name,
					parent: dirId,
					type: 'dir'
				},
				{
					headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` }
				});
			//console.log("🚀 ~ createDir ~ response:", response);
			dispatch(addFile(response.data));
		} catch (e) {
			console.log(e.response.data.message);
		}
	};
}

export function uploadFile(file, dirId) {
	return async dispatch => {
		try {
			const formData = new FormData();
			formData.append('file', file);
			if (dirId) {
				formData.append('parent', dirId);
			}
			const response = await axios.post(`${url}files/upload`, formData, {
				headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
				onUploadProgress: progressEvent => {
					const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
					console.log('total', totalLength);
					if (totalLength) {
						let progress = Math.round((progressEvent.loaded * 100) / totalLength);
						console.log(progress);
					}
				}
			});
			//console.log("🚀 ~ uploadFile ~ response.data:", response.data);
			dispatch(addFile(response.data));
		} catch (e) {
			console.log("🚀 ~ uploadFile ~ e:", response.data.message);
			//alert(e.response.data.message);
		}
	};
}