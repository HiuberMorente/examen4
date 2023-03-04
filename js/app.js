
// const createQuestion = () =>  {
//   Swal.fire({
//     title: "Agregar pregunta",
//     html: `
//       <form id="createForm" method="post">
//       <label for="pregunta">Pregunta:</label>
//       <input type="text" id="pregunta" name="pregunta" required>

//       <select>
//         <option value="numerico">Numerico</option>
//         <option value="texto">Texto</option>
//       </select>

//     </form>
//     `,
//     showCancelButton: true,
//     confirmButtonColor: "#3083d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText:"Agregar",
//     preConfirm: () => {
//       const createForm = document.querySelector("#createForm");
//       if(!createForm.checkValidity()) {
//         Swal.showValidationMessage("Por favor complete todos los campos obligatorios");
//       }
//     }    
//   }).then(result => {
//     if(result.value) {

     
//         $("#createForm").submit(function(e) {
//           e.preventDefault();
//           var pregunta = $("#pregunta");
//           var tipoPregunta = $("#tipoPregunta");

//           $("table tbody").append('<tr><td>'+ pregunta + '- ' + tipoPregunta +'</td></tr>');
//         })
      
//     }
//   })
// }


//<input type="text" name="tipoPregunta[]" required></td>
  $(document).ready(function() {
    $('#addRow').click(function() {
      $('#myTable tbody').append(`
        <tr>
          <td><input type="text" name="pregunta[]" required></td>
          <td>
            <select class="tipo-respuesta">
              <option value="texto">Texto</option>
              <option value="numerico">Numerico</option>
            </select>          
          <td><input type="text" name="respuesta[]" id="respuesta" required></td>
          <td><button class="removeRow">Eliminar</button></td>
        </tr>`);
    });
    
   $(document).on('click', '.removeRow', function() {
      $(this).closest('tr').remove();
    });
  });

  $(document).on("change", ".tipo-respuesta", function() {
    var respuestaInput = $(this).closest("tr").find(".respuesat");
    if($(this).val() == "numerico") {
      respuestaInput.addClass("solo-numeros");
    }else {
      respuestaInput.removeClass("solo-numeros");
    }
  });


  $(document).on("input", "solo-numeros", function() {
    var valueInput = $(this).val();

    var regex = /^\d+/;

    if(!regex.test(valueInput)) {
      validNumericos();
    }

  });


 function validNumericos(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (((charCode == 8) || (charCode == 46) 
    || (charCode >= 35 && charCode <= 40)
        || (charCode >= 48 && charCode <= 57)
        || (charCode >= 96 && charCode <= 105))) {
        return true;
    }
    else {
        return false;
    }
}




  // var inputRespuesta = document.querySelector("#resputea");

  // inputRespuesta.addEventListener("keydown", function(evt) {
  //   var charCode = (evt.which) ? evt.which : event.keyCode
  //   if (((charCode == 8) || (charCode == 46) 
  //   || (charCode >= 35 && charCode <= 40)
  //       || (charCode >= 48 && charCode <= 57)
  //       || (charCode >= 96 && charCode <= 105))) {
  //       return true;
  //   }
  //   else {
  //       return false;
  //   }

  // })


//   function validNumericos(evt) {
// }

