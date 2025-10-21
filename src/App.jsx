import { Routes, Route} from 'react-router-dom'
import Inicio from './pages/inicio'
import Footer from './components/Footer'
import Header from './components/Header'
import Contacto from './pages/Contacto'
import Descripcion from './pages/ProdDetalles'

function App() {
  return (
    <>
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/ProdDetalles/:id' element={<Descripcion />} />
      </Routes>
      <Footer />
      </div>
    </>
  )
}
export default App
