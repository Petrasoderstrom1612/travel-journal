export default function Entry(props) {
  console.log(props)
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img
          className="main-image"
          src={props.img.src}
          alt={props.img.alt}
        />
      </div>
      <div className="info-container">
        <img
          className="marker"
          src="./src/assets/marker.webp"
          alt="map marker icon"
        />
        <span className="country">{props.country}</span>
        <a href={props.googleMapsLink}>
          View on Google Maps
        </a>
        <h2 className="entry-title">{props.place}</h2>
        <p className="trip-dates">{props.date}</p>
        <p className="entry-text">{props.description}</p>
      </div>
    </article>
  );
}
