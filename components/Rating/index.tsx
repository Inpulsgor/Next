import React, { useState, useEffect, KeyboardEvent } from 'react';
import cn from 'classnames';
import { IProps } from './props';
import StarIcon from '../../public/star.svg';
import styles from './styles.module.css';

const Rating = ({ isEditable = false, rating, setRating, ...props }: IProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		createRating(rating);
	}, [rating]);

	const createRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((rate: JSX.Element, index: number) => {
			return (
				<StarIcon
					key={index}
					className={cn(styles.star, {
						[styles.filled]: index < currentRating,
						[styles.editable]: isEditable
					})}
					onMouseEnter={() => hoverRating(index + 1)}
					onMouseLeave={() => hoverRating(rating)}
					onClick={() => handleClick(index + 1)}
					onKeyDown={(e: KeyboardEvent<SVGElement>) => handeKeyPress(e, index + 1)}
					tabIndex={isEditable ? 0 : -1}
				/>
			);
		});

		setRatingArray(updatedArray);
	};

	const hoverRating = (rate: number) => {
		if (!isEditable) return;
		createRating(rate);
	};

	const handleClick = (rate: number) => {
		if (!isEditable || !setRating) return;
		setRating(rate);
	};

	const handeKeyPress = (e: KeyboardEvent<SVGElement>, rate: number) => {
		if (e.code !== "Space" || !setRating) return;
		setRating(rate);
	};

	return (
		<ul className={styles.list} {...props}>
			{ratingArray.map((rate, index) => (
				<li className={styles.item} key={index}>{rate}</li>
			))}
		</ul>
	);
};

export default Rating;
