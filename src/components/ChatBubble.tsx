interface Props {
	guest?: boolean;
	children: React.ReactNode;
}

export default function ChatBubble({ guest, children }: Props) {
	return (
		<div
			className={`flex flex-col gap-1 max-w-screen-md ${
				guest ? 'items-end ml-auto' : ''
			}`}
		>
			<p
				className={`p-3 w-fit ${
					guest
						? 'bg-amber-400 text-stone-900 ml-6'
						: 'bg-stone-800 text-stone-300 mr-6'
				}`}
			>
				{children}
			</p>
		</div>
	);
}
