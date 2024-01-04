import { useState } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { useMediaQuery } from 'react-responsive';
import * as stylex from '@stylexjs/stylex';
import { styles } from './Navbar.styles.ts';
import { Logo } from '../../Logo';
import { Button } from '../Button';
import { PATH_APP } from '../../../constants/routes.ts';
import { IconButton } from '../IconButton';
import { MenuIcon } from 'lucide-react';
import { Drawer } from '../Drawer';
import { Link as WouterLink } from 'wouter';
import { Flex } from '../Flex';

const { Root, List, Item, Content, Trigger, Link, Viewport } = NavigationMenu;

export const Navbar = () => {
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 1224px)',
	});
	const [menuOpened, setMenuOpened] = useState(false);

	return (
		<>
			<Root {...stylex.props(styles.root)}>
				<Logo />
				{isDesktopOrLaptop ? (
					<>
						<List {...stylex.props(styles.list)}>
							<Item>
								<Link {...stylex.props(styles.link)}>account</Link>
							</Item>
							<Item>
								<Trigger {...stylex.props(styles.link)}>
									Overview{' '}
									<CaretDownIcon
										aria-hidden
										{...stylex.props(styles.menuIcon)}
									/>
								</Trigger>
								<Content {...stylex.props(styles.content)}>
									<ul {...stylex.props(styles.menuList)}>
										<NavigationMenu.Link asChild>
											<a href="" {...stylex.props(styles.menuListLink)}>
												<div {...stylex.props(styles.menuListHeading)}>
													Introduction
												</div>
												<p {...stylex.props(styles.menuListText)}>
													Build high-quality, accessible design systems and web
													apps.
												</p>
											</a>
										</NavigationMenu.Link>
										<NavigationMenu.Link asChild>
											<a href="" {...stylex.props(styles.menuListLink)}>
												<div {...stylex.props(styles.menuListHeading)}>
													Getting started
												</div>
												<p {...stylex.props(styles.menuListText)}>
													A quick tutorial to get you up and running with Radix
													Primitives.
												</p>
											</a>
										</NavigationMenu.Link>
										<NavigationMenu.Link asChild>
											<a href="" {...stylex.props(styles.menuListLink)}>
												<div {...stylex.props(styles.menuListHeading)}>
													Styling
												</div>
												<p {...stylex.props(styles.menuListText)}>
													Unstyled and compatible with any styling solution.
												</p>
											</a>
										</NavigationMenu.Link>
										<NavigationMenu.Link asChild>
											<a href="" {...stylex.props(styles.menuListLink)}>
												<div {...stylex.props(styles.menuListHeading)}>
													Animation
												</div>
												<p {...stylex.props(styles.menuListText)}>
													Use CSS keyframes or any animation library of your
													choice.
												</p>
											</a>
										</NavigationMenu.Link>
									</ul>
								</Content>
							</Item>
							<Item>
								<Link {...stylex.props(styles.link)}>manage</Link>
							</Item>
							<Item>
								<Link {...stylex.props(styles.link)}>pricing</Link>
							</Item>
							<Item>
								<Link {...stylex.props(styles.link)}>blog</Link>
							</Item>
						</List>
						<List {...stylex.props(styles.list)}>
							<Item>
								<Link href={PATH_APP.root} {...stylex.props(styles.buttonLink)}>
									<Button variant="subtle">Login</Button>
								</Link>
							</Item>
							<Item>
								<Button variant="filled" href="/signup">
									Signup
								</Button>
							</Item>
						</List>
					</>
				) : (
					<IconButton
						sx={styles.menuIcon}
						onClick={() => setMenuOpened(!menuOpened)}
					>
						<MenuIcon />
					</IconButton>
				)}
				<div {...stylex.props(styles.viewportPosition)}>
					<Viewport {...stylex.props(styles.viewport)} />
				</div>
			</Root>
			<Drawer open={menuOpened} onOpenChange={setMenuOpened} title="Menu">
				<Flex direction="column">
					<WouterLink href="#" {...stylex.props(styles.mobileLink)}>
						Account
					</WouterLink>
					<DropdownMenu.Root {...stylex.props(styles.dropdown)}>
						<DropdownMenu.Trigger asChild>
							<button
								aria-label="Customise options"
								{...stylex.props(styles.dropdownTrigger)}
							>
								Overview <CaretDownIcon />
							</button>
						</DropdownMenu.Trigger>
						<DropdownMenu.Portal>
							<DropdownMenu.Content
								sideOffset={0}
								{...stylex.props(styles.dropdownContent)}
							>
								<DropdownMenu.Item {...stylex.props(styles.dropdownItem)}>
									Introduction
								</DropdownMenu.Item>
								<DropdownMenu.Item {...stylex.props(styles.dropdownItem)}>
									Styling
								</DropdownMenu.Item>
								<DropdownMenu.Item {...stylex.props(styles.dropdownItem)}>
									Getting started
								</DropdownMenu.Item>
								<DropdownMenu.Item {...stylex.props(styles.dropdownItem)}>
									Animation
								</DropdownMenu.Item>
							</DropdownMenu.Content>
						</DropdownMenu.Portal>
					</DropdownMenu.Root>
					<WouterLink href="#" {...stylex.props(styles.mobileLink)}>
						Manage
					</WouterLink>
					<WouterLink href="#" {...stylex.props(styles.mobileLink)}>
						Pricing
					</WouterLink>
					<WouterLink href="#" {...stylex.props(styles.mobileLink)}>
						Blog
					</WouterLink>
					<WouterLink href={PATH_APP.root} {...stylex.props(styles.mobileLink)}>
						Login
					</WouterLink>
					<WouterLink href={PATH_APP.root} {...stylex.props(styles.mobileLink)}>
						Signup
					</WouterLink>
				</Flex>
			</Drawer>
		</>
	);
};
