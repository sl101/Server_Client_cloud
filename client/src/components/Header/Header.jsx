import s from './Header.module.scss';

export const Header = () => {

	return (
		<div className={s.header}>
			<div className="container">
				<div className={s.header__content}>
					<div className={s.header__logo}>Logo</div>
					<ul className={s.navbar}>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/about">About</a>
						</li>
						<li>
							<a href="/contacts">Contacts</a>
						</li>
					</ul>
					<div className={s.header__auth}>
						<a href="/auth">Login</a>
						<a href="/registration">Registration</a>
					</div>
				</div>
			</div>
		</div>
	);
};

