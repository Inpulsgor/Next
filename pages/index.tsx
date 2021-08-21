import { Title, Button } from '../components';

 const Home = (): JSX.Element => {
  return (
    <div>
			<Title tag="h1">Hello Next</Title>
			<Button view="primary" className="active">Click</Button>
			<Button view="ghost">Click</Button>
    </div>
  );
};

export default Home;