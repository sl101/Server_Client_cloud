import { useState } from "react";
import { Button, Input } from "../../utils";
import s from './Registration.module.scss';

export const Registration = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const fetchregister = async (e) => {
		e.preventDefault();
		register(JSON.stringify({ email, password }));
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
						<Button text='Register' type='submit' />

					</form>
				</div>
			</div>
		</div>
	);
};

