const SET_FILES = "SET_FILES";
const SET_CURRENT_DIR = "SET_CURRENT_DIR";
const ADD_FILE = "ADD_FILE";
const PUSH_TO_STACK = "PUSH_TO_STACK";
const POP_FROM_STACK = "POP_FROM_STACK";
const DELETE_FILE = "DELETE_FILE";

const defaultState = {
	files: [],
	currentDir: null,
	//currentDir: {name: null, id: null},
	dirStack: []
};

export default function fileReducer(state = defaultState, action) {
	switch (action.type) {
		case SET_FILES: return { ...state, files: action.payload };
		case SET_CURRENT_DIR: return { ...state, currentDir: action.payload };
		case ADD_FILE: return { ...state, files: [...state.files, action.payload] };
		case PUSH_TO_STACK: return { ...state, dirStack: [...state.dirStack, action.payload] };
		case DELETE_FILE: return { ...state, files: [...state.files.filter(file => file._id !== action.payload)] };
		case POP_FROM_STACK:
			return {
				...state,
				currentDir: state.dirStack.pop(),
				dirStack: [...state.dirStack]
			};
		default:
			return state;
	}
};

export const setFiles = (files) => ({ type: SET_FILES, payload: files });
export const setCurrentDir = (dir) => ({ type: SET_CURRENT_DIR, payload: dir });
export const addFile = (file) => ({ type: ADD_FILE, payload: file });
export const deleteFileAction = (fileId) => ({ type: DELETE_FILE, payload: fileId });
export const pushToStack = (dir) => ({ type: PUSH_TO_STACK, payload: dir });
export const popFromStack = () => ({ type: POP_FROM_STACK });
