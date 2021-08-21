import { Title, Button } from '../components';

 const Home = (): JSX.Element => {
  return (
    <>
		<Title tag="h1">Hello Next</Title>
		<Button view="primary" className="active" arrow="right">Click</Button>
		<Button view="ghost" arrow="down">Click</Button>
    </>
  );
};

export default Home;