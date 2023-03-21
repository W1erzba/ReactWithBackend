// homeWork

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import EventDetailPage from './Pages/EventDetailPage';
import EventsPage from './Pages/EventsPage';
import NewEventPage from './Pages/NewEventPage';
import { RootLayout } from './Pages/Root';
import EventsNavigation from './components/EventsNavigation';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ path: '', element: <HomePage /> },
			{
				path: 'events',
				element: <EventsPage />,
			},
			{
				path: 'events/:eventId',
				element: <EventDetailPage />,
			},
			{
				path: 'events/new',
				element: <NewEventPage />,
			},
			{ path: 'events/:eventId/edit', element: <EventDetailPage /> },
		],
	},
	{ path: '/allevents', element: <EventsNavigation /> },
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
