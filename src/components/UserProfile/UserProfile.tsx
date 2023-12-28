import * as stylex from '@stylexjs/stylex';
import { styles } from './UserProfile.styles.ts';

export const UserProfile = () => {
	return (
		<button {...stylex.props(styles.base)}>
			<img
				src="https://res.cloudinary.com/ddh7hfzso/image/upload/v1700303804/me/ovqjhhs79u3g2fwbl2dd.jpg"
				alt="kelvin kiprop avatar"
				{...stylex.props(styles.img)}
			/>
			<span>Kelvin Kiprop</span>
		</button>
	);
};
