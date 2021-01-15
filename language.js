window.onload = () => {
    cambiarAEspaniol();
    document.getElementById('cambiarAEspaniol').onclick = cambiarAEspaniol;
    document.getElementById('cambiarAIngles').onclick = cambiarAIngles;
}

function obtainAllElements(){
    const elements = [];
    Array.from(document.querySelectorAll('.esp')).forEach( v => {
        elements.push(v);
    })
    Array.from(document.querySelectorAll('.eng')).forEach( v => {
        elements.push(v);
    })
    return elements;
}

function cambiarAEspaniol(){
    const elements = obtainAllElements();
    elements.forEach(v => {
        v.style.display = v.classList.contains('esp') ? 'block' : 'none';
    })
}

function cambiarAIngles(){
    const elements = obtainAllElements();
    elements.forEach(v => {
        v.style.display = v.classList.contains('eng') ? 'block' : 'none';
    })
}