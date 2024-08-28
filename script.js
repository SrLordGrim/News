<script>
  // Selecciona el elemento en el que quieres insertar el header
  const headerElement = document.querySelector('header'); 

  // Carga el contenido del archivo header.html
  fetch('/header.html')
    .then(response => {
      // Comprueba si la respuesta es exitosa
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.text(); // Convierte la respuesta a texto
    })
    .then(data => {
      headerElement.innerHTML = data; // Inserta el contenido en el elemento seleccionado
    })
    .catch(error => {
      console.error('Error al cargar el header:', error);
    });
</script>
