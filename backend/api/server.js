const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

let tasks = [
	{
		id: 1,
		title: 'Reunião quinta',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		date: '2020-12-14 10:48:51',
		completed: true,
		created_at: '2020-12-14'
	},
	{
		id: 2,
		title: 'Deploy dev server',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		date: '2020-12-20 21:00:54',
		completed: true,
		created_at: '2020-12-20'
	},
	{
		id: 3,
		title: 'Renião planejamento',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		date: '2020-12-22 15:50:00',
		completed: true,
		created_at: '2020-12-22'
	}
];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/tasks', (req, res) => {
	const task = req.body;

	tasks.push(task);

	res.json({ message: 'task added' });
});

app.get('/tasks', (req, res) => {
	res.json(tasks);
});

app.get('/tasks/:task_id', (req, res) => {
	const task_id = req.params.task_id;

	for (let task of tasks) {
		if (task.id === parseInt(task_id)) {
			res.json(task);
			return;
		}
	}

	res.status(404).json({ message: 'task not found' });
});

app.delete('/tasks/:task_id', (req, res) => {
	const task_id = req.params.task_id;

	tasks = tasks.filter((item) => {
		if (item.id !== parseInt(task_id)) {
			return true;
		}

		return false;
	});

	res.json({ message: 'task deleted' });
});

app.post('/tasks/:task_id', (req, res) => {
	const task_id = req.params.task_id;
	const new_task = req.body;

	// remove item from the tasks array
	for (let i = 0; i < tasks.length; i++) {
		let task = tasks[i];

		if (task.id === parseInt(task_id)) {
			tasks[i] = new_task;
		}
	}

	res.json({ message: 'task updated' });
});

app.listen(port, () => console.log(`listening on port ${port}!`));
