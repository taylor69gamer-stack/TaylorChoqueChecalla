console.log("Hola Mundo");
alert("Hola Mundo, esto es una alerta")

function triste(){
    document.getElementById('carita').src='Imagenes/caritaTriste 02.png';
    alert("Por que tan triste mano");
}
function feliz(){
    document.getElementById('carita').src='Imagenes/caritaFelíz 01.png';
}
function cambiarColor(){
    document.getElementById('MENÚ').src.color='#E8BEAC';
}
function cambiarLogo(){
    document.getElementById('logo').src='Imagenes/Logo Inicial.JPG';
}
function cambiarFondo(){
    document.getElementById('MENÚ').style.background='#524604';
}
function cambiarTexto(){
    document.getElementById('Subtitulo').textContent="YA LE SE AL 35";
}