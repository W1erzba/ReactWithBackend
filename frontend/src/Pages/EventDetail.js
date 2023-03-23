import { useLoaderData, json } from 'react-router-dom';

import EventItem from '../components/EventItem';

const EventDetailPage = () => {
	const data = useLoaderData();
	return (
		<>
			<EventItem event={data.event} />
		</>
	);
};

export default EventDetailPage;

export async function loader({ request, params }) {
	// NOTE TO THIS LOADER:
	// Remeber that you have to atatch this Loader function after you writed it because React won't look for automaticaly. You have to give him a heads up and attatch this to the route 'loader: loader (loader have to be imported)'
	const id = params.eventId;

	const response = await fetch('http://localhost:8080/events/' + id);

	// In case that we won't listen to a error, we can  just wrtite  'return fetch('http://localhost:8080/events/' + id)' React will wait for response from fetch and execute code.This is how React is smart.

	if (!response.ok) {
		throw json(
			{ message: 'Could not fetch dertails for selected event.' },
			{ status: 500 }
		);
	} else {
		return response;
	}
}
