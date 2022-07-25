import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "react-query";
import { useState } from "react";
const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => data);

function ButtonClicked() {
  let { data, isLoading } = useQuery(
    "data",
    fetcher("http://localhost:8000/getdata")
  );
  console.log(data);
  if (isLoading) {
    return <p>Is Still Loading</p>;
  }

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

function App() {
  let [state, setstate] = useState(false);

  function btnclicked() {
    setstate((oldstate) => {
      return !oldstate;
    });
  }

  return (
    <div className="App">
      <h1>Welcome to Dhruv's blogging website</h1>
      <hr />
      <h3>Write you blog here</h3>
      <input type="text" placeholder="title"></input>
      <br />
      <br />
      <input
        type="text"
        className="inputdesc"
        placeholder="description"
      ></input>

      <br />
      <br></br>
      <button onClick={btnclicked}>Click here to see all the posts</button>
      {state && <ButtonClicked />}
    </div>
  );
}

export default App;
