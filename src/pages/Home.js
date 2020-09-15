import getData from '../utils/getData'

const Home = async () => {
  const characters = await getData();
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
   `;
  return view;
};

export default Home;