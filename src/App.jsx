import { Routes, Route} from 'react-router-dom'
import Inicio from './pages/inicio'
import Footer from './components/Footer'
import Header from './components/Header'
import Contacto from './pages/Contacto'

function App() {
  return (
    <>
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
      <Footer />
      </div>
    </>
  )
}
export default App
