/* Pegando elementos */

const body = document.querySelector("body");

const header = document.querySelector("header");
header.className = "cabecalho"

const divCabecalho = document.querySelector(".div-img-cabecalho");
divCabecalho.className = "div-img-cabecalho";

const figureCabecalho = document.querySelector(".img-logo");
figureCabecalho.className = "img-logo";

const nav = document.querySelector(".menu-de-navegacao");
nav.className = "menu-de-navegacao";

const listaMenu = document.querySelectorAll(".categoria-menu");

const main = document.querySelector("main");

const sectionVitrine = document.querySelector(".vitrine");

const button = document.querySelector(".button");

const sectionSecudaria = document.querySelector(".secao-secudaria");

const caixaDetexto = document.querySelector(".caixa-de-texto");

const divCorpoCarrinho = document.querySelector(".corpo-carrinho");

const ulCorpoCarrinho = document.createElement("ul");
ulCorpoCarrinho.className = "ul-carrinho"
divCorpoCarrinho.appendChild(ulCorpoCarrinho)

const divTotalCarrinho = document.querySelector(".total-carrinho");

const tagPQuantCarrinho = document.querySelector("#quant");

const tagPTotalCarrinho = document.querySelector("#valor");

const arrProd = document.querySelectorAll(".ul-carrinho");

const preco = document.querySelector(".preco-carrinho");


function card(produto) {

    const id            = produto.id;
    const img           = produto.img;
    const nameItem      = produto.nameItem;
    const description   = produto.description;
    const value         = produto.value;
    const addCart       = produto.addCart;
    const tag           = produto.tag;

    let divVitrine  = document.createElement("div");
    let tagUl       = document.createElement("ul");
    let tagLi       = document.createElement("li");
    let tagFigure   = document.createElement("figure");
    let tagImg      = document.createElement("img");
    let tagDivDesc  = document.createElement("div");
    let tagDiv1     = document.createElement("div");
    let tagDiv2     = document.createElement("div");
    let tagDiv3     = document.createElement("div");
    let tagDiv4     = document.createElement("div");
    let tagP1       = document.createElement("p");
    let tagH3       = document.createElement("h3");
    let tagP2       = document.createElement("p");
    let tagP3       = document.createElement("p");
    let tagButton   = document.createElement("button");

    divVitrine.className    = "div-vitrine"
    tagUl.className         = "card-ul"
    tagLi.className         = "card"
    tagImg.className        = "img-card"
    tagDivDesc.className    = "informacoes-card"
    tagDiv1.className       = "div-cat"
    tagDiv2.className       = "div-titulo"
    tagDiv3.className       = "div-desc"
    tagDiv4.className       = "div-preco"
    tagP1.className         = "categoria"
    tagH3.className         = "titulo-card"
    tagP2.className         = "descricao-card"
    tagP3.className         = "preco"
    tagButton.className     = "button"

    tagImg.src          = img
    tagImg.alt          = "Imagem Produto"
    tagP1.innerText     = tag
    tagH3.innerText     = nameItem
    tagP2.innerText     = description
    tagP3.innerHTML     = `<strong>R$ ${value},00</strong>`
    tagButton.innerText = "Adicionar ao carrinho"

    divVitrine.appendChild(tagUl)
    tagUl.appendChild(tagLi)
    tagLi.appendChild(tagFigure)
    tagLi.appendChild(tagDivDesc)
    tagFigure.appendChild(tagImg)
    tagDivDesc.appendChild(tagDiv1)
    tagDivDesc.appendChild(tagDiv2)
    tagDivDesc.appendChild(tagDiv3)
    tagDivDesc.appendChild(tagDiv4)
    tagDiv1.appendChild(tagP1)
    tagDiv2.appendChild(tagH3)
    tagDiv3.appendChild(tagP2)
    tagDiv4.appendChild(tagP3)
    tagDivDesc.appendChild(tagButton)

    return divVitrine

}

function listarProdutosVitrine(lista) {

    for(let i = 0; i < lista.length; i++) {

        let produto = lista[i]
        let criaCard = card(produto)
        criaCard.id = i
        sectionVitrine.appendChild(criaCard)

    }
}

listarProdutosVitrine(data)

function listarProdutosVitrineNav(lista,categoria) {

    for(let i = 0; i < lista.length; i++) {

        if(lista[i].tag[0] == categoria) {
            let produto = lista[i]
            let criaCard = card(produto)
            criaCard.id = i
            sectionVitrine2.appendChild(criaCard)
        }
    }
}

function cardCarrinho(produto) {

    const img           = produto.img;
    const nameItem      = produto.nameItem;
    const value         = produto.value;

    let tagUl       = document.createElement("ul");
    let tagLi       = document.createElement("li");
    let tagFigure   = document.createElement("figure");
    let tagImg      = document.createElement("img");
    let tagDiv      = document.createElement("div");
    let tagH3       = document.createElement("h3");
    let tagP        = document.createElement("p");
    let tagButton   = document.createElement("button");

    tagLi.className     = "card-carrinho";
    tagFigure.className = "figure-img-carrinho";
    tagImg.className    = "img-card-carrinho";
    tagDiv.className    = "div-descricao-product-carrinho";
    tagH3.className     = "titulo-product-carrinho";
    tagP.className      = "preco-carrinho";
    tagButton.className = "button-removerPedido";

    tagImg.src          = img;
    tagImg.alt          = "Imagem Produto";
    tagH3.innerText     = nameItem;
    tagP.innerText      = `R$ ${value},00`
    tagButton.innerText = "Remover produto"

    tagLi.appendChild(tagFigure)
    tagLi.appendChild(tagDiv)
    tagFigure.appendChild(tagImg)
    tagDiv.appendChild(tagH3)
    tagDiv.appendChild(tagP)
    tagDiv.appendChild(tagButton)

    return tagLi
}

cardCarrinho(data)

function listarCardCarrinho(event, lista) {

    for(let i = 0; i < lista.length; i++) {
        if(event.id == lista[i].id) {
            let produtoEscolhido = lista[i]
            let criaCardCarrinho = cardCarrinho(produtoEscolhido)
            criaCardCarrinho.id = i
            return ulCorpoCarrinho.appendChild(criaCardCarrinho)
        }  
    }
}

let produto = 0;
let arrProdEscolhido = [];
let sectionVitrine2 = 0

nav.addEventListener("click", function(event) {
    
    sectionVitrine.remove()

    if(event.target.id === "acessorios") {
        produto = "Acessórios";
        sectionVitrine2 = document.createElement("section")
        main.appendChild(sectionVitrine2)
        sectionVitrine2.className = "vitrine"
        listarProdutosVitrineNav(data, produto)
        
    }else if(event.target.id === "camisetas") {
        produto = "Camisetas";
        sectionVitrine.remove()
        sectionVitrine2.remove()
        sectionVitrine2 = document.createElement("section")
        main.appendChild(sectionVitrine2)
        sectionVitrine2.className = "vitrine"
        listarProdutosVitrineNav(data, produto)
        
    }else if(event.target.id === "calcados") {
        produto = "Calçados";
        sectionVitrine.remove()
        sectionVitrine2.remove()
        sectionVitrine2 = document.createElement("section")
        main.appendChild(sectionVitrine2)
        sectionVitrine2.className = "vitrine"
        listarProdutosVitrineNav(data, produto)
    }else if(event.target.parentElement.parentElement === "todos") {
        console.log('oi')
        /* sectionVitrine.remove()
        sectionVitrine2.remove()
        listarProdutosVitrine(data) */
    }
    
});

sectionVitrine.addEventListener("click", function(event) {
   
    if(event.target.className === "button") {

        produto = event.target.parentElement.parentElement.parentElement.parentElement;

        listarCardCarrinho(produto,data)
        arrProdEscolhido.push(produto.id)
    }

    somarTotal()
    
});

sectionVitrine.addEventListener("click", function(event) {

    /* if(event.target.className === "button") {

        produto = event.target.parentElement.parentElement.parentElement.parentElement;
        console.log(event)
        listarCardCarrinho(produto,data)
        arrProdEscolhido.push(produto.id)
    } */

    somarTotal()
    
});

let precoTotal = 0;


function somarTotal() {

        for(let i = 0; i < arrProdEscolhido.length; i++){

            for(let j = 0; j < data.length; j++) {

                if(arrProdEscolhido[i] == data[j].id) {

                    precoTotal += data[j].value
                    tagPTotalCarrinho.innerText = `R$ ${precoTotal},00`
                    tagPQuantCarrinho.innerText = ulCorpoCarrinho.childElementCount
                }
            }
        }
}

function subtraiTotal() {

    let excluido = 0
    let idProdExcluido = 0
    let diminuir = 0

    for(let i = 0; i < arrProdEscolhido.length; i++){

        if(produto.id == arrProdEscolhido[i]) {

            excluido = arrProdEscolhido.splice(i,1)
            idProdExcluido = excluido[0]
        }
    }
            
    for(let j = 0; j < data.length; j++) {
                
        if(idProdExcluido == data[j].id) {
            diminuir = data[j].value
            precoTotal -= diminuir
            tagPTotalCarrinho.innerText = `R$ ${precoTotal},00`
        }
    }

}

const arrayCategoriasTotal = []

function pegaCategorias(lista) {

    for(let i = 0; i < lista.length; i++) {

        for(const j in lista[i]) {
            
            if(j == "tag") {
                let categorias = lista[i].tag[0]
                arrayCategoriasTotal.push(categorias)
            }
        }
    }
}

pegaCategorias(data)

sectionSecudaria.addEventListener("click", function(event) {
   
    if(event.target.className === "button-removerPedido") {

        produto = event.target.parentElement.parentElement;

        produto.remove()
        
    }

    subtraiTotal()


    if(event.target.id === "button-pesquisa") {

        produto = event.target.parentElement.parentElement;

        event.preventDefault()

        const resultName = caixaDetexto.value

        sectionVitrine.remove()
        
        card(produto)




        function listarProdutosVitrine(lista) {

            for(let i = 0; i < lista.length; i++) {

                if(resultName === lista[i].nameItem) {
            
                    let criaCard = card(data[i])
                    criaCard.id = i
                    let secVitrine  = document.createElement("section");
                    secVitrine.className    = "vitrine"
                    secVitrine.id   = "1"
                    secVitrine.appendChild(criaCard)
                }else{
                    console.log("produto não encontrado")
                }
            }
                        
    }

    listarProdutosVitrine(data)
}
});



