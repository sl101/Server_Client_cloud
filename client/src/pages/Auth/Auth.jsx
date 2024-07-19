import { useState } from "react";
import { Input, Button } from "../../utils";
import s from './Auth.module.scss';

export const Auth = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const url = "http://localhost:5000/api/login";

	const fetchAuth = async (e) => {
		e.preventDefault();
		await fetch(url,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ email, password })
			}
		)
			.then(resp => resp.json())
			.then(data => console.log(data));

	};

	return (
		<div className={`${s.auth} page`}>
			<div className="container">
				<div className={s.auth__content}>
					<h1>Login</h1>
					<form onSubmit={fetchAuth} className={s.auth__form}>
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
