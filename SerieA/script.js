const listaImagens = document.getElementsByClassName('image');
const index = document.getElementById('index');
const imagem1 = document.getElementById('img1');
let cont = 1;
let percentual = 0;
let time = 5000;

index.innerHTML = `${cont}/${listaImagens.length}`;

const btnAnterior = document.getElementById('btnAnterior');
const btnPosterior = document.getElementById('btnPosterior');

btnAnterior.addEventListener('click', () => {
    if(cont > 1){
        cont--;
        imagem1.style.marginLeft = `${percentual += 100}%`;
    } else {
        cont = listaImagens.length;
        percentual = -100 * (listaImagens.length - 1)
        imagem1.style.marginLeft = `${percentual}%`;
    }
    index.innerHTML = `${cont}/${listaImagens.length}`;

    showTeamName()

})

btnPosterior.addEventListener('click', () => {
    if(cont < listaImagens.length){
        cont++;
        imagem1.style.marginLeft = `${percentual -= 100}%`;        
    } else {
        cont = 1;
        percentual = 0;
        imagem1.style.marginLeft = `${percentual}%`;
    }
    index.innerHTML = `${cont}/${listaImagens.length}`;
    
    showTeamName()
    
})

document.addEventListener('keydown', (e)=>{
    if(e.keyCode === 37){
        btnAnterior.click();
        btnAnterior.setAttribute('style', 'border-style: inset')
    } else if(e.keyCode === 39){
        btnPosterior.click();
        btnPosterior.setAttribute('style', 'border-style: inset')
    }
})

document.addEventListener('keyup', (e)=>{
    if(e.keyCode === 37){
        btnAnterior.removeAttribute('style');
    } else if(e.keyCode === 39){
        btnPosterior.removeAttribute('style');
    }
})

setInterval(() => {
    btnPosterior.click();
}, time);

let team = '';
let title = '';
let alt = '';
const teamName = document.getElementById('teamName');

const showTeamName = ()=>{
        switch(cont){
            case 1:
                team = 'Fiorentina';
                teamName.style.color = 'blueviolet';
                break;
            case 2:
                team = 'Inter';
                teamName.style.color = 'darblue';
                break;
            case 3:
                team = 'Juventus';
                teamName.style.color = 'white'
                break;
            case 4:
                team = 'Milan';
                teamName.style.color = '#9f1b1b'
                break;
            case 5:
                team = 'Napoli';
                teamName.style.color = 'aqua';
                break;
            }
        teamName.innerText = team;
    }

let initialValue = 0;
for(let imagem of listaImagens){
    imagem.ondragstart = (e) => {
        initialValue = e.clientX;
    }
    imagem.ondragend = (e)=>{
        let mousemove_value = e.clientX
        if(initialValue < mousemove_value){
            initialValue = mousemove_value;
            btnAnterior.click();
        } else {
            initialValue = mousemove_value;
            btnPosterior.click();
        }              
    }
}
