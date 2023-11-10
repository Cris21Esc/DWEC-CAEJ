// Aquí tu código JAVASCRIPT

const datosMultimediaArray = [
    {
      "Peliculas": [
        "Titanic",
        "Forrest Gump",
        "Avatar",
        "The Shawshank Redemption",
        "The Godfather",
        "Inception",
        "Pulp Fiction",
        "The Dark Knight",
        "Schindler's List",
        "The Matrix"
      ]
    },
    {
      "Series":[
        "Juego de Tronos",
        "Breaking Bad",
        "Stranger Things",
        "Friends",
        "The Crown",
        "Los Serrano",
        "American Horror Story"
      ]
    },
    {
      "Animes":[
        "Death Note",
        "Sailor Moon",
        "Sword Art Online",
        "Assasination Classroom",
        "Tokyo Ghoul",
        "Mob Psycho 100",
        "Blue Lock",
        "One Piece"
      ]
    }
  ];

  const generosSet = new Set(["Masculino", "Femenino", "Otro", "Helicóptero"]);

  const aficionesMap = new Map([
    ["deportes", "Practicar deportes"],
    ["musica", "Escuchar música"],
    ["lectura", "Leer libros"],
    ["viajes", "Viajar"],
    ["otra", "Otra afición"]
]);

let submit = document.getElementById("enviar");
submit.addEventListener("click",mostrarTodo);

function mostrarSexos(){
  //Comienzo de la implementación de dinamismo de los Sexos
  let sexo = document.getElementById("sexo");
  
  //Bucle para recorrer los elementos del Array de datos géneros
  generosSet.forEach((element)=>{
    //Se crea el label de cada opción
    let label = document.createElement("label")
    label.innerHTML = element;
    label.setAttribute("for",element.toLowerCase());

    //Se crea el input de cada opción
    let input = document.createElement("input");
    input.setAttribute("type","radio");
    input.setAttribute("name","sexo");
    input.setAttribute("id",element.toLowerCase());
    input.setAttribute("value",element.toLowerCase());

    //Se añaden ambos elementos al div "Sexo"
    sexo.appendChild(input);
    sexo.appendChild(label);
  });
}
function mostrarAficiones(){
  //Comienzo de la implementación de dinamismo de las Aficiones
  let aficion = document.getElementById("aficion");

  //Creación del bucle para asignar clave y valor a las opciones
  aficionesMap.forEach((valor,clave) =>{
    //Creación de elemento option
    let option = document.createElement("option");

    //Asignación de valores y elementos HTML
    option.setAttribute("value",clave)
    option.innerHTML = valor;

    //Inserción de la opción creada al menú de opciones
    aficion.appendChild(option);
  });
}
function mostrarMultimedia(){
  //Comienzo de la implementación de dinamismo de las Peliculas

  //Creación del bucle para la asignación de valores
    datosMultimediaArray.forEach(ObjJson => {

      //Recopilacion de claves primeras
      for(clave in ObjJson){
        let lista = document.getElementById(clave.toLowerCase());

        //Recopilacion de valores dentro de la clave
        ObjJson[clave].forEach(element=>{

          //Asignación de valores
          let option = document.createElement("td");
          //option.setAttribute("value",element);
          option.innerHTML = element;
          lista.appendChild(option);
        });
      }
  });
}

function mostrarTodo(e){
  console.log(`Nombre: ${document.getElementById("nombre").value}`);  
  e.preventDefault();
}

  console.log("Los datos multimedia son :")
  console.log(datosMultimediaArray)
  
  console.log("Los valores de género son:")
  console.log(generosSet)

  console.log("La información de aficiones es:")
  console.log(aficionesMap)

  mostrarSexos();
  mostrarAficiones();
  mostrarMultimedia();