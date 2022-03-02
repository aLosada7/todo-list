import { Container, Text } from "dana-react";

function App() {
	const title = "todo-list";
	return (
		<Container>
			<Text size="h4">
				Hola, <br />
				Bienvenido a {title} 👋
			</Text>
		</Container>
	);
}

export default App;
