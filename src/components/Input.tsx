const Input = ({ className = '', ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input className={`p-3 border border-gray-400 rounded-md ${className}`} {...props}/>
  )
}

export default Input
