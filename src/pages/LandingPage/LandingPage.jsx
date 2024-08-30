import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/header/Header'
import MainContent from '../../components/mainContent/MainContent'
import Footer from '../../components/footer/Footer'

function LandingPage(){
    return(
        <div>
        <Header />
        <div className="main-content">
          <MainContent />
        </div>
        <Footer/>
      </div>
    )
}
export default LandingPage