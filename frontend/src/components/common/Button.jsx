export default function Button({children, onClick, className='', ...rest}) {
  return (
    <button onClick={onClick} className={"px-4 py-2 rounded shadow " + className} {...rest}>
      {children}
    </button>
  )
}
