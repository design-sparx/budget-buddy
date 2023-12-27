import { Button, Card } from '../ui';
import { styles } from './UpdatesCard.styles.ts';
import * as stylex from '@stylexjs/stylex';
import { Col, Row } from 'react-grid-system';
import { Flex } from '../ui/Flex';
import { ArrowRightIcon } from '@radix-ui/react-icons';

export type UpdatesCardProps = {
	sx?: stylex.StyleXStyles;
};

export const UpdatesCard = ({ sx }: UpdatesCardProps) => {
	return (
		<Card title="Latest updates" {...stylex.props(styles.base, sx)}>
			<Row align="center">
				<Col sm={7}>
					<Flex sx={styles.content}>
						<p {...stylex.props(styles.title)}>Connecting cards</p>
						<p>
							Now all accounts have the function of connecting cards of other
							banks. Managing your finances just got easier
						</p>
						<Button rightSection={<ArrowRightIcon />} variant="outline">
							Read more
						</Button>
					</Flex>
				</Col>
				<Col sm={5}>
					<img
						src="/img/updates.png"
						alt="images"
						{...stylex.props(styles.image)}
					/>
				</Col>
			</Row>
		</Card>
	);
};
