/* eslint-disable no-alert */
/* eslint-disable react/jsx-no-bind */
import './style.css';
import { useState, useEffect } from 'preact/hooks';
import register from 'preact-custom-element';

const App = ({ initial = 0 }) => {
	const [value, setValue] = useState(Number(initial));
	const inc = () => setValue(v => v+1);
	const dec = () => setValue(v => v-1);

	useEffect(() => {
		if (value === 2) alert('got number: ' + value);
	}, [value]);
	return (
		<div class="box">
			<h1>Hello, World!</h1>
			<div>
				<button style={{ marginRight: '4px' }} onClick={dec}>-</button>
				{value}
				<button style={{ marginLeft: '4px' }} onClick={inc}>+</button>

			</div>
		</div>

	);
};
const App2 = ({ initial = 0 }) => {
	const [value, setValue] = useState(Number(initial));
	const inc = () => setValue(v => v+1);
	const dec = () => setValue(v => v-1);

	useEffect(() => {
		if (value === 2) alert('got number: ' + value);
	}, [value]);
	return (
		<div class="box">
			<h1>Hello, World!</h1>
			<div>
				<button style={{ marginRight: '4px' }} onClick={dec}>-</button>
				{value}
				<button style={{ marginLeft: '4px' }} onClick={inc}>+</button>

			</div>
		</div>

	);
};

register(App, 'web-counter', ['initial']);
register(App2, 'web-counter-a', ['initial']);

export default App;
