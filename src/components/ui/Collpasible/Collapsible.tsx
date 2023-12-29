import { ReactNode, useState } from 'react';
import * as RadixCollapsible from '@radix-ui/react-collapsible';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { styles } from './Collapsible.styles.ts';
import * as stylex from '@stylexjs/stylex';
import { BaseProps } from '../../../types';

const { Root, Trigger, Content } = RadixCollapsible;

export type CollapsibleProps = {
	label: string;
	children: ReactNode;
	opened?: boolean;
} & BaseProps;

export const Collapsible = (props: CollapsibleProps) => {
	const { sx, label, children, opened } = props;
	const [open, setOpen] = useState(opened);

	return (
		<Root open={open} onOpenChange={setOpen} {...stylex.props(styles.base, sx)}>
			<div {...stylex.props(styles.body)}>
				<Trigger asChild>
					<button {...stylex.props(styles.control)}>
						<span>{label}</span>
						{open ? (
							<ChevronUpIcon {...stylex.props(styles.iconButton)} />
						) : (
							<ChevronDownIcon {...stylex.props(styles.iconButton)} />
						)}
					</button>
				</Trigger>
			</div>
			<Content {...stylex.props(styles.content)}>{children}</Content>
		</Root>
	);
};
