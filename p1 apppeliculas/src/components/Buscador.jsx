import { useState } from "react";


// eslint-disable-next-line react/prop-types
const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda, setBusqueda] = useState('')
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPeli = (e) => {

    setBusqueda(e.target.value);

    // eslint-disable-next-line react/prop-types
    let pelisEncontradas = listadoState.filter(peli => {
      return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
    });

    if(busqueda.length <= 1 || pelisEncontradas <= 0){
      pelisEncontradas = JSON.parse(localStorage.getItem("pelis"));
      setNoEncontrado(true);
    }else{
      setNoEncontrado(false)
    }


    setListadoState(pelisEncontradas);




  }
  return (
            <div className="search">
                <h3 className="title">Buscador: {busqueda}</h3>
                {(noEncontrado == true && busqueda.length > 1 ) && (
                    <span className="noEncontrado">No se ha encontrado ninguna coincidencia</span>
                )}
                
                <form>
                    <input  type="text" 
                            id="search_field" 
                            name="busqueda" 
                            autoComplete="off" 
                            value={busqueda}
                            onChange={buscarPeli}/>
                    <button id="search">Buscar</button>
                </form>
            </div>
  )
}

export default Buscador;
