import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Header, Footer } from "./components";
import { useEffect } from "react";
import { Home, About, Contacts, Login, Registration, Disk } from "./pages";
import { auth } from "./actions/user";

function App() {
	const dispatch = useDispatch();
	const isAuth = useSelector(state => state.user.isAuth);

	useEffect(() => {
		dispatch(auth());
	}, [isAuth]);

	return (
		<>
			<Header isAuth={isAuth} />
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="contacts" element={<Contacts />} />
					<Route path="registration" element={<Registration />} />
					<Route path="login" element={<Login />} />
					<Route path="disk" element={<Disk />} />
				</Route>
			</Routes>

			<Footer />
		</>
	);
}

export default App;
