import { useState } from "react";
import { useDispatch } from "react-redux";
import { createDir } from "../../actions/file";
import { Button, Input } from "../../utils";
import s from './Popup.module.scss';

export const Popup = ({ currentDir, isPopup, setIsPopup }) => {
	const [dirName, setDirName] = useState('');

	const dispatch = useDispatch();

	const createFile = () => {
		if (dirName) {
			dispatch(createDir(currentDir, dirName));
			setDirName('');
			setIsPopup(!isPopup);

		}
	};

	return (
		<div className={s.popup}
			style={{ display: isPopup ? 'flex' : 'none' }}
			onClick={() => setIsPopup(!isPopup)}>
			<div className={s.popup__content}
				onClick={(e) => e.stopPropagation()}>
				<div className={s.popup__header}>
					<p className={s.popup__title}>Create new folder</p>
					<Button text='X'
						onClick={() => setIsPopup(!isPopup)} />
				</div>
				<Input
					type='text'
					placeholder='Enter folder name...'
					value={dirName}
					setValue={setDirName}
					content='popup' />
				<div
					className={s.popup__create}
				>
					<Button
						text='Create'
						onClick={createFile} />
				</div>
			</div>
		</div >
	);
};


