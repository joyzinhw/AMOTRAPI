import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header'
import MainContent from './components/mainContent/MainContent'
import Footer from './components/footer/Footer'
import './App.css'


function App() {


  return (
    //#1DB954

    // <>
    // <Header />
    // <MainContent />
    // <Footer />
    // </>
    <div className='custom-bg'>
      <Header />
      <div className="main-content">
        <MainContent />
      </div>
      <Footer/>
    </div>
  )
}

export default App
