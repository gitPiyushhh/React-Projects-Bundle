import star from "./../Images/Star 1.png";

export default function Card(props) {
  return (
    <div className="card">
      {/* Conditional rendering --> Render only if the first statement is True */}
      {props.item.openSpots === 0 && (
        <div className="tag">
          <p className="tag-text">{props.item.status}</p>
        </div>
      )}
      <img src={props.image} alt="Card image" className="card-img" />
      <div className="rating-container">
        <div className="u-flex">
          <img src={star} alt="Star Image" className="card-stars" />
          <p className="rating-point">{props.item.rating}</p>
          <p className="rating-other">({props.item.numberReviews})|USA</p>
        </div>
      </div>
      <p className="title">{props.item.title}</p>
      <div className="rate u-flex">
        <p className="u-bold">From ${props.item.price}</p>/ person
      </div>
    </div>
  );
}
