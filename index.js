let listaPresentes = [];
      let listaAusentes = [];
      let alumnos = [];
      let presentes = 0;
      let ausentes = 0;
      let totales;
      let nombre = document.getElementById("nombre");
      let apellido = document.getElementById("apellido");
      let presente = document.getElementById("presente");
      let ausente = document.getElementById("ausente");
      let confirmar = document.getElementById("confirmar");
      let totalAlumnos = document.getElementById("totalAlumnos");
      let liAusentes = document.getElementById("listaAusentes");
      let liPresentes = document.getElementById("listaPresentes");
      let liTotal = document.getElementById("listaTotal");

      ausente.addEventListener("change", () => {
        if (ausente.checked) {
          presente.checked = false;
        }
      });

      presente.addEventListener("change", () => {
        if (presente.checked) {
          ausente.checked = false;
        }
      });

      confirmar.addEventListener("click", () => {
        let alumno = {
          nombre: "",
          apellido: "",
          presentismo: "",
        };

        alumno.nombre = nombre.value;
        alumno.apellido = apellido.value;

        if (presente.checked) {
          alumno.presentismo = "presente";
          presentes++;
          listaPresentes.push(alumno);

          let nuevoElemento = document.createElement("li");
          nuevoElemento.textContent = alumno.nombre + " " + alumno.apellido;
          liPresentes.appendChild(nuevoElemento);

        } else if (ausente.checked) {
          alumno.presentismo = "ausente";
          ausentes++;
          listaAusentes.push(alumno);
          

          let nuevoElemento = document.createElement("li");
          nuevoElemento.textContent = alumno.nombre + " " + alumno.apellido;
          liAusentes.appendChild(nuevoElemento);
          
        } else {
          alert("presentismo invalido");
        }

        alumnos.push(alumno);
        nombre.value = "";
        apellido.value = "";
        totales = totalAlumnos.value;
        localStorage.setItem("alumno", JSON.stringify(alumnos));

        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = alumno.nombre + " " + alumno.apellido;
        liTotal.appendChild(nuevoElemento);
      });



limpiar.addEventListener("click", () => {
  localStorage.clear();
  alumnos.splice(0, alumnos.length);
  presente.checked = false;
  ausente.checked = false;
  liTotal.remove()
});

let porcentajePresentes = (presentes * 100) / totalAlumnos;
console.log(`hay ${presentes} alumnos presentes`);
console.log(`hay ${ausentes} alumnos ausentes`);
console.log(`hay ${porcentajePresentes}% de presentismo`);
console.log(listaAusentes);
console.log(listaPresentes);
