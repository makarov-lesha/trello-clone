import * as React from 'react';
import { AppContainer } from './styles';
import { Column } from './Column';
import { Card } from './Card';

function App() {
	return (
		<AppContainer>
			<Column text="To Do">
				<Card text="Generate app scaffold" />
			</Column>
			<Column text="In Progress">
				<Card text="Learn Typescript" />
			</Column>
			<Column text="Done">
				<Card text="Begin to use static typing" />
			</Column>
		</AppContainer>
	);
}

export default App;
