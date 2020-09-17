import getData from '../utils/getData'
import getHash from '../utils/getHash';

const Home = async () => {
  const page = await getHash();
  const characters = await getData(`${page}`);

  const view = `
    <div class="Characters">
      ${characters.results.map(character => `
        <article class="Characters--item">
          <a href="#/${character.id}/" >
            <img src="${character.image}" alt="${character.name}"/>
            <div class="item__info">
              <h2 class="nameCharacter"> ${character.name} </h2>
              <h3 class="nameCharacter">${character.species}</h3>
            </div>
          </a>
        </article>
      `).join('')}
    </div>
      <div class="containerBtn">
        <button id="btn--last" class="containerBtn--btnlast">LAST</button>
        <label>Pag. <span>${getPag(characters.info.next)}</span></label>
        <button id="btn-next" class="containerBtn--btnNext">NEXT</button>
    </div>
   `;
  return view;
};

function getPag (URL) {
  if (URL) {
  let pag = URL.charAt(URL.length - 1);
  console.log("Valor sin mutar: "+pag);
  console.log(`Valor mutado:  ${pag - 1}`);
  return `${pag - 1}`;
  } else {
    return 1;
    //return URL.charAt(URL.length - 1);
  }
}

export default Home;