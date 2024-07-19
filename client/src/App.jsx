import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, About, Contacts, Auth, Registration } from "./pages";

function App() {
	const routes = [
		{
			path: "/",
			Component: Home,
		},
		{
			path: "/about",
			Component: About,
		},
		{
			path: "/contacts",
			Component: Contacts,
		},
		{
			path: "/auth",
			Component: Auth,
		},
		{
			path: "/registration",
			Component: Registration,
		},

	];
	const router = createBrowserRouter(routes, {
		basename: "/",
	});
	return (
		<>
			<Header />
			<RouterProvider router={router} />
		</>
	);
}

export default App;
