import { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Button } from "../../utils";
import { login } from "../../actions/user";
import s from './Login.module.scss';

export const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const fetchAuth = async (e) => {
		e.preventDefault();
		dispatch(login(JSON.stringify({ email, password })));
	};

	return (
		<div className={`${s.login} page`}>
			<div className="container">
				<div className={s.login__content}>
					<h1>Login</h1>
					<form onSubmit={fetchAuth} className={s.login__form}>
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
						<Button text='Sing in' type='submit' />

					</form>
				</div>
			</div>
		</div>
	);
};
