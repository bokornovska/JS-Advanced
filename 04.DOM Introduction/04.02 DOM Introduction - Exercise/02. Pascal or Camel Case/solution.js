function solve() {

  let text = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;

  let result = ''

  // let textAsArray = text.split(' ');
  // console.log(textAsArray); // ['this', 'is', 'an', 'example']

  if (currentCase === 'Camel Case') {
    for (let i = 0; i < text.length; i++) {

      if (text[i] === ' ') {
        result += text[i + 1].toUpperCase();
        i++
      } else {
        result += text[i].toLowerCase();
      }
    }
  } else if (currentCase === 'Pascal Case') {
    result += text[0].toUpperCase();

    for (let i = 1; i < text.length; i++) {

      if (text[i] === ' ') {
        result += text[i + 1].toUpperCase();
        i++
      } else {
        result += text[i].toLowerCase();
      }
    }
  } else {
    result = 'Error!'
  }

  let resultElement = document.getElementById('result');
  resultElement.textContent = result;
}