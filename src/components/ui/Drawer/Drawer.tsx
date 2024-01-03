import * as Dialog from '@radix-ui/react-dialog';
import { DialogProps } from '@radix-ui/react-dialog';
import * as stylex from '@stylexjs/stylex';
import { XIcon } from 'lucide-react';
import { BaseProps } from '../../../types';
import { styles } from './Drawer.styles.ts';
import { IconButton } from '../IconButton';

const { Root, Portal, Overlay, Content, Title, Description } = Dialog;

export type DrawerProps = {
	title: string;
	description?: string;
	w?: string | number;
} & DialogProps &
	BaseProps;

export const Drawer = (props: DrawerProps) => {
	const { title, description, w = 300, sx, ...others } = props;

	return (
		<Root {...others} {...stylex.props(styles.base, sx)}>
			<Portal>
				<Overlay {...stylex.props(styles.overlay)} />
				<Content {...stylex.props(styles.content, styles.w(w))}>
					<Title {...stylex.props(styles.title)}>{title}</Title>
					<Description {...stylex.props(styles.description)}>
						{description}
					</Description>
					<div>{others.children}</div>
					<Dialog.Close asChild>
						<IconButton
							aria-label="Close"
							variant="subtle"
							sx={styles.closeButton}
						>
							<XIcon />
						</IconButton>
					</Dialog.Close>
				</Content>
			</Portal>
		</Root>
	);
};
