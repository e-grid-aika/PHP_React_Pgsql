import type { FC } from 'react';

export const Contacts: FC = () => {
	return (
		<nav>
			<ul>
				<li>
					<a href={`/contacts/1`}>Your Name</a>
				</li>
				<li>
					<a href={`/contacts/2`}>Your Friend</a>
				</li>
			</ul>
		</nav>
	);
};
