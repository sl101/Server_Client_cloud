import { useSelector } from "react-redux";
import { FileItem } from "../FileItem/FileItem";
import s from './FileList.module.scss';

export const FileList = () => {

	const files = useSelector(state => state.files.files);
	return (
		<div className={s.filelist}>
			<ul className={s.filelist__header}>
				<li >Name</li>
				<li >Date</li>
				<li >Size</li>
			</ul>
			<ul className={s.filelist__files}>
				{files.map(file => <FileItem key={file._id} file={file} />)}
			</ul>
		</div>
	);
}


