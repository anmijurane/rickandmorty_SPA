import getData from '../utils/getData'
import getHash from '../utils/getHash';

function getPag(URL) {
  if (URL) {
    var dig1 = URL.charAt(URL.length - 2);
    var dig2 = URL.charAt(URL.length - 1);
    var pag = dig1 === '=' ? 0 : dig1;
    console.log(`Pag --> ${pag}${dig2}`);
    var rx = parseInt(`${pag}${dig2}`, 10) - 1;
    console.log('getPag --> ' + rx);
    return rx;
  } else {
    console.log('else --> ' + 34);
    return 34;
  }
}

const Home = async () => {
  const pageNumber = await getHash();
  const characters = await getData(`${pageNumber}`);
  var page = await getPag(characters.info.next);

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
        <label> <span>...</span></label>

        <label>
          <a href=${'/#/?page='+(page-2)+'/'}>${page-2}</a>
        </label>

        <label>
          <a href=${'/#/?page='+(page-1)+'/'}>${page-1}</a>
        </label>

        <label>
          <a href="" id="pagActually">${page}</a>
        </label>

        <label>
          <a href=${'/#/?page='+(page+1)+'/'} >${page+1}</a>
        </label>

        <label>
          <a href=${'/#/?page='+(page+2)+'/'}>${page+2}</a>
        </label>

        <label> <span>...</span></label>

        <button id="btn-next" class="containerBtn--btnNext">NEXT</button>
    </div>
   `;
  return view;
};

export default Home;