import { ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'>;

const Button = ({ ...others }: ButtonProps) => {
	return <button {...others}>{others.children}</button>;
};

export default Button;
