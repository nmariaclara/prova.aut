const express = require('express');
const app = express();
const port = 3000;

app.get('/car-info', (req, res) => {
  // Lógica para retornar informações sobre o modelo de carro específico
  const carDetails = {
    brand: 'Tesla',
    model: 'Model S',
    year: 2022,
    features: ['Autopilot', 'Electric Engine', 'Luxury Interior']
  };

  res.json(carDetails);
});

app.listen(port, () => {
  console.log(Servidor escutando na porta ${port});
});