import { Link } from 'react-router-dom';

const NewEventPage = () => {
	return (
		<>
			<h1>New Event </h1>
			<Link to='..' relative='path'>
				Back to Event List
			</Link>
		</>
	);
};

export default NewEventPage;
