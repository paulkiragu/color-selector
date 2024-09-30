document.addEventListener('DOMContentLoaded', function() {
    let colorInput = document.getElementById('name');
    let colorDiv = document.getElementById('color');

    colorInput.addEventListener('input', function() {
        let colorName = colorInput.value;
        colorDiv.style.backgroundColor = colorName;
    });
});
