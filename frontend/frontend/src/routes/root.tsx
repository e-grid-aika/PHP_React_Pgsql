import type { FC } from 'react';
import { SearchForm } from '../components/search-form';
import { Contacts } from "../components/contacts";

export const Root: FC = () => {
	return (
		<>
			<div id="sidebar">
				<h1>React Router Contacts</h1>
				<SearchForm />
			</div>
			<div id="detail"></div>
		</>
	);
};
