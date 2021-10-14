import "./Card.css";
import CardHeader from "../Cards/CardHeader";
import CardSep from "../Cards/CardSep";
import CardText from "../Cards/CardText";

function Card(props) {
  return (
    <div className="card">
      <CardHeader caption={props.items[0].caption} />
      <CardSep />
      <CardText text={props.items[0].text} />
    </div>
  );
}
//<CardHeader caption={props.caption}/>
export default Card;
