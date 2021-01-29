import { useState } from 'react';

export default function RN() {
	const [open, setOpen] = useState(false);

	return open ? (
		<>
			<img
				class='main-img'
				src='/images/holy_words.png'
				width='100%'
				height='100%'
			/>
			<img
				class='bg-img'
				src='/images/holy_words.png'
				width='100%'
				height='100%'
			/>
		</>
	) : (
		<h1 onClick={() => setOpen(true)}>Black</h1>
	);
}
