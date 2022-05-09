const veja = document.getElementById('veja');
veja.addEventListener('click', viewCardProjects);

function modifyArticle(){
  const articlePost = document.getElementsByTagName('article')[0];
  console.log(articlePost);
  articlePost.classList.toggle('active-posts');
  articlePost.classList.add('desative_posts');

}

function viewCardProjects(){
  console.log('aparece card');
  insertCard();
  modifyArticle();
}

function createSectionGenerate(){
  const main = document.getElementsByTagName('main')[0];
  const section = document.createElement('section');
  section.className = 'generate-card-projects';

  main.appendChild(section);
  return section;
 
}

function createCard3(){
  const divCard = document.createElement('div');
  divCard.className = 'card card-projeto3';
  
  const img = document.createElement('img');
  img.className = 'repository';
  img.src = './assets/folder.svg';
  img.alt = 'repositório de projeto';
  
  const link = document.createElement('a');
  link.id = 'component';
  link.href = 'https://maratona-discover-frontend.vercel.app/';
  link.className = 'project-title';
  link.innerText = 'Dev Finance';
  
  const h2 = document.createElement('h2');
  h2.className = 'subtitle-desc';
  h2.innerText = 'Projeto desenvolvido da maratona da Rocketseat para iniciantes';
  
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

function createCard4(){
  const divCard = document.createElement('div');
  divCard.className = 'card card-projeto4';
  
  const img = document.createElement('img');
  img.className = 'repository';
  img.src = './assets/folder.svg';
  img.alt = 'repositório de projeto';
  
  const link = document.createElement('a');
  link.id = 'component';
  link.href = 'https://proffy-tan.vercel.app/';
  link.className = 'project-title';
  link.innerText = 'Proffy';
  
  const h2 = document.createElement('h2');
  h2.className = 'subtitle-desc';
  h2.innerText = 'Projeto desenvolvido a partir NLW promovido pela Rocketseat';
  
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

function insertCard(){
  const createSection = createSectionGenerate();
  const insertCard3 = createCard3();
  const insertCard4 = createCard4();
  createSection.appendChild(insertCard3);
  createSection.appendChild(insertCard4);
  
}







// let card3 = document.querySelector('#card3');
// console.log(document.querySelector('#card4'));

// console.log(card3);
// card3.style.display = 'flex';
// card4.style.display = 'flex';