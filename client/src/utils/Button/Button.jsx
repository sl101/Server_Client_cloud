import s from './Button.module.scss';

export const Button = ({ text, type }) => {
	return (
		<div className={s.wrapper}>
			<button
				className={s.btn}
				type={type}>
				{text}
			</button>
		</div>
	);
}


