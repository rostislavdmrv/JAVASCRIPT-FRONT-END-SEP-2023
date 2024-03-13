function encodeAndDecodeMessages() {
  let encodeTexBox = document.getElementsByTagName("textarea")[0];
  let encodeBtn = document.getElementsByTagName("button")[0];

  let decodeTexBox = document.getElementsByTagName("textarea")[1];
  let decodeBtn = document.getElementsByTagName("button")[1];

  encodeBtn.addEventListener("click", encodeMessage);
  decodeBtn.addEventListener("click", decodeMessage);

  function encodeMessage() {
    let message = encodeTexBox.value;
    let newMessage = "";
    for (let index = 0; index < message.length; index++) {
      let newText = String.fromCodePoint(message[index].charCodeAt(0) + 1);
      newMessage += newText;
    }
    decodeTexBox.value = newMessage;
    encodeTexBox.value = "";
    document.getElementsByTagName("button")[1].disabled = false;
  }
  function decodeMessage() {
    let message = decodeTexBox.value;
    let newMessage = "";
    for (let index = 0; index < message.length; index++) {
      let newText = String.fromCodePoint(message[index].charCodeAt(0) - 1);
      newMessage += newText;
    }
    decodeTexBox.value = newMessage;
    document.getElementsByTagName("button")[1].disabled = true;
  }
}
