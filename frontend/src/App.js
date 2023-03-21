// homeWork

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './Pages/Home';
import EventDetailPage from './Pages/EventDetail';
import EventsPage from './Pages/Events.js';
import NewEventPage from './Pages/NewEvent';
import { RootLayout } from './Pages/Root';
import EventsRootLayout from './Pages/EventsRoot';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: 'events',
				element: <EventsRootLayout />,
				children: [
					{ index: true, element: <EventsPage /> },
					{ path: ':eventId', element: <EventDetailPage /> },
					{ path: 'new', element: <NewEventPage /> },
					{ path: ':eventId/edit', element: <EventDetailPage /> },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
