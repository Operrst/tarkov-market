import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ItemDetails from "../ItemDetails";

export default function ItemName() {
  let { itemName } = useParams();
  let [item, setItem] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://tarkov-market.com/api/v1/item?q=${itemName}&x-api-key=QTnLRoCJbP25tEEd`
      )
      .then((res) => {
        setItem(res.data[0]);
      });
  }, []);

  return (
    <div>
      {item ? (
        <ItemDetails
          name={item.name}
          price={item.price}
          trader={item.traderName}
          traderPrice={item.traderPrice}
          currency={item.traderPriceCur}
          avg7DaysPrice={item.avg7daysPrice}
          avg1DayPrice={item.avg24hPrice}
          img={item.img}
        />
      ) : (
        <div>brak itemu</div>
      )}
    </div>
  );
}
