let prato_selecionado; /*let prato_selecionado = undefined;*/
function coloca_borda_verde_prato(botao) {
    const selecionar_prato = document.querySelector(".agrupa_prato_principal .borda_verde");
        if (selecionar_prato !== null) {
            selecionar_prato.classList.toggle("borda_verde");
        }

        botao.classList.add("borda_verde");

        const selecionar_simbolo = document.querySelector(".agrupa_prato_principal .simbolo");
        if (selecionar_simbolo !== null) {
            selecionar_simbolo.classList.toggle("simbolo");
        }
        botao.innerHTML += '<img class = "simbolo" src ="./imagens/simbolo.png" />'
        
        prato_selecionado = botao.innerHTML;
        habilitar()
}

let bebida_selecionada;
function coloca_borda_verde_bebida(botao) {
    const selecionar_bebida = document.querySelector(".agrupa_bebida .borda_verde");
        if (selecionar_bebida !== null) {
            selecionar_bebida.classList.toggle("borda_verde");
        }

        botao.classList.add("borda_verde");

        const selecionar_simbolo = document.querySelector(".agrupa_bebida .simbolo");
        if (selecionar_simbolo !== null) {
            selecionar_simbolo.classList.toggle("simbolo");
        }
        botao.innerHTML += '<img class = "simbolo" src ="./imagens/simbolo.png" />'

        
        bebida_selecionada = botao.innerHTML;
        habilitar()    
}

let sobremesa_selecionada;
function coloca_borda_verde_sobremesa(botao) {
    const selecionar_sobremesa = document.querySelector(".agrupa_sobremesa .borda_verde");
        if (selecionar_sobremesa !== null) {
            selecionar_sobremesa.classList.toggle("borda_verde");
        }

        botao.classList.add("borda_verde");

        const selecionar_simbolo = document.querySelector(".agrupa_sobremesa .simbolo");
        if (selecionar_simbolo !== null) {
            selecionar_simbolo.classList.toggle("simbolo");
        }
        botao.innerHTML += '<img class = "simbolo" src ="./imagens/simbolo.png" />'


        sobremesa_selecionada = botao.innerHTML;
        habilitar()    
}

/*função que serve para verificar se um item de cada classe foi selecionado e está pronto para finalizar o pedido*/

function finalizar_pedido(pedido) {
    prompt("Digite seu nome");
    alert("OIII");
    const check_prato_principal = document.querySelector('.agrupa_prato_principal .borda_verde');
    const check_bebida = document.querySelector('.agrupa_bebida .borda_verde');
    const check_sobremesa = document.querySelector('.agrupa_sobremesa .borda_verde');
    
    /*condição para o botão ficar verde*/
    if(check_prato_principal && check_bebida && check_sobremesa) {
        const fundoverde = document.querySelector(".fundo_verde");
        if(fundoverde !== null) {
            fundoverde.classList.toggle("fundo_verde");
        }
        pedido.classList.toggle("fundo_verde");

        const texto = document.querySelector(".texto_pedido");
        texto.innerHTML = "Fechar pedido";
    }
}

/*função que habilita o botão de finalizar pedido caso selecione um prato principal, uma bebida e uma sobremesa*/

function habilitar() {
    if(prato_selecionado!==undefined) {
        if(bebida_selecionada!==undefined) {
            if(sobremesa_selecionada!==undefined) {
                const botao_continuar = document.querySelector('.barra_pedido_interno');
                botao_continuar.classList.add("fundo_verde");
                const texto = document.querySelector(".texto_pedido");
                texto.innerHTML = "Fechar pedido";
            }
        }
    }
}

function chamawpp() {

    const mensagem_wpp = `Olá, gostaria de fazer o pedido:
    \n - Prato: Frango Yin Yang
    \n - Bebida: Coquinha Gelada
    \n - Sobremesa: Pudim
    \n Total: R$ 27.70`;

    const link = encodeURIComponent(mensagem_wpp);
    window.open("https://wa.me/5581991858698?text=" + link);
}
