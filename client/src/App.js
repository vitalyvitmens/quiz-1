import { Route, Routes } from 'react-router-dom'
import { Layout } from './components'
import {
	LoginPage,
	MainPage,
	RegisterPage,
	EditTestPage,
	TestPage,
} from './pages'

export const App = () => {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/:id" element={<TestPage />} />
				<Route path="/:id/edit" element={<EditTestPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</Layout>
	)
}
