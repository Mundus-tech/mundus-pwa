const button = document.getElementById("ble");
const logs = document.getElementById("board");
button.addEventListener("click", (event) => connectBluetooth());

async function connectBluetooth() {
  try {
    const device = await navigator.bluetooth.requestDevice({
      filters: [
        {
          services: ["2a690b7a-5c7c-11e9-8647-d663bd873d93"],
        },
        {
          services: ["e4686d6e-cfb7-11e9-bb65-2a2ae2dbcce4"],
        },
        {
          services: ["4c2a3498-76e7-11e9-8f9e-2a86e4085a59"],
        },
      ],
    });
    const server = await device.gatt.connect();

    // Get heart rate data
    const boardService = await server.getPrimaryService(
      "2a690b7a-5c7c-11e9-8647-d663bd873d93"
    );
    const pressCharacteristic = await boardService.getCharacteristic(
      "3dc0c500-609a-4a8b-a114-4f405fc663b2"
    );
    const moveCharacteristic = await boardService.getCharacteristic(
      "2a690ec2-5c7c-11e9-8647-d663bd873d93"
    );
    const stepCharacteristic = await boardService.getCharacteristic(
      "1a6f9528-4eb1-442b-92f5-52c617cbf9de"
    );

    await pressCharacteristic.startNotifications();
    await moveCharacteristic.startNotifications();
    await stepCharacteristic.startNotifications();

    pressCharacteristic.addEventListener("characteristicvaluechanged", (e) => {
      console.log(e.target.value);
      logs.innerHTML += "<p>Press</p>";
    });
    moveCharacteristic.addEventListener("characteristicvaluechanged", (e) => {
      console.log(e.target.value);
      logs.innerHTML += "<p>Move</p>";
    });
    stepCharacteristic.addEventListener("characteristicvaluechanged", (e) => {
      console.log(e.target.value);
    });
  } catch (e) {
    console.log(e);
  }
}
c;