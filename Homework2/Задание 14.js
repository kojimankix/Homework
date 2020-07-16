function inArray(line, array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == line) return true;
    }
    return false;
  }
   
  console.log(inArray('Аб', ['Ад', 'ДВ', 'Аб', 'дК']));