import React from 'react'
import Footer from '../components/footer'
import CategorysMenu from '../components/categorysMenu'
import Menu from '../components/menu'
import MenuNav from '../components/menuNav'
import Header from '../components/header'
import CategoryRecipe from './CategoryRecipes'

export default function CategoryPages() {
  return (
    <>
    <MenuNav/>
    <Header/>
    <Menu/>
    <CategorysMenu/>
    
    <Footer/>
    </>
  )
}
