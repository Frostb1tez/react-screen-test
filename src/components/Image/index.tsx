import { ImageContainer } from './styled'
import { ImageProps } from './type'

const Image: React.FC<ImageProps> = ({ src, alt, width, height, className }) => {
  return <ImageContainer src={src} alt={alt} width={width} height={height} className={className} />
}

export default Image
