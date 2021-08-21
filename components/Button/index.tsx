import cn from 'classnames';
import styles from 'styles.module.css';
import { IProps } from './props';

const Button = ({ style, children }: IProps): JSX.Element => {
	return (
		<button className={cn(styles.button, {
			[styles.primary]: style === 'primary',
			[styles.ghost]: style === 'ghost'
		})}>{children}</button>
	);
};

export default Button;