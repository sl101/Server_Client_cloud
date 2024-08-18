import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { logout } from "../../reducers/userReducer";
import s from './Header.module.scss';

export const Header = ({ isAuth }) => {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const fetchLogout = async () => {
		dispatch(logout());
		navigate('/login');
	};

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
						{!isAuth ?
							""
							:
							<li>
								<NavLink to="/disk">Disk</NavLink>
							</li>
						}
					</ul>
					<div className={`${s.header__auth} auth`}>

						{!isAuth ?
							<NavLink className={s.auth__btn} to="/login">Login</NavLink>
							: <button className={s.auth__btn} type="button" onClick={fetchLogout}>Logout</button>}
						{!isAuth ? <NavLink className={s.auth__btn} to="/registration">Registration</NavLink> : ''}

					</div>
				</div>
			</div>
		</div>
	);
};

