import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getFiles, uploadFile } from "../../actions/file";
import { FileList, Popup } from "../../components";
import { Button, Input } from "../../utils";
import { popFromStack } from "../../reducers/fileReducer";
import s from './Disk.module.scss';


export const Disk = ({ isAuth }) => {

	const [isPopup, setIsPopup] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const currentDir = useSelector(state => state.files.currentDir);

	useEffect(() => {
		if (!isAuth) {
			navigate('/');
		}
	}, []);

	useEffect(() => {
		dispatch(getFiles(currentDir));
	}, [currentDir]);

	const fileUploadHeandler = (event) => {
		const files = [...event.target.files];
		files.forEach(file => dispatch(uploadFile(file, currentDir)));
	};

	return (
		<div className={`${s.disk} page`}>
			<Popup currentDir={currentDir} isPopup={isPopup} setIsPopup={setIsPopup} />
			<div className="container">
				{/*<h1 className="page__title">Folder name: {currentDir} </h1>*/}
				<h1 className="page__title">Folder name </h1>
				<div className={s.disk__wrapper}>
					<div className={`${s.disk__controllers} ${s.controllers}`}>
						<div className={s.controllers__btns}>
							{currentDir && <Button
								className={s.disk__back}
								text="Go back"
								onClick={() => dispatch(popFromStack())}
							/>}
							<Button
								className={s.disk__create}
								onClick={() => setIsPopup(!isPopup)}
								text="Create field" />
							<Input
								label='Upload file: '
								value={''}
								setValue={''}
								type='file'
								label_content='upload'
								input_content='upload'
								onChange={(e) => fileUploadHeandler(e)}
								multiple={true}
							/>
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

