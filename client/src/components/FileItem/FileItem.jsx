import { useDispatch, useSelector } from "react-redux";
import { IoIosFolder, IoIosDocument } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { pushToStack, setCurrentDir } from "../../reducers/fileReducer";
import { deleteFile, downloadFile } from "../../actions/file";
import s from './FileItem.module.scss';

export const FileItem = ({ file }) => {
	const { date, name, size, type, _id } = { ...file };
	const dispatch = useDispatch();
	const currentDir = useSelector(state => state.files.currentDir);

	const dateObj = new Date(date);

	const openDirHandler = (type) => {
		if (type === 'dir') {
			dispatch(pushToStack(currentDir));
			dispatch(setCurrentDir(_id));
		} else {
			//TODO: File is not a directory
		}
	};

	const downloadClickHandler = (e) => {
		e.stopPropagation();
		downloadFile(file);
	};

	const deleteClickHandler = (e) => {
		e.stopPropagation();
		dispatch(deleteFile(file));
	};

	return (
		<li
			className={s.file}
			onClick={() => openDirHandler(type)} >
			<div className={s.file__view}>
				<div className={s.file__icon}>
					{type === "dir" ?
						<IoIosFolder className={s.icon} /> :
						<IoIosDocument className={s.icon} />
					}
				</div>
				<p>{name}</p>
			</div>

			<p>{`${String(dateObj.getDate()).padStart(2, '0')}.${String(dateObj.getMonth() + 1).padStart(2, '0')}.${dateObj.getFullYear()}`}</p>
			<p>{size}</p>
			<div className={s.file__actions}>
				{type !== 'dir' ?
					<IoMdDownload
						onClick={(e) => downloadClickHandler(e)}
						className={s.icon} /> : ''}
				<RiDeleteBin5Fill
					onClick={(e) => deleteClickHandler(e)}
					className={s.icon} />
			</div>
		</li>
	);
}


