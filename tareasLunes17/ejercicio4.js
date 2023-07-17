const removeAccents = (str) => {

    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
  }
  function solution(inputString) {
  
      inputString=removeAccents(inputString);
  
      inputString=inputString.replace(/ /g,'');
  
      inputString=inputString.toUpperCase();
  
      let reverso = "";
  
      for(let i = inputString.length-1; i>=0; i--){
  
          reverso+=inputString[i];
  
      }
  
      console.log(reverso);
  
      console.log(inputString)
  ;
     return (reverso==inputString);
  
  }
  
  
  
  console.log(solution("Acaso hubo búhos acá"));