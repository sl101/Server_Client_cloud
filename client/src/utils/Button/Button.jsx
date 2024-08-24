import s from './Button.module.scss';

export const Button = ({ text, type }) => {

	return (
		<button
			className={s.btn}
			type={type}>
			{text}
		</button>
	);
}


