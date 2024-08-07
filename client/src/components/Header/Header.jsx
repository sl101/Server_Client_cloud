import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../reducers/userReducer";
import s from './Header.module.scss';
import { useEffect } from "react";
import { auth } from "../../actions/user";

export const Header = () => {

	const dispatch = useDispatch();
	const isAuth = useSelector(state => state.user.isAuth);

	useEffect(() => {
		dispatch(auth());
	}, [isAuth]);

	return (
		<div className={s.header}>
			<div className="container">
				<div className={s.header__content}>
					<NavLink to="/" className={s.header__logo}>Logo</NavLink>
					<ul className={s.navbar}>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/about">About</NavLink>
						</li>
						<li>
							<NavLink to="/contacts">Contacts</NavLink>
						</li>
					</ul>
					<div className={`${s.header__auth} auth`}>

						{!isAuth ?
							<NavLink className={s.auth__btn} to="/login">Login</NavLink>
							: <button className={s.auth__btn} type="button" onClick={() => dispatch(logout())}>Logout</button>}
						{!isAuth ? <NavLink className={s.auth__btn} to="/registration">Registration</NavLink> : ''}

					</div>
				</div>
			</div>
		</div>
	);
};

