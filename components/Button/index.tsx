import cn from 'classnames';
import styles from './styles.module.css';
import { IProps } from './props';

const Button = ({ view, children, className, ...props }: IProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: view === 'primary',
				[styles.ghost]: view === 'ghost'
			})}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;