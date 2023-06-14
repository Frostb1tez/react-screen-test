import React from 'react'
import { AppLayoutProps } from './type'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Main from '../../components/Main'

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <Main>{children}</Main>
      <Footer></Footer>
    </div>
  )
}

export default AppLayout
