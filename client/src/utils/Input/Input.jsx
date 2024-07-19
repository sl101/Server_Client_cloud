import s from './Input.module.scss';

export const Input = ({ value, type, label, setValue, placeholder }) => {
	return (
		<label className={s.label}>
			<span
				className={s.label__value}>
				{label}
			</span>
			<input
				className={s.input}
				value={value}
				type={type}
				onChange={(e) => setValue(e.target.value)}
				placeholder={placeholder} />
		</label>
	);
}


