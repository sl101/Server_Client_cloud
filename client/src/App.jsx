import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, About, Contacts, Login, Registration } from "./pages";

function App() {

	return (
		<>
			<Header />
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="contacts" element={<Contacts />} />
					<Route path="registration" element={<Registration />} />
					<Route path="login" element={<Login />} />
				</Route>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
