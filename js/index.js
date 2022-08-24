let btn1 = document.getElementById('b1');
let btn2 = document.getElementById('b2');

btn1.disabled = true;

document.querySelector('input').addEventListener('input', (e) => {
  if (e.target.value.length > 2) {
    btn1.disabled = false;
  } else {
     btn1.disabled = true;
  };
})

let reset = () => {
  document.querySelector('input').value = '';
  document.querySelector('#b1').disabled = true;
  document.querySelector('#b2').style.display = "none";
  document.querySelector('.result').className = "result";
};

let found = false;

let showresult = () => {
  let r = document.querySelector('.result');
  document.querySelector('#b2').style.display = "inline-block";

  if (found) {
    r.textContent = "Movie is available 😊";
    r.classList.add('true');
  } else {
    r.textContent = "Not Found 😢";
    r.classList.add('false');
  }
}

let search = () => {
  let i = document.querySelector('input');

  for (let n = 0; n < movies.length; n++) {
    if (i.value === movies[n]) {
      found = true;
      break;
    }
    // if ends 
  }
  // for loop ends
  showresult();
}; 

btn1.addEventListener('click', search);
btn2.addEventListener('click', reset);







