import "./App.css";
import { postUser } from "./api";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [state, setState] = useState("");

  const getData = async () => {
    return await postUser(state);
  };
  useEffect(() => {
    getData()
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [state]);

  return (
    <div className="App">
      <h1>University Table</h1>
      <input
      className = "search"
        type="text"
        placeholder="Enter state name"
        onChange={(e) => setState(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>State</th>
            <th>Name</th>
            <th>Web Page</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0
            ? data.map((row) => (
                <tr>
                  <td>{row.country}</td>
                  <td>{row["state-province"]}</td>
                  <td>{row.name}</td>
                  <td>{row.web_pages}</td>
                </tr>
              ))
            : "No data found"}
        </tbody>
      </table>
    </div>
  );
}
export default App;
