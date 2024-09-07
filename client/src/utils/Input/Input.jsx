import s from './Input.module.scss';

export const Input = ({ value, type, label, setValue, placeholder, label_content, input_content, multiple, onChange }) => {
	return (
		<label className={`${s.label} ${s[label_content]}`}>
			<span
				className={s.label__value}>
				{label}
			</span>
			<input
				className={`${s.input} ${s[input_content]}`}
				value={value}
				type={type}
				multiple={multiple}
				onChange={onChange ? onChange : (e) => setValue(e.target.value)}
				placeholder={placeholder} />
		</label>
	);
}


