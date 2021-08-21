import cn from 'classnames';
import ArrowSvg from '../../public/arrow.svg';
import styles from './styles.module.css';
import { IProps } from './props';

const Button = ({ view, arrow = "none", children, className, ...props }: IProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: view === 'primary',
				[styles.ghost]: view === 'ghost'
			})}
			{...props}
		>
			{children}
			{arrow !== "none" && <span className={cn(styles.arrow, {
				[styles.down]: arrow === "down"
			})}> <ArrowSvg /> </span> }
		</button>
	);
};

export default Button;