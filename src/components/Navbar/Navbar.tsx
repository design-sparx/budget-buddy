import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as stylex from '@stylexjs/stylex';
import { styles } from './Navbar.stylex.ts';
import { Logo } from '../Logo';
import { CaretDownIcon } from '@radix-ui/react-icons';

const { Root, List, Item, Content, Trigger, Link, Viewport } = NavigationMenu;

export const Navbar = () => {
	return (
		<Root {...stylex.props(styles.root)}>
			<Logo />
			<List {...stylex.props(styles.list)}>
				<Item>
					<Link {...stylex.props(styles.link)}>account</Link>
				</Item>
				<Item>
					<Trigger {...stylex.props(styles.link)}>
						Overview{' '}
						<CaretDownIcon aria-hidden {...stylex.props(styles.menuIcon)} />
					</Trigger>
					<Content {...stylex.props(styles.content)}>
						<ul {...stylex.props(styles.menuList)}>
							<NavigationMenu.Link asChild>
								<a href="" {...stylex.props(styles.menuListLink)}>
									<div {...stylex.props(styles.menuListHeading)}>
										Introduction
									</div>
									<p {...stylex.props(styles.menuListText)}>
										Build high-quality, accessible design systems and web apps.
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
									<div {...stylex.props(styles.menuListHeading)}>Styling</div>
									<p {...stylex.props(styles.menuListText)}>
										Unstyled and compatible with any styling solution.
									</p>
								</a>
							</NavigationMenu.Link>
							<NavigationMenu.Link asChild>
								<a href="" {...stylex.props(styles.menuListLink)}>
									<div {...stylex.props(styles.menuListHeading)}>Animation</div>
									<p {...stylex.props(styles.menuListText)}>
										Use CSS keyframes or any animation library of your choice.
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
					<Link {...stylex.props(styles.link)}>Login</Link>
				</Item>
				<Item>
					<Link {...stylex.props(styles.link)}>Signup</Link>
				</Item>
			</List>
			<div {...stylex.props(styles.viewportPosition)}>
				<Viewport {...stylex.props(styles.viewport)} />
			</div>
		</Root>
	);
};
