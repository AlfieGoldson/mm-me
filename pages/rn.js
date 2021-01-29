import { useState, useEffect } from 'react';
import Head from 'next/head';

const titles = [
	'🤑🤑🤑🤑🤑',
	'💰MONEY MATCH💰',
	'💸🤑🤑🤑💸',
	'💰MONEY MATCH💰',
];

export default function RN() {
	const [open, setOpen] = useState(false);
	const [titleIndex, setTitleIndex] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setTitleIndex(titleIndex >= titles.length - 1 ? 0 : titleIndex + 1);
		}, 1000);
	}, [titleIndex]);

	return (
		<>
			<Head>
				<link rel='shortcut icon' href='/images/favicon.png' />
				<title>{titles[titleIndex]}</title>
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
