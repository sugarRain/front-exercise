// window.onload = change;

function change() {
    var vertifybtn = document.getElementById("vertifycode");
    vertifybtn.innerHTML = getVertifyCode(4);
    vertifybtn.onclick = change;
}

function getVertifyCode(count) {
    var numbers = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var result = "";
    for (var i = 0; i < count; i++) {
        var index = Math.floor(Math.random()*numbers.length);
        result+=numbers.charAt(index);
    }
    return result;
}