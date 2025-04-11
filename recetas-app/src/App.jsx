import Header from "./components/header"
import Menu from "./components/menu"
import Footer from "./components/footer"
import Aside from "./components/aside"
import Content from "./components/content"
import Below from "./components/below"
import MenuNav from "./components/menuNav"

function App() {


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

export default App
