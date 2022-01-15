const colorArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const container = document.querySelector('.container');
const color = document.getElementById('color');
const btn = document.querySelector('.btn');

console.log(color);
const random = (e) => {
    event.preventDefault();
    const arr = [];
    let hexColor = '#';
    for (var i = 0; i < 6; i++) {
        arr.push(colorArr[Math.floor(Math.random() * colorArr.length)]);
    }

    hexColor += arr.join('').toLowerCase();
    container.style.backgroundColor = hexColor;
    color.textContent = hexColor.toUpperCase();
    console.log(hexColor);
}

btn.addEventListener('click', random);