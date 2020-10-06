const input = document.querySelector(".wrapper-input input");
const button = document.querySelector(".wrapper-input button");
const containerEl = document.querySelector(".container");

button.addEventListener("click", handleGoto);

function handleGoto() {
  //   window.location.href = `#${input.value}`;
  const element = document.getElementById(`${input.value}`);
  console.log(element);
  containerEl.scrollTo({
    left: 0,
    top: element.offsetTop - 200,
    behavior: "smooth"
  });
}
