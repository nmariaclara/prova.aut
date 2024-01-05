document.getElementById('getCarInfoBtn').addEventListener('click', () => {
  fetch('/car-info?model=Tesla Model S')
    .then(response => response.json())
    .then(data => {
      // Tratar a resposta do servidor e exibir os detalhes do carro no cliente
      console.log(data);
    })
    .catch(error => console.error(error));
});