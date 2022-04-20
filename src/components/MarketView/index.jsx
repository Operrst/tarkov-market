import { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { useEffect } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function MarketView() {
  const [name, setName] = useState("");
  const [table, setTable] = useState([]);

  useEffect(() => {
    if (name) {
      axios
        .get(
          `https://tarkov-market.com/api/v1/item?q=${name}&x-api-key=QTnLRoCJbP25tEEd`
        )
        .then((res) => {
          console.log(res);
          setTable(res.data);
        });
    } else {
      setTable([]);
    }
  }, [name]);

  return (
    <form>
      <div className="label">
        <label>
          <input 
            className="input"
            placeholder="Search"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>

      <table>
        <tr>
          <td>name</td>
          <td>price</td>
          <td>image</td>
          <td>link</td>
        </tr>{" "}
        {table.map((item) => (
          <tr>
            <td key={item.uid}>{item.name}</td>
            <td>{item.price}</td>
            <td>
              <img src={item.img}></img>
            </td>
            <td>
              <a href={item.link}>Link</a>
            </td>
            <Link to={`/item/${item.name}`}>{item.name}</Link>
          </tr>
        ))}
      </table>
    </form>
  );
}

export default MarketView;
