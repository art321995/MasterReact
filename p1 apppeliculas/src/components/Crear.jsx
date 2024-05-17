import { useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

// eslint-disable-next-line react/prop-types
const Crear = ({setListadoState}) => {

  const tituloComponente = "Anadir Pelicula";
  const [peliState, setPeliState] = useState({
    titulo: '',
    descripcion: ''
  })

  const {titulo, descripcion} = peliState;

  const conseguirDatosFrom = e =>{
    e.preventDefault();

    //Conseguir datos del formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion =  target.descripcion.value;

    //Crear objeto de la pelicula a guardar

    let peli ={
      id: new Date().getTime(),
      titulo,
      descripcion
    };

    //Guardar estado
    setPeliState(peli);

    // Actualizar el listado del estado original
      setListadoState(elementos => {
        return {...elementos, peli};
      });

    // Guardar en el localStorage
      GuardarEnStorage("pelis", peli);

    

  };

  

  return (
            <div className="add">
                <h3 className="title">{tituloComponente}</h3>

                <strong>
                  {(titulo && descripcion) && "Has creado la pelicua: " + titulo}
                </strong>
                <form onSubmit={conseguirDatosFrom}> 
                    <input type="text" id="titulo" name="titulo" placeholder="Titulo" />
                    <textarea id="descripcion" name="descripcion" placeholder="Descripción"></textarea>
                    <input type="submit" id="save" value="Guardar" />
                </form>
            </div>
  )
};

export default Crear;
