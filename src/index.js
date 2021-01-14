import MundusBluetoothService from "@mundus-tech/mundus-pwa-bluetooth";

const bt = new MundusBluetoothService();

function clickEvent() {
  bt.connect();
}

document.querySelector("#connect").addEventListener("click", clickEvent);
