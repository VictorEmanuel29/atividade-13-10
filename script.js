const curtida = document.querySelector("#quantidadeCurtidas");
const mensagem = document.querySelector("#mensagem");
const btn = document.querySelector("#btnCurtir");

let curtidas = 0;
let curtiu = false;

function curtir() {
    if (curtiu === false){
        curtidas = curtidas + 1;
        curtidas.textContent = curtidas;
        mensagem.textContent = "Você curtiu essa publicação!";
        btn.textContent = "Descurtir";
    }
    else (curtiu == false){
        curtidas = curtidas - 1;
        curtidas.textContent = curtidas;
        mensagem.textContent = "Você ainda não curtiu essa publicação!";
        btn.textContent = "Curtir";
    }
    curtiu = !curtiu;
}

btn.addEventListener("click", curtir);