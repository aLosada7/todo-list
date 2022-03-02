import { Container, Row, Col, Checkbox, Text, TextInput, Button } from "dana-react";
import { css } from "@emotion/react";
import { useState } from "react";
import "./styles.scss";

const INITIAL_TASKS = [
	"Buy bread at the bakery",
	"Wash gym clothes",
	"Call my best friend",
	"Find a gift for my girlfriend",
];

export function App() {
	const [taskList, setTaskList] = useState(INITIAL_TASKS);
	const [tasksSelected, setTasksSelected] = useState([]);
	const [newTask, setNewTask] = useState("");

	const handleNewTask = () => {
		setTaskList([...taskList, newTask]);
		setNewTask("");
	};

	const toogleSelection = (task) => {
		if (tasksSelected.includes(task)) {
			const tasksFiltered = tasksSelected.filter((selectedTask) => selectedTask !== task);
			setTasksSelected(tasksFiltered);
		} else {
			setTasksSelected([...tasksSelected, task]);
		}
	};

	const handleTaskRemoval = (taskToRemove) => {
		const tasksFiltered = taskList.filter((task) => task !== taskToRemove);
		setTaskList(tasksFiltered);
	};

	return (
		<Container
			pv={4}
			ph={16}
			cssOverrides={css`
				max-width: 500px;
			`}
		>
			<Text align="center" size="h4">
				To-do list
			</Text>
			<Row align="space-between-center">
				<Col sm={18}>
					<TextInput value={newTask} onChange={(event) => setNewTask(event.target.value)} />
				</Col>
				<Col sm={6}>
					<Button variant="outline" size="block" onClick={handleNewTask}>
						Add
					</Button>
				</Col>
			</Row>
			<Row
				px={4}
				cssOverrides={css`
					justify-content: center;
				`}
			>
				<ul>
					{taskList.map((task, index) => {
						const checked = tasksSelected.includes(task);
						return (
							<li key={index}>
								<Checkbox
									cssLabelOverrides={css`
										${checked && `text-decoration: line-through;`}
									`}
									checked={checked}
									onClick={() => toogleSelection(task)}
								>
									{task}
								</Checkbox>
								<Button
									variant="outline"
									onClick={() => handleTaskRemoval(task)}
									cssOverrides={css`
										border: none;
									`}
								>
									x
								</Button>
							</li>
						);
					})}
				</ul>
			</Row>
		</Container>
	);
}

export default App;
