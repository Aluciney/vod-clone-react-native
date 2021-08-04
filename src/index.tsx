import React from 'react';
import { CustomThemeProvider } from './contexts/theme';

import Route from './routes';

const App: React.FC = () => {
	return (
		<CustomThemeProvider >
			<Route />
		</CustomThemeProvider>
	);
}

export default App;