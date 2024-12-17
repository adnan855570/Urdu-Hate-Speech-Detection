import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import {createBrowserRouter, RouterProvider, useNavigate} from "react-router-dom";
import {ModelPage} from "./Pages/ModelPage/ModelPage";
import {URL_Page} from "./Pages/URL_Page/URL_Page";
import {Text_Page} from "./Pages/Text_Page/Text_Page";
import Username_Page from "./Pages/Username_Page/Username_Page";
import {LoginPage} from "./Pages/LoginPage/LoginPage";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Techniques from "./Pages/Techniques/Techniques";
import ModelsPage from "./Pages/ModelsPage/ModelsPage";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <HomePage />,
		},
		{
			path: "/teachniques",
			element: <Techniques />,
		},
		{
			path: "/models",
			element: <ModelsPage />,
		},
		{
			path: "/login",
			element: <LoginPage />,
		},
		{
			path: "/model",
			element: <ModelPage />,
			children: [
				{
					path: "url",
					element: <URL_Page />,
				},
				{
					path: "text",
					element: <Text_Page />,
				},
				{
					path: "username",
					element: <Username_Page />,
				},
			],
		},
	]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
