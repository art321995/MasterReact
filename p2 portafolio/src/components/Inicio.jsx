
import { Link } from 'react-router-dom';
import ListadoTrabajos from './ListadoTrbajos';

const Inicio = () => {
  return (
    <div className='home'>
      <h1>Mi nombre es Arturo Esqueda, soy Desarrollador Web ubicado en Guadalajara, Mex. Me especializo como un
          <strong> Front end Developer</strong>.
      </h1>
      <h2 className='title'>
        Te ayudo a crear tus sitios o aplicaciones web y a tener mas visibilidad y relevancia en internet. <Link to="/contacto"> Contactame </Link>
      </h2>
      <section className='last-works'>
        <h2 className='heading'> Estos son algunos de mis trabajos de desarrollo web:</h2>
        <ListadoTrabajos limite="2" />
      </section>
    </div>
  )
}

export default Inicio
