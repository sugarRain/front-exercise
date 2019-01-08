window.onload = changeColor;

function changeColor() {
    var ulContainer = document.getElementById("ul-container");
    for (var i = 0; i < 10; i++) {
        var liTag = document.createElement('li');
        liTag.innerText = '这是第' + i + '个';
        if (i % 2 == 0) {
            liTag.style.backgroundColor = "orange"
        }
        else {
            liTag.style.background = 'gray';
        }
        ulContainer.appendChild(liTag)
    }

}
