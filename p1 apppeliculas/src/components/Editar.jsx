/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {

    const titulo_componente = "Editar pelicula";
    const guardarEdicion = (e, id) =>{
        e.preventDefault();

        let target = e.target;

        const peliAlmacenadas = conseguirPeliculas();
        // eslint-disable-next-line react/prop-types
        const indice = peliAlmacenadas.findIndex(peli => peli.id === id);

        let peliActualizada = {
            id, titulo: target.titulo.value, descripcion: target.descripcion.value
        }

        peliAlmacenadas[indice] = peliActualizada;

        localStorage.setItem("pelis", JSON.stringify(peliAlmacenadas));

        setListadoState(peliAlmacenadas);
        setEditar(0);

    }

  return (
    <div className='editForm'>
        <h3 className="title">{titulo_componente}</h3>
       
        
        <form onSubmit={e => guardarEdicion(e, peli.id)}>
            <input type = "text"
                    name="titulo"
                    className="titulo_editado"
                    // eslint-disable-next-line react/prop-types
                    defaultValue = {peli.titulo} />

            <textarea
                    name="descripcion"
                    // eslint-disable-next-line react/prop-types
                    defaultValue={peli.descripcion}
                    className="descripcion_editada" />

            <input type="submit" className="editar" value="Actualizar" />
        </form>
    </div>
  )
}

export default Editar
