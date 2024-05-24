import { Link } from "react-router-dom"
import { trabajos } from "../data/trabajos"


const ListadoTrabajos = ({limite}) => {
  return (
      <section className="works">
      {
        trabajos.slice(0,limite).map(trabajo => {
          return (
          <article key={trabajo.id} className="work-item">
            <h2> <Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link> </h2>
            <h3>Desarrollado con: {trabajo.tecnologia}</h3>
            <div className="mask">
                <img src={"/images/"+trabajo.id+".png"}/>
            </div>
          </article>)
        })
      } 

      </section>
  )
}

export default ListadoTrabajos;