import { trabajos } from "../data/trabajos"

const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className="heading">Portafolio</h1>  

      {
        trabajos.map(trabajo => {
          <article>
            <h2>{trabajo.nombre}</h2>
          </article>
        })
      } 
    </div>
  )
}

export default Portafolio

