const Character = () => {
  const view = `
    <div className="Character--inner">
      <article className="Character--card">
        <img src="image" alt="Character"/>
        <h2 className="Character--name">
        Name
        </h2>
      </article>

      <article className="Character--card__info">
        <h3>Episodes: </h3>
        <h3>Status: </h3>
        <h3>Species: </h3>
        <h3>Gender: </h3>
        <h3>Origin: </h3>
        <h3>Last Location: </h3>
      </article>
    </div>
  `;
  return view;
};

export default Character;