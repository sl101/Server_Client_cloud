import s from './Button.module.scss';

export const Button = ({ text, onClick, type }) => {

	return (
		<button
			className={s.btn}
			onClick={onClick}
			type={type}>
			{text}
		</button>
	);
}


