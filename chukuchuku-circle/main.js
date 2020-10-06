
const line = document.getElementsByTagName('span');
const box = document.querySelector('.wrapper')
const array = [...Array(40)];

const chukuchuku = () => {
    const container = array.map((arr, i) => {
        const number = i + 1;
        if (number <= 20) {
            if (number <= 10) {
                return `<span style='transform:translate(${120 + (number * 12)}px, ${number * 12}px) rotate(${90 + (number * 9)}deg) '></span>`
            } else {
                return `<span style='transform:translate(${120 + ((20 - number) * 12)}px, ${number * 12}px) rotate(${90 + (number * 9)}deg) '></span>`
            }
        } else {
            if (number <= 30) {
                return `<span style='transform:translate(${(30 - number) * 12}px, ${240 - ((number - 20) * 12)}px) rotate(${90 + (number * 9)}deg)'></span>`
            } else {
                return `<span style='transform:translate(${(number - 30) * 12}px, ${240 - ((number - 20) * 12)}px) rotate(${90 + (number * 9)}deg)'></span>`

            }
        }
    }).join('');

    box.innerHTML = container;
}

chukuchuku()