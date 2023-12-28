import { styles } from './Logo.styles.ts';
import * as stylex from '@stylexjs/stylex';
import { CardStackIcon } from '@radix-ui/react-icons';
import { Link } from 'wouter';
import { PATH_GUEST } from '../../constants/routes.ts';

export type LogoProps = {
	iconOnly?: boolean;
	textOnly?: boolean;
	sx?: stylex.StyleXStyles;
};

export const Logo = ({ textOnly, iconOnly, sx, ...others }: LogoProps) => {
	return (
		<Link href={PATH_GUEST.root} {...stylex.props(styles.base, sx)} {...others}>
			{iconOnly && <CardStackIcon {...stylex.props(styles.icon)} />}
			{textOnly && <h4 {...stylex.props(styles.text)}>budget buddy</h4>}
			{!iconOnly && !textOnly && (
				<>
					<CardStackIcon {...stylex.props(styles.icon)} />
					<h4 {...stylex.props(styles.text)}>budget buddy</h4>
				</>
			)}
		</Link>
	);
};
