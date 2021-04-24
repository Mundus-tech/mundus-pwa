import MundusBluetooth from "@mundus-tech/mundus-pwa-bluetooth"
const mundusBluetooth = new MundusBluetooth()

document.querySelector('#connect-bluetooth-button')
  .onclick = mundusBluetooth.connect
