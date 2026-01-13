import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "@/pages/Dashboard/Dashboard";
import NotFound from "@/pages/NotFound/NotFound";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
