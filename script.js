const veja = document.getElementById('veja');
veja.addEventListener('click', viewCardProjects);

function viewCardProjects(){
  console.log('aparece card');
  insertedCard();
}

function createCard(){
  const divCard = document.createElement('div');
  divCard.className = 'card card-projeto3';
  
  const img = document.createElement('img');
  img.className = 'repository';
  img.src = './assets/folder.svg';
  img.alt = 'repositório de projeto';
  
  const link = document.createElement('a');
  link.id = 'component';
  link.href = 'https://card-component-five.vercel.app/';
  link.className = 'project-title';
  link.innerText = 'Projeto 3';
  
  const h2 = document.createElement('h2');
  h2.className = 'subtitle-desc';
  h2.innerText = 'Projeto desenvolvido a partir dos desafios da Frontend Mentor';
  
  const divBolinhaTech = document.createElement('div');
  divBolinhaTech.className = 'bolinha-tech';
  
  const divBolinha = document.createElement('div');
  divBolinha.className = 'bolinha';
  divBolinha.id = 'bolinha2'

  const paragrafo = document.createElement('p');
  paragrafo.innerText = 'CSS';
  paragrafo.id = 'p-bolinha';

  divCard.appendChild(img);
  divCard.appendChild(link);
  divCard.appendChild(h2);
  divCard.appendChild(divBolinhaTech);

  divBolinhaTech.appendChild(divBolinha);
  divBolinha.appendChild(paragrafo);
  return divCard;
}

function insertedCard(){
  const card =  createCard();
  const article = document.getElementsByTagName('article')[0];
  
  article.insertAdjacentElement("beforebegin",card);
  console.log(article);
  //box.insertAdjacentHTML(html,favourites);
}







// let card3 = document.querySelector('#card3');
// console.log(document.querySelector('#card4'));

// console.log(card3);
// card3.style.display = 'flex';
// card4.style.display = 'flex';