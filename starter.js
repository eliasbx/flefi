function passName1() {
    var namePlayer1 = document.getElementById('key-1').value;

    if (namePlayer1.length > 8) {
        namePlayer1 = namePlayer1.substr(0, 8);
    }

    if(namePlayer1.length <= 0 && namePlayer1 === '') {
        namePlayer1 = 'player 1';
    }

    if (namePlayer1 !== '') {
        localStorage.setItem('textvalue-1', namePlayer1);
        return false;
    }
}

function passName2() {
    var namePlayer2 = document.getElementById('key-2').value;

    if (namePlayer2.length > 8) {
        namePlayer2 = namePlayer2.substr(0, 8);
    }

        if (namePlayer2.length <= 0 && namePlayer2 === '') {
            namePlayer2 = 'player 2';
        }
        if (namePlayer2 !== '') {
            localStorage.setItem('textvalue-2', namePlayer2);
            return false;
        }
    }


function chalangePlayer_1() {
    var chalangePlayer1 = document.getElementById('chalange-1').value;

    // if (chalangePlayer1.length > 50) {
    //     chalangePlayer1 = chalangePlayer1.substr(0, 8);
    // }

    if (chalangePlayer1.length <= 0 && chalangePlayer1 === '') {
        chalangePlayer1 = 'Chalange';
    }
    if (chalangePlayer1 !== '') {
        localStorage.setItem('chalange-text-1', chalangePlayer1);
        return false;
    }
}

function chalangePlayer_2() {
    var chalangePlayer2 = document.getElementById('chalange-2').value;

    // if (chalangePlayer2.length > 50) {
    //     chalangePlayer2 = chalangePlayer2.substr(0, 8);
    // }

    if (chalangePlayer2.length <= 0 && chalangePlayer2 === '') {
        chalangePlayer2 = 'Chalange';
    }
    if (chalangePlayer2 !== '') {
        localStorage.setItem('chalange-text-2', chalangePlayer2);
        return false;
    }
}

