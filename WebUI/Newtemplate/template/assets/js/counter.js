var decreaseButton = document.getElementById("decrease");
var increaseButton = document.getElementById("increase");

decreaseButton.addEventListener("click", () => {
    var value = parseInt(document.querySelector('[data-id="number"]').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.querySelector('[data-id="number"]').value = value;
});

increaseButton.addEventListener("click", () => {
    var value = parseInt(document.querySelector('[data-id="number"]').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.querySelector('[data-id="number"]').value = value;
});
