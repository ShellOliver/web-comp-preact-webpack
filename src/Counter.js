import { useEffect, useState } from 'preact/hooks';
import './style.css';
import register from 'preact-custom-element';

const Counter = ({initial}) => {
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

register(Counter, 'web-counter', ['initial']);

export default Counter;