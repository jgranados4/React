import './App.css';
import Testimonio from './componentes/Testimonio';

// function App() {
//   return (
//   );
// }
const App= ()=>{
  return(
     <div className="App">
      <div className='contenido-principal'>
        <h1>Esto dice nuestro alumnos:</h1>
      </div>
      <Testimonio
        nombre='Emma'
        país='Ecuador'
        cargo='Ingeniera de sistemas'
        imagen='ima'
        empresa='Facebook'
        Testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
       < Testimonio
        nombre='Juan'
        país='Peru'
        cargo='Ingeniero de sistemas'
        imagen='ima'
        empresa='Facebook'
        Testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
    </div>
  );
}

export default App;
