export default function Send() {
	return (
		<button
			className="text-amber-400 flex items-center justify-center transition p-2 h-[42px] w-[42px] focus:outline-none border border-stone-800 group relative"
			aria-label="Send"
			type="submit"
		>
			<div className="absolute bg-amber-400 h-px w-full top-0 left-0 group-hover:scale-x-150 transition group-focus-visible:scale-x-150 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"></div>

			<div className="absolute bg-amber-400 h-px w-full bottom-0 left-0 group-hover:scale-x-150 transition group-focus-visible:scale-x-150 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"></div>

			<div className="absolute bg-amber-400 w-px h-full bottom-0 left-0 group-hover:scale-y-150 transition group-focus-visible:scale-y-150 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"></div>

			<div className="absolute bg-amber-400 w-px h-full bottom-0 right-0 group-hover:scale-y-150 transition group-focus-visible:scale-y-150 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"></div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="2em"
				height="2em"
				preserveAspectRatio="xMidYMid meet"
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					d="m3.4 20.4l17.45-7.48a1 1 0 0 0 0-1.84L3.4 3.6a.993.993 0 0 0-1.39.91L2 9.12c0 .5.37.93.87.99L17 12L2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"
				/>
			</svg>
		</button>
	);
}
