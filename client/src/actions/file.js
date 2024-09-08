import axios from 'axios';
import { setFiles, addFile, deleteFileAction } from "../reducers/fileReducer";

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
					if (totalLength) {
						let progress = Math.round((progressEvent.loaded * 100) / totalLength);
					}
				}
			});
			dispatch(addFile(response.data));
		} catch (e) {
			console.log("uploadFile ~ error:", response.data.message);
		}
	};
}

export async function downloadFile(file) {
	try {
		const response = await fetch(`${url}files/download?id=${file._id}`,
			{
				headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` }
			}
		);

		if (response.status === 200) {
			const blob = await response.blob();
			const downloadUrl = window.URL.createObjectURL(blob);
			const link = document.createElement('a');
			link.href = downloadUrl;
			link.download = file.name;
			document.body.appendChild(link);
			link.click();
			link.remove();
		}
	} catch (error) {
		console.log("downloadFile ~ error:", response.data.message);
	}

}

export function deleteFile(file) {
	return async dispatch => {
		try {
			const response = await axios.delete(`${url}files?id=${file._id}`,
				{
					headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` }
				});
			dispatch(deleteFileAction(file._id));
		} catch (e) {
			console.log("deleteFile ~ error:", e?.response?.data?.message);
			alert(e?.response?.data?.message);
		}
	};
}