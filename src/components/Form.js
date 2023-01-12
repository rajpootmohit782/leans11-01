import { useState } from "react";
import "./Form.css";
export const Form = (e) => {
  const [title, setTitle] = useState("");
  const [optext, setOpText] = useState("");
  const [release, setRelease] = useState("");
  const [result, setResult] = useState([]);
  console.log(title, optext, release);
  console.log(result);
  const formfun = (e) => {
    let array = [];
    console.log("click");
    array.push([
      {
        id: Math.random(),
        title: { title },
        OpeningText: { optext },
        releaseDate: { release }
      }
    ]);
    setResult(array);
    console.log(array);
  };
  return (
    <div>
      <form className="form">
        <div className="text">
          Title
          <div className="input">
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
        </div>
        <div className="text">
          Opening Text
          <div className="input">
            <input
              type="text"
              onChange={(e) => setOpText(e.target.value)}
              value={optext}
            />
          </div>
        </div>
        <div className="text">
          Relese Date
          <div className="input">
            <input
              type="text"
              onChange={(e) => setRelease(e.target.value)}
              value={release}
            />
          </div>
        </div>
        <button onClick={() => formfun()}>Add Movie</button>
      </form>
    </div>
  );
};
