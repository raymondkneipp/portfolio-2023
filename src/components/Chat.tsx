import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useState } from 'react';
import ChatBubble from './ChatBubble';
import ChatTyping from './ChatTyping';
import Send from './Send';

export default function Chat({}) {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [stage, setStage] = useState<'email' | 'message' | 'sent'>('email');
	const [typing, setTyping] = useState(false);

	const [parent] = useAutoAnimate<HTMLDivElement>();

	return (
		<>
			<div className="flex flex-col gap-3" ref={parent}>
				<ChatBubble>
					Feel free to reach out if you're looking for a developer, have a
					question, or just want to chat.
				</ChatBubble>
				<ChatBubble>What is your email?</ChatBubble>

				{stage !== 'email' && <ChatBubble guest>{email}</ChatBubble>}

				{((stage === 'message' && typing === false) || stage === 'sent') && (
					<ChatBubble>What may I help you with?</ChatBubble>
				)}

				{stage === 'sent' && <ChatBubble guest>{message}</ChatBubble>}

				{stage === 'sent' && typing === false && (
					<ChatBubble>
						Thank you for reaching out! I will get back to you as soon as I can!
					</ChatBubble>
				)}

				{typing && (
					<ChatBubble>
						<ChatTyping />
					</ChatBubble>
				)}
			</div>

			{stage === 'email' && (
				<form
					onSubmit={(e) => {
						e.preventDefault();
						setStage('message');

						setTyping(true);

						setTimeout(() => {
							setTyping(false);
						}, 1000);
					}}
				>
					<div className="flex items-end gap-3 sm:gap-6">
						<div className="flex flex-col gap-1 flex-1">
							<label htmlFor="email" className="font-bold text-sm">
								Your Email
							</label>
							<input
								id="email"
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="bg-transparent border border-stone-800 focus:outline-none focus-visible:border-amber-400 p-2 rounded-none"
							/>
						</div>
						<Send />
					</div>
				</form>
			)}

			{stage === 'message' && (
				<form
					onSubmit={(e) => {
						e.preventDefault();
						setStage('sent');

						// send email to myself
						console.log({ email, message });

						setTyping(true);

						setTimeout(() => {
							setTyping(false);
						}, 1000);
					}}
				>
					<div className="flex items-end gap-3 sm:gap-6">
						<div className="flex flex-col gap-1 flex-1">
							<label htmlFor="message" className="font-bold text-sm">
								Your Message
							</label>
							<textarea
								autoFocus
								id="message"
								rows={1}
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								className="bg-transparent border border-stone-800 focus:outline-none focus-visible:border-amber-400 p-2 rounded-none"
							></textarea>
						</div>

						<Send />
					</div>
				</form>
			)}
		</>
	);
}
