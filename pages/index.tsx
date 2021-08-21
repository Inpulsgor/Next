import { Title, Button, Paragraph } from '../components';

 const Home = (): JSX.Element => {
  return (
    <>
		<Title tag="h1">Hello Next</Title>
		<Button view="primary" className="active" arrow="right">Click</Button>
		<Button view="ghost" arrow="down">Click</Button>
		<Paragraph size="s">Some text</Paragraph>
		<Paragraph>Some text</Paragraph>
		<Paragraph size="l">Some text</Paragraph>
    </>
  );
};

export default Home;