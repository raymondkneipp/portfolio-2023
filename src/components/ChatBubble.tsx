interface Props {
  guest?: boolean
  children: React.ReactNode
}

export default function ChatBubble({ guest, children }: Props) {
  return (
    <div
      className={`relative flex flex-col gap-1 max-w-screen-md ${
        guest ? 'items-end ml-auto' : ''
      }`}
    >
      <p
        className={`p-3 w-fit ${
          guest
            ? 'bg-amber-400 text-stone-900 ml-6 rounded-l-xl rounded-tr-xl'
            : 'bg-stone-800 text-stone-300 mr-6 rounded-r-xl rounded-tl-xl'
        }`}
      >
        {children}
      </p>

      {guest ? (
        <div className='w-2 overflow-hidden inline-block absolute -right-2 bottom-0'>
          <div className='h-4 bg-amber-400 -rotate-45 transform origin-bottom-right'></div>
        </div>
      ) : (
        <div className='w-2 overflow-hidden inline-block absolute -left-2 bottom-0'>
          <div className='h-4 bg-stone-800 rotate-45 transform origin-bottom-left'></div>
        </div>
      )}
    </div>
  )
}
