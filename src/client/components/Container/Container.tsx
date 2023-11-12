import { ReactNode } from 'react'
import { StyledContainer } from './Container.Styled'

const Container = ({ children }: { children: ReactNode }) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default Container
