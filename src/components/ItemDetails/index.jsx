import ItemName from "../MarketItems";
import "./style.css"
export default function ItemDetails(props) {
  return (
    <div className="container">
      <div className="item-container">
        <div>{props.name}</div>

        <div>price</div>
        <div className="color-price">
          {props.price}
          {props.currency}
        </div>
        <div> Sell To Trader</div>
        <div>{props.trader} </div>
        <div className="color-price">
          {props.traderPrice}
          {props.currency}
        </div>
        <div>Average 7 days price </div>
        <div className="color-price">
          {props.avg7DaysPrice}
          {props.currency}
        </div>
        <div>Average 24h price</div>
        <div className="color-price">
          {props.avg1DayPrice}
          {props.currency}
        </div>
      </div>
      <div className="img-container">
        <img src={props.img}></img>
      </div>
    </div>
  );
}
