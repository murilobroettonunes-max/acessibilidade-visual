function mudarTema() {
    document.body.classList.toggle("dark");
}

function mudarTexto() {
    const texto = document.getElementById("texto");

    const frases = [
        "A IA pode aprender com dados e melhorar sozinha.",
        "Ela já é usada em carros autônomos.",
        "IA ajuda médicos a detectar doenças.",
        "Ela recomenda vídeos e músicas automaticamente."
    ];

    const aleatorio = Math.floor(Math.random() * frases.length);
    texto.innerText = frases[aleatorio];
}