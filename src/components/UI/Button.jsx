import { Link } from 'react-router-dom'

export default function Button({ 
  children, 
  to, 
  href, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-normal transition-all duration-200 rounded-lg'
  
  const variants = {
    primary: 'bg-matcha-600 text-cream-50 hover:bg-matcha-700 active:bg-matcha-800',
    secondary: 'bg-cream-100 text-matcha-800 hover:bg-cream-200 active:bg-cream-300 border border-matcha-200',
    outline: 'border-2 border-matcha-600 text-matcha-600 hover:bg-matcha-600 hover:text-cream-50',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  
  if (to) {
    return (
      <Link to={to} className={styles} {...props}>
        {children}
      </Link>
    )
  }
  
  if (href) {
    return (
      <a href={href} className={styles} {...props}>
        {children}
      </a>
    )
  }
  
  return (
    <button className={styles} {...props}>
      {children}
    </button>
  )
}

