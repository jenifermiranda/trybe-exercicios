const validaNotas = (n1, n2, n3, n4) => {
  
  if (n1 !== typeof 'number' || n2 !== typeof 'number' || n3 !== typeof 'number' || n4  !== typeof 'number' ) { 
  throw new Error('Os valores precisam ser numérico')
  }
}

const validaMedias = (n1, n2, n3, n4) => { 
  try {
    validaNotas(n1, n2, n3, n4);
      let sum = n1 + n2 + n3 + n4; 
      let media = sum / 4;
      return media;
  } catch (error) {
    return error.message;
  }
}

console.log(validaMedias (4, 5, 3, '9'));