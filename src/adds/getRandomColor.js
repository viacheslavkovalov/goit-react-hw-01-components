function getRandomColor() {
  var color = Math.floor(Math.random() * 16777216).toString(16);
  while (color.length < 6) {
    color = '0' + color;
  }
  return '#000000'.slice(0, -color.length) + color;
}

export default getRandomColor;
