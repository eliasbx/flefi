function passName1() {
    var namePlayer1 = document.getElementById('key-1').value;
    if(namePlayer1 === '') {
        alert('Please put in your name');
    }
    if (namePlayer1 !== '') {
        localStorage.setItem('textvalue-1', namePlayer1);
        return false;
    }
}

function passName2() {
    var namePlayer2 = document.getElementById('key-2').value;
    if(namePlayer2 === '') {
        alert('Please put in your name');
    }
    if (namePlayer2 !== '') {
        localStorage.setItem('textvalue-2', namePlayer2);
        return false;
    }
}