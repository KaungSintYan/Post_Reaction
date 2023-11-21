var like = document.getElementById('like');
var love = document.getElementById('love');
var angry = document.getElementById('angry');

function reaction(i) {
    switch (i) {
        case 1: like.innerHTML++; break;
        case 2: love.innerHTML++; break;
        case 3: angry.innerHTML++; break;
    }
}