import { useParams, Link } from 'react-router-dom';

const EventDetailPage = () => {
	const params = useParams();

	return (
		<>
			<h4>Events Details!</h4>
			<p>{params.eventId}</p>
			<p>
				<Link to='..' relative='path'>
					Back
				</Link>
			</p>
		</>
	);
};

export default EventDetailPage;
