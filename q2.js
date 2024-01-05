const abreviarNomes = (nomes) => nomes.map((nome, index, array) => {
    const partesNome = nome.split(' ');
    return index === array.length - 1 ? nome : partesNome.map((parte, i) => i === 0 ? parte : ${parte.charAt(0)}.).join(' ');
  });