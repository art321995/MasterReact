
const Contacto = () => {
  return (
    <div className='page'>
      <h1 className="heading">Contacto</h1>

      <form className="contact" action="mailto:art270112@gmail.com">
        <input type ="text" placeholder="Nombre(s)" />
        <input type ="text" placeholder="Apellidos" />
        <input type ="email" placeholder="Email" />
        <input type ="number" placeholder="Telefono" />
        <textarea placeholder="Motivo de contacto" />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default Contacto
