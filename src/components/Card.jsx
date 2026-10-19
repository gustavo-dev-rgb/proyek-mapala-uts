export default function Card({ title, image, imageAlt = "", children }) {
  return (
    <article className={`card ${image ? "card--media" : "card--text"}`}>
      <h2 className="card__title">{title}</h2>
      <div className="card__body">
        {image && (
          <figure className="card__figure">
            <img src={image} alt={imageAlt} draggable="false" />
          </figure>
        )}
        <div className="card__text">{children}</div>
      </div>
    </article>
  );
}
