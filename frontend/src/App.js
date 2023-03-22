// homeWork

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './Pages/Home';
import EventDetailPage from './Pages/EventDetail';
import EventsPage, { loader as eventsLoader } from './Pages/Events.js';
import NewEventPage from './Pages/NewEvent';
import { RootLayout } from './Pages/Root';
import EventsRootLayout from './Pages/EventsRoot';
import ErrorPage from './Pages/Error';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: 'events',
				element: <EventsRootLayout />,
				children: [
					{
						index: true,
						element: <EventsPage />,
						loader: eventsLoader,
					},
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
