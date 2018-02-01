document.addEventListener("DOMContentLoaded", function() {
    var examples = document.getElementsByClassName('ex');
    for (var i = 0; i < examples.length; i++) {
        examples[i].style.background = getRandomColor();
        examples[i].style.minHeight = "10px";
    }


});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}
