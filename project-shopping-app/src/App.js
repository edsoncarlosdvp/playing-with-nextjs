import React from 'react';
import Layout from './layout';
import Pages from './pages';
import Mensager from './components/Mensager';

export default function App() {
	return (
		<Layout>
			<Mensager />
			<Pages />
		</Layout>
	);
}
