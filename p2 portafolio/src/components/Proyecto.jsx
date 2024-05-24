import { useParams } from "react-router-dom";
import { trabajos } from "../data/trabajos";
import { useEffect, useState } from "react";


const Proyecto = () => {

    const [proyecto, setProyecto] = useState({});

    const params = useParams();

    useEffect(() =>{
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);
        setProyecto(proyecto[0]);
    }, [params.id])

  return (
    <div className='page page-work'>
        <h1 className='heading'>{proyecto.nombre}</h1>
        <p>Tecnologias del Proyecto: {proyecto.tecnologia}</p>
        <p>Descripcion: {proyecto.descripcion}</p>
        <a href={proyecto.url}>Ir al Proyecto</a>
        <div className="mask">
                <img src={"/images/"+proyecto.id+".png"} />
            </div>
        
    </div>
  )
}

export default Proyecto;
