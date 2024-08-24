import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../utils";
import { register } from "../../actions/user";
import s from './Registration.module.scss';

export const Registration = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const fetchregister = async (e) => {
		e.preventDefault();
		try {
			const status = await dispatch(register(JSON.stringify({ email, password })));
			if (status === 200) {
				navigate('/disk');
			}
		} catch (error) {
			console.error('Error:', error);
		}
	};

	return (
		<div className={`${s.register} page`}>
			<div className="container">
				<div className={s.register__content}>
					<h1>Registration</h1>
					<form onSubmit={fetchregister} className={s.register__form}>
						<Input
							label='E-mail: '
							value={email}
							setValue={setEmail}
							type='email'
							placeholder='ex@mail.com' />
						<Input
							label='Password: '
							value={password}
							setValue={setPassword}
							type='password'
							placeholder='password' />
						<div className={s.btn__wrapper}>
							<Button text='Register' type='submit' />
						</div>

					</form>
				</div>
			</div>
		</div>
	);
};

