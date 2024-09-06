import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getFiles } from "../../actions/file";
import { FileList, Popup } from "../../components";
import { Button } from "../../utils";
import { useNavigate } from "react-router-dom";
import s from './Disk.module.scss';


export const Disk = ({ isAuth }) => {

	const [isPopup, setIsPopup] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const currentDir = useSelector(state => state.files.currentDir);
	console.log("🚀 ~ Disk ~ currentDir:", currentDir);

	useEffect(() => {
		if (!isAuth) {
			navigate('/');
		}
	}, []);

	useEffect(() => {
		dispatch(getFiles(currentDir));
	}, [currentDir]);

	//const createDirHandler = () => {
	//console.log("Click createDirHandler");
	//dispatch(setPopupDisplay('flex'));
	//setIsPopup(!isPopup);
	//};

	return (
		<div className={`${s.disk} page`}>
			<Popup currentDir={currentDir} isPopup={isPopup} setIsPopup={setIsPopup} />
			<div className="container">
				<h1 className="page__title">Folder name</h1>
				<div className={s.disk__wrapper}>
					<div className={`${s.disk__controllers} ${s.controllers}`}>
						<div className={s.controllers__btns}>
							<Button className={s.disk__back} text="Go back" />
							<Button
								className={s.disk__create}
								onClick={() => setIsPopup(!isPopup)}
								text="Create field" />
						</div>
						<ul className={s.controllers__list}>
							<li className={s.controllers__item}><p>filter</p></li>
							<li className={s.controllers__item}><p>views</p></li>
						</ul>
					</div>
					<FileList />
				</div>
			</div>
		</div>
	);
};

