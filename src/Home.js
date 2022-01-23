
import logo from './assets/bulding.png'
import './Home.css'

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
