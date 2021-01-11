import React, { useState } from "react";

import MundusBluetoothService from "@mundus-tech/mundus-pwa-bluetooth";
const btService = new MundusBluetoothService();

function App() {
  const [presses, setPresses] = useState([]);
  const [moves, setMoves] = useState([]);
  const [fieldsState, setFieldsState] = useState("");
  const connectBt = async () => {
    await btService.connect();
    await btService.startListeners();
    btService.addListenerCallback("press", (value) =>
      setPresses((pressesState) => [...pressesState, value])
    );
    btService.addListenerCallback("move", (value) =>
      setMoves((movesState) => [...movesState, value])
    );
    /*setInterval(async () => {
      setFieldsState(await btService.read("step"));
    }, 2000)*/
    await btService.write("leds", "#1|255,255,255|1000|-1#");
  };
  return (
    <div className="App">
      <button onClick={connectBt}>Connect to Mundus Board</button>
      <div>
        <h1>Press</h1>
        {presses.map((press) => {
          return <p>{press}</p>;
        })}
      </div>
      <div>
        <h1>Move</h1>
        {moves.map((move) => {
          return <p>{move}</p>;
        })}
      </div>
      <div>
        <h1>Fields state</h1>
        <p>{fieldsState}</p>
      </div>
    </div>
  );
}

export default App;
