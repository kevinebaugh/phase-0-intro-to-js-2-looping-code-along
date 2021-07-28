const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(recipients, event) {
  let messages = []
  for (let recipient of recipients) {
    messages.push(
      `Thank you, ${recipient}, for the wonderful ${event} gift!`
    )
  }
  return messages
}

function countDown(from) {
  for (let n = from; n >= 0; n--) {
    console.log(n)
  }
}
