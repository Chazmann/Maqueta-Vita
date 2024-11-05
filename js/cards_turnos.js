$(document).ready(function () {
  $("#searchEsp").on("click", function () {
    // Limpiar el contenedor de cards antes de agregar nuevas
    $("#availableAppointments").html("");

    // Obtener el valor de la especialidad desde el input
    const specialtyValue = $("#specialty").val();

    if (!specialtyValue) {
      // Si no se ha ingresado una especialidad, mostrar un mensaje de advertencia
      $("#availableAppointments").html(
        '<h5 style="color: red;">Por favor, ingrese una especialidad.</h5>'
      );
      return;
    }

    // Array de posibles médicos
    const doctors = [
      "Dr. Juan Pérez",
      "Dr. Ana López",
      "Dr. Carlos Gómez",
      "Dra. Mariana Ruiz",
      "Dr. Luis Martínez",
      "Dr. Isabel Fernández",
      "Dr. José Rodríguez",
      "Dra. Patricia Gómez",
      "Dr. Miguel Sánchez",
      "Dra. Laura Torres",
      "Dr. Francisco García",
      "Dra. Marta Pérez",
    ];

    // Array de posibles sedes
    const locations = ["Officia", "Hospital Austral", "Sede Champagnat"];

    // Días de la semana
    const weekdays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
    $("#availableAppointments").append(`<h4>Resultados de Turnos Disponibles para <b>${specialtyValue}</b></h4>`);
    // Generar 4 cards aleatorias
    for (let i = 0; i < 4; i++) {
      // Seleccionar un médico aleatorio y eliminarlo de la lista de médicos
      const doctorIndex = Math.floor(Math.random() * doctors.length);
      const doctorName = doctors[doctorIndex];
      doctors.splice(doctorIndex, 1); // Eliminar el médico seleccionado de la lista


      // Seleccionar una sede aleatoria
      const location = locations[Math.floor(Math.random() * locations.length)];

      // Seleccionar 3 días aleatorios de la semana
      const selectedDays = [];
      while (selectedDays.length < 3) {
        const day = weekdays[Math.floor(Math.random() * weekdays.length)];
        if (!selectedDays.includes(day)) {
          selectedDays.push(day);
        }
      }

      // Generar un rango horario aleatorio entre las 8 y las 17hs
      const startHour = Math.floor(Math.random() * 10) + 8; // Entre 8 y 17
      const endHour = startHour + 3; // Rango de 3 horas
     
      // Crear la card con los datos generados
      const card = `
                <div class="col-md-6 mb-4 col-xs-12">
                    <div class="card">
                        <div class="card-body row">
                            <div class="col-9">
                                <h5 class="card-title">${specialtyValue}</h5>
                                <h3 class="card-text fs-4"><b>${doctorName}</b></h3>
                                <p class="fs-5"><em>${location}</em></p>
                                <p class="card-text fs-6"><strong>Días:</strong> ${selectedDays.join(
                                  ", "
                                )}</p>
                                <p class="card-text fs-6"><strong>Horario:</strong> ${startHour}:00 - ${endHour}:00</p>
                            </div>
                            <div class="col-3">
                                <i class="fa fa-info btn btn-secondary p-2 w-100 rounded-5"></i>
                            </div>   
                        
                        </div>
                    </div>
                </div>
            `;

      // Insertar la card en el contenedor #availableAppointments
      
      $("#availableAppointments").append(card);
    }
  });
});
