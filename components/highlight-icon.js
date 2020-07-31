import {Wind, RefreshCw, Star, Hexagon} from 'react-feather'

const HighlightIcon = ({type, size, color}) => {
  if (type === 'easy-clean') {
    return <Wind size={size} color={color} />
  } else if (type === 'reusable') {
    return <RefreshCw size={size} color={color} />
  } else if (type === 'unique') {
    return <Star size={size} color={color} />
  } else if (type === 'multi-purpose') {
    return <Hexagon size={size} color={color} />
  }
  return null;
}

export default HighlightIcon
