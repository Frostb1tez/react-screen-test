import { MainContainer } from './styled'
import { MainProps } from './type'

const Main: React.FC<MainProps> = ({ children }) => {
  return <MainContainer>{children}</MainContainer>
}

export default Main
