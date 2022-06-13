import { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { useEffect } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function MarketView() {
  const [name, setName] = useState("");
  const [table, setTable] = useState([]);
  const [tag, setTag] = useState("");

  function handleClick(_tag,a) {
    console.log("works!", _tag, a);
    setTag(_tag);
  }

  let tagArray = [
    "favorite",
    "keys",
    "barter",
    "containers",
    "provisions",
    "gear",
    "meds",
    "sights",
    "suppressors",
    "weapon",
    "ammo",
    "magazines",
    "tactical devices",
    "weapon parts",
    "special equipment",
    "maps",
    "ammo boxes",
    "currency",
    "Repair",
    "Not functional",
  ];

  useEffect(() => {
    if (name) {
      axios
        .get(
          `https://tarkov-market.com/api/v1/item?q=${name}&x-api-key=QTnLRoCJbP25tEEd`
        )
        .then((res) => {
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

      {/* <div>
        {tagArray.map((_tag) => (
          <div onClick={() => handleClick(_tag,"cos")}>{_tag}</div>
        ))}
      </div> */}
      <table className="table">
        <tr>
          <td>name</td>
          <td>price</td>
          <td>image</td>
          <td>link</td>
        </tr>{" "}
        {table.map((item) => (
          <tr key={item.uid}>
            <td>{item.name}</td>
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

// Tablica stringow ktora bedzie tagami.
// Stworzyc kontener div , ktory bedzie zawieral tagi ktore beda mapowane w divie.
// stan ktory bedzie trzymal stringa . tag ktory bedzie stringiem poprzez useState
// kazdy div bedzie musial miec onclick , i przy kazdym kliknieciu ma byc set tag.
// jezeli juz bedziemy mieli ten tag wybrany to trzeba bedzie to ostylowac /
