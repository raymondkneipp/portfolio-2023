export default function ChatTyping() {
	return (
		<span className="pt-1 w-fit flex gap-1 justify-center items-center">
			<span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"></span>
			<span
				className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"
				style={{ animationDelay: '250ms' }}
			></span>
			<span
				className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"
				style={{ animationDelay: '500ms' }}
			></span>
		</span>
	);
}
