import { Link } from 'react-router-dom';

const Curriculum = () => {
  return (
    <div className='page'>
      <h1 className="heading">Curriculum</h1>

      <h2>Experiencia</h2>
        <ul>
          <li>Field Serivice Honeywell 2019 - Actualmente</li>
        </ul>
      <h2>Conocimientos</h2>
        <p>Desarrollo en: </p>
      <h2>Educacion</h2>
        <p>Universidad: </p>
      <h2>Proyectos Personales</h2>
        <Link to="https://app.netlify.com/teams/art321995">Paginas o aplicaciones Web</Link>
      <h2>Otras Habilidades</h2>
        <p>Habilidades Personales: </p>
        <ul>
          <li>Trbajo en equipo</li>
        </ul>

    
    </div>
  )
}

export default Curriculum
