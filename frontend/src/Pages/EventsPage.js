import { Link } from 'react-router-dom';
import EventsNavigation from '../components/EventsNavigation';

const DUMMY_EVENTS = [
	{
		id: 'e1',
		eventName: 'Birthday.',
	},
	{
		id: 'e2',
		eventName: 'Funereal.',
	},
	{
		id: 'e3',
		eventName: 'Getting a first IT job.',
	},
];
const EventsPage = () => {
	return (
		<>
			<h2>Events List</h2>
			<EventsNavigation />
			<ul>
				{DUMMY_EVENTS.map((event) => (
					<li key={event.id}>
						<Link to={event.id} relative=''>
							{event.eventName}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default EventsPage;
