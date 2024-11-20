import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './routes/root';
import type { FC } from 'react';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
	},
]);
// export const App: FC<{ name: string }> = ({ name }) => {
export const App: FC = () => {
	return (
		/* <div>
			<h1>Hello {name}!</h1>
			<p>Start editing to see some magic happen :)</p>
		</div> */
		<RouterProvider router={router} />
	);
};
