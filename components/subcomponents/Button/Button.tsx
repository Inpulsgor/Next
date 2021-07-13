import cn from 'classnames';
import styles from 'Button.module.css';
import { ButtonProps } from './Button.props';

const Button = ({ style, children }: ButtonProps): JSX.Element => {
	return (<button className={cn(styles.button, {
		[styles.primary]: style === 'primary',
		[styles.ghost]: style === 'ghost'
	})}>{children}</button>);
};

export default Button;