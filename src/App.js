import { connect, registerListeners } from "@mundus-tech/mundus-pwa-bluetooth";
import "./App.css";

function App() {
  const connectBt = async () => {
    const device = await connect();
    await registerListeners(device);
  };
  return (
    <div className="App">
      <button onClick={connectBt}></button>
    </div>
  );
}

export default App;
