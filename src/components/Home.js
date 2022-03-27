
import logo from '../assets/bulding.png'
import '../Home.css'

const urlGoogleRoobtn = 'http://background: url(//www.google.com/images/errors/robot.png) 100%'

function Home() {   
  return (
    <div  className="home">
     
       <center > 
        <h1>Logo seu perfil aparecerá aqui</h1>
         <img src={logo} alt="" /> 
        </center>
    </div>
  );
}

export default Home;
