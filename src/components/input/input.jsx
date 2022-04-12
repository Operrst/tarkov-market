import { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { useEffect } from "react";
import DataTable from "./dataTable";
function MyInput() {
  const [name, setName] = useState([]);

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
        <table width="100%" margin="1px" padding="8px" border="1px">
          <tr>
            <td>Image</td>
            <td>Title</td>
            <td>Wiki</td>
            <td>Avg price (24h) per slot</td>
            <td>24h Change</td>
            <td>7d CHange</td>
            <td>Sell to trader</td>
            <td>Insta Profit</td>
          </tr>
        </table>
      </label>
    </form>
  );
}
// input

// ss
export default MyInput;
