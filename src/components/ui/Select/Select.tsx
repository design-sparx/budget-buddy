import * as RadixSelect from '@radix-ui/react-select';
import * as RadixLabel from '@radix-ui/react-label';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { CheckIcon, ChevronDownIcon } from 'lucide-react';
import { forwardRef, useState } from 'react';
import { BaseProps } from '../../../types';
import * as stylex from '@stylexjs/stylex';
import { styles } from './Select.styles.ts';
import { Flex } from '../Flex';

const {
	Root,
	Trigger,
	Portal,
	Content,
	Viewport,
	Item,
	ItemText,
	ItemIndicator,
	Icon,
	Value,
} = RadixSelect;

export type Item = { value: string; label: string };

export type SelectsProps = {
	formLabel?: string;
	items: Item[];
	placeholder?: string;
	defaultValue?: string;
	onChange?: (value: string) => void;
} & BaseProps;

export const Select = ({
	items,
	formLabel,
	placeholder,
	defaultValue,
	sx,
	onChange,
	...others
}: SelectsProps) => {
	const [value, setValue] = useState<string>(defaultValue || '');

	return (
		<Root
			value={value}
			onValueChange={(e) => {
				setValue(e);
				if (onChange) {
					onChange(e);
				}
			}}
			{...stylex.props(styles.base, sx)}
			{...others}
		>
			<Flex>
				<RadixLabel.Root {...stylex.props(styles.formLabel)}>
					{formLabel}
				</RadixLabel.Root>
				<Trigger aria-label={formLabel} {...stylex.props(styles.trigger)}>
					<Value placeholder={placeholder} />
					<Icon {...stylex.props(styles.icon)}>
						<ChevronDownIcon size={18} />
					</Icon>
				</Trigger>
				<Portal>
					<Content
						position="popper"
						sideOffset={5}
						{...stylex.props(styles.content)}
					>
						<ScrollArea.Root
							type="auto"
							{...stylex.props(styles.scrollAreaRoot)}
						>
							<Viewport>
								<ScrollArea.Viewport
									{...stylex.props(styles.scrollAreaViewport)}
								>
									{items.map((item) => (
										<SelectItem key={item.label} value={item.value}>
											{item.label}
										</SelectItem>
									))}
								</ScrollArea.Viewport>
							</Viewport>
							<ScrollArea.Scrollbar
								orientation="vertical"
								{...stylex.props(styles.scrollAreaScrollbar)}
							>
								<ScrollArea.Thumb {...stylex.props(styles.scrollAreaThumb)} />
							</ScrollArea.Scrollbar>
						</ScrollArea.Root>
					</Content>
				</Portal>
			</Flex>
		</Root>
	);
};

export const SelectItem = forwardRef(
	({ children, ...props }: any, forwardedRef) => {
		return (
			<Item {...stylex.props(styles.item)} {...props} ref={forwardedRef}>
				<ItemText>{children}</ItemText>
				<ItemIndicator {...stylex.props(styles.indicator)}>
					<CheckIcon size={14} />
				</ItemIndicator>
			</Item>
		);
	}
);
