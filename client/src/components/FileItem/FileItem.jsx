import s from './FileItem.module.scss';
import { IoIosFolder, IoIosDocument } from "react-icons/io";

export const FileItem = ({ file }) => {
	//console.log("🚀 ~ FileItem ~ file:", file);
	const { childs, date, name, path, size, type, user, _id } = { ...file };
	const dateObj = new Date(date);
	return (
		<li className={s.file}>
			<div className={s.file__view}>
				{type === "dir" ?
					<IoIosFolder /> :
					<IoIosDocument />
				}
				<p>{name}</p>
			</div>
			<p>{`${String(dateObj.getDate()).padStart(2, '0')}.${String(dateObj.getMonth() + 1).padStart(2, '0')}.${dateObj.getFullYear()}`}</p>
			<p>{size}</p>
			{/*<ul>
				{childs.map((child, index) => <li key={index}>{child}</li>)}
			</ul>*/}
		</li>
	);
}


