import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFiles } from "../../actions/file";
import s from './Disk.module.scss';
import { FileList } from "../../components";
import { Button } from "../../utils";

export const Disk = () => {
	const dispatch = useDispatch();
	const currentDir = useSelector(state => state.files.currentDir);
	console.log("🚀 ~ Disk ~ currentDir:", currentDir);

	useEffect(() => {
		dispatch(getFiles(currentDir));
	}, [currentDir]);

	return (
		<div className={`${s.disk} page`}>
			<div className="container">
				<div className={s.disk__btns}>
					<Button className={s.disk__back} text="Go back" />
					<Button className={s.disk__create} text="Create field" />
				</div>
				<FileList />
			</div>
		</div>
	);
};

