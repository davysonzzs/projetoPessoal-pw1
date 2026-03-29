//mesma coisa aqui, preferencia criar outros arquivos, mas como é algo pequeno talvez nao precise

//função de lavar para outra aba
function irPara(caminhoDaPagina){
    window.location.href = caminhoDaPagina
}

//função para abrir divs (global)
function abrirForm(idDaDiv){
    const div = document.getElementById(idDaDiv)
    div.style.display = "block"
}

//scrolar para o forms quando aprecer (somentes forms)
document.getElementById("btnForms").addEventListener("click", () =>{
    document.getElementById("forms").scrollIntoView({
        behavior: "smooth"
    })
})
