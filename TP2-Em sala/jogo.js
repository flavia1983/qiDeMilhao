var passos = 0;
let dadoEl = document.querySelector('.faceDado');
dadoEl.addEventListener('click', function() {

    alert('Teste de função');

    var sorteio = Math.floor(Math.random() * 6 + 1);

    switch (sorteio) {
        case 1:
            passos = 1;
            document.getElementById("face").src = "https://raw.githubusercontent.com/professorjosedeassis/javascript/master/aulas/dado/face1.png";
            break;

        case 2:
            passos = 2;
            document.getElementById("face").src = "https://raw.githubusercontent.com/professorjosedeassis/javascript/master/aulas/dado/face2.png";
            break;

        case 3:
            passos = 3;
            document.getElementById("face").src = "https://raw.githubusercontent.com/professorjosedeassis/javascript/master/aulas/dado/face3.png";
            break;

        case 4:
            passos = 4;
            document.getElementById("face").src = "https://raw.githubusercontent.com/professorjosedeassis/javascript/master/aulas/dado/face4.png";
            break;

        case 5:
            passos = 5;
            document.getElementById("face").src = "https://raw.githubusercontent.com/professorjosedeassis/javascript/master/aulas/dado/face5.png";
            break;

        default:
            passos = 6;
            document.getElementById("face").src = "https://raw.githubusercontent.com/professorjosedeassis/javascript/master/aulas/dado/face6.png";
            break;
    }
});

