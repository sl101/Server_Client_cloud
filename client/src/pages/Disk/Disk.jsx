import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { createDir, getFiles } from "../../actions/file";
import s from './Disk.module.scss';
import { FileList } from "../../components";
import { Button } from "../../utils";

export const Disk = () => {
	const dispatch = useDispatch();
	const currentDir = useSelector(state => state.files.currentDir);
	//console.log("🚀 ~ Disk ~ currentDir:", currentDir);

	useEffect(() => {
		dispatch(getFiles(currentDir));
	}, [currentDir]);

	const createDirHandler = () => {
		console.log("Click createDirHandler");
		dispatch(createDir(currentDir, 'randomName'));
	};

	return (
		<div className={`${s.disk} page`}>
			<div className="container">
				<h1 className="page__title">Folder name</h1>
				<div className={s.disk__wrapper}>
					<div className={`${s.disk__controllers} ${s.controllers}`}>
						<div className={s.controllers__btns}>
							<Button className={s.disk__back} text="Go back" />
							<Button
								className={s.disk__create}
								onClick={createDirHandler}
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

