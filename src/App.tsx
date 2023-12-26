import { Route } from 'wouter';
import { HomePage } from './pages';
import * as stylex from '@stylexjs/stylex';
import { jadeTheme } from './theme';

function App() {
	return (
		<div {...stylex.props(jadeTheme)}>
			<Route component={HomePage} />
		</div>
	);
}

export default App;
