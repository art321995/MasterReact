

 export const GuardarEnStorage = (clave, elemento) =>{

    //Conseguir los elementos que hay en local storage
      let elementos = JSON.parse(localStorage.getItem(clave)); 

    //Comprobar si es un array
    if(Array.isArray(elementos)){
      elementos.push(elemento)

    }else{
      elementos = [elemento];
    }
    //Guardar en el localstorage
    localStorage.setItem(clave, JSON.stringify(elementos))

    //Devolver objeto guardado
    return elemento;
    
  }