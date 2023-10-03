
const input = document.getElementById('input');
const generuoti = document.getElementById('generate');
let mygtukoHTML = ''

function generateButtons(aukstas){
  let mygtukai = '';
  for(let i = 0; i < aukstas; i++){
    mygtukai +=  `<button class="mygtukas" id="${i}">${i + 1}</button>`;
  }
    return mygtukai;
}


generuoti.addEventListener('click', ()=>{

  aukstas = input.value;
  console.log(aukstas);
  mygtukoHTML = generateButtons(aukstas);
  
  document.getElementById('buttons').innerHTML = mygtukoHTML;

  const mygtukaiDOM = document.querySelectorAll('.mygtukas');
    mygtukaiDOM.forEach(function(mygtukas) {
      mygtukas.addEventListener('click', ()=> {

        if (mygtukas.classList.contains('btn', 'btn-primary')) {
          mygtukas.classList.remove('btn','btn-primary');
        } else {
          mygtukas.classList.add('btn', 'btn-primary');
        }

        console.log(mygtukas);
        
      });
    })

})



  




// document.addEventListener('DOMContentLoaded', function() {
//   const input = document.getElementById('input');
//   const generuoti = document.getElementById('generate');
//   const mygtukuKonteineris = document.getElementById('buttons');
//   let aukstas;

//   function generateButtons(aukstas) {
//     let mygtukai = '';
//     for (let i = 0; i < aukstas; i++) {
//       mygtukai += `<button class="mygtukas" id="${i}">${i + 1}</button>`;
//     }
//     mygtukuKonteineris.innerHTML = mygtukai;

//     // Pridėkite event listener'ius kiekvienam sugeneruotam mygtukui
//     const mygtukaiDOM = document.querySelectorAll('.mygtukas');
//     mygtukaiDOM.forEach(function(mygtukas) {
//       mygtukas.addEventListener('click', function() {
//         // Atidarykite mygtuko ID numerį konsolėje
//         console.log('Paspaudėte mygtuką su ID:', this.id);
//       });
//     });
//   }

//   generuoti.addEventListener('click', () => {
//     aukstas = input.value;
//     generateButtons(aukstas);
//   });
// });



