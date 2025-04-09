import Header from "./components/header"
import Menu from "./components/menu"
import Footer from "./components/footer"
import Aside from "./components/aside"
import Content from "./components/content"
import Below from "./components/below"

function App() {


  return (
    <>
      <Header/>
      <Menu/>
      <div class="container mt-5">
      <div class="row">
        <Aside/>
        <Content/>
      </div></div>
      <Below/>
      <Footer/> 
    </>
  )
}

export default App
