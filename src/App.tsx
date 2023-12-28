import { Route } from 'wouter';
import { DashboardPage, HomePage } from './pages';
import * as stylex from '@stylexjs/stylex';
import { jadeTheme } from './theme';

function App() {
	return (
		<div {...stylex.props(jadeTheme)}>
			<Route component={HomePage} />
			<Route path="/app" component={DashboardPage} />
		</div>
	);
}

export default App;
