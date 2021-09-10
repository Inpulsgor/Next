import { useState } from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { Title, Button, Paragraph, Tag, Rating } from '../components';
import withLayout from 'layouts/HOC/withLayout';

 const Home = (): JSX.Element => {
	const [rating, setRating] = useState<number>(4);

  return (
    <>
		<Title tag="h1">Hello Next</Title>
		<Button view="primary" className="active" arrow="right">Click</Button>
		<Button view="ghost" arrow="down">Click</Button>
		<Paragraph size="s">Some text</Paragraph>
		<Paragraph>Some text</Paragraph>
		<Paragraph size="l">Some text</Paragraph>
		<Tag size="s" color="primary">small</Tag>
		<Tag size="s" color="red">small</Tag>
		<Tag size="s" color="ghost">small</Tag>
		<Tag size="m" color="green" href="#">medium</Tag>
		<Tag size="m" color="gray" href="#">medium</Tag>
		<Rating rating={rating} setRating={setRating} isEditable/>
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
	const firstCategory = 0;
	const { data: menu } = axios.post(process.env.NEXT_PUBLIC_DOMAIN + 'api/top-page/find');

	return {
		props: {
			menu,
			firstCategory
		}
	};
};