import React from 'react'
import Menu from '../components/menu'
import MenuNav from '../components/menuNav'
import Header from '../components/header'
import Content from '../components/content'
import Aside from '../components/aside'
import Below from '../components/below'
import Footer from '../components/footer'

export default function HomePages() {
  return (
    <>
          <MenuNav/>
          <Header/>
          <Menu/>
          <div className="container mt-5">
          <div className="row">
          <div className="col-md-8">
              <Aside />
            </div>
            <div className="col-md-4">
              <Content />
            </div>
          </div>
          </div>
          <Below/>
          <Footer/> 
    </>
  )
}
