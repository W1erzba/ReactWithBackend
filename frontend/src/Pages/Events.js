import { useLoaderData } from 'react-router-dom';
// Data froom useLoaderData can be used in all syblings and childrens of this route of a element from useLoaderData was taken
// You can not use it in a higher level than you're fetching the data.

import EventsList from '../components/EventsList';

function EventsPage() {
	const events = useLoaderData();

	return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
	const response = await fetch('http://localhost:8080/events');

	if (!response.ok) {
		//...
	} else {
		const resData = await response.json();
		return resData.events;
	}
}
