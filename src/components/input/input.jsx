import { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { useEffect } from "react";
function MyInput() {
  const [name, setName] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://tarkov-market.com/api/v1/item?q=btc&x-api-key=QTnLRoCJbP25tEEd"
      )
      .then((res) => {
        console.log(res);
      });
  }, []);
  return (
    <form>
      <label>
        Search
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  );
}
// input

// ss
export default MyInput;
