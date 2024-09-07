import { useDispatch, useSelector } from "react-redux";
import s from './FileItem.module.scss';
import { IoIosFolder, IoIosDocument } from "react-icons/io";
import { pushToStack, setCurrentDir } from "../../reducers/fileReducer";

export const FileItem = ({ file }) => {
	const { childs, date, name, path, size, type, user, _id } = { ...file };
	const dispatch = useDispatch();
	const currentDir = useSelector(state => state.files.currentDir);

	const dateObj = new Date(date);

	const openDirHandler = () => {
		dispatch(pushToStack(currentDir));
		dispatch(setCurrentDir(_id));
	};

	return (
		<li
			className={s.file}
			onClick={type === 'dir' ? () => openDirHandler() : ''} >
			<div className={s.file__view}>
				{type === "dir" ?
					<IoIosFolder /> :
					<IoIosDocument />
				}
				<p>{name}</p>
			</div>
			<p>{`${String(dateObj.getDate()).padStart(2, '0')}.${String(dateObj.getMonth() + 1).padStart(2, '0')}.${dateObj.getFullYear()}`}</p>
			<p>{size}</p>
		</li>
	);
}


