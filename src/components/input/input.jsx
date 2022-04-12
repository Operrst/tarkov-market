import { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

function MyInput() {
  const [name, setName] = useState("");

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

function DataFetching() {
  const [data, setData] = useState([]);
}
// ss
export default MyInput;
