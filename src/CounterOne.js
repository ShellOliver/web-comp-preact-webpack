import { useEffect, useState } from 'preact/hooks';
import register from 'preact-custom-element';
import './style.css';

const CounterOne = ({initial}) => {
  const [value, setValue] = useState(Number(initial));
	const inc = () => setValue(v => v+1);
	const dec = () => setValue(v => v-1);

	useEffect(() => {
		if (value === 1) alert('got number: ' + value);
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

register(CounterOne, 'web-counter-one', ['initial']);

export default CounterOne;