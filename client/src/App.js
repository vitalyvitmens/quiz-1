import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Layout } from './components'
import {
	LoginPage,
	MainPage,
	RegisterPage,
	EditPage,
	TestPage,
} from './pages'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'
import { getMeAsync } from './redux/actions'

export const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getMeAsync())
	}, [dispatch])

	return (
		<Layout>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/:id" element={<TestPage />} />
				<Route path="/:id/edit" element={<EditPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>

			<ToastContainer position="bottom-right" />
		</Layout>
	)
}
