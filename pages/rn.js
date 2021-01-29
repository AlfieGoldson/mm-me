import { useState } from 'react';
import Head from 'next/head';

export default function RN() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Head>
				<link rel='shortcut icon' href='/images/favicon.png' />
			</Head>
			{open ? (
				<>
					<img
						class='main-img'
						src='/images/holy_words.webp'
						width='100%'
						height='100%'
					/>
					<img
						class='bg-img'
						src='/images/holy_words.webp'
						width='100%'
						height='100%'
					/>
				</>
			) : (
				<h1 onClick={() => setOpen(true)}>Black</h1>
			)}
		</>
	);
}
