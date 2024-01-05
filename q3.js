function analiseComplexaDeNumero() {
    return new Promise((resolve, reject) => {
      const numero1 = Math.floor(Math.random() * 100) + 1;
      const numero2 = Math.floor(Math.random() * 100) + 1;
  
      if ((numero1 + numero2) % 2 === 0 && (numero1 + numero2) > 150) {
        resolve(Condição especial atingida com ${numero1 + numero2}!);
      } else if (numero1 % 10 === 0 || numero2 % 10 === 0) {
        reject(Número quase especial encontrado: ${numero1 % 10 === 0 ? numero1 : numero2});
      } else {
        resolve(Resultado comum: ${numero1} e ${numero2});
      }
    });
  }