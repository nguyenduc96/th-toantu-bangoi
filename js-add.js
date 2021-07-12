function hienthi(){
    let a = parseInt(document.getElementById('innumber1').value);
    let b = parseInt(document.getElementById('innumber2').value);
    let text= ( a + b) < 4 ? 'Below':'Over';
    document.getElementById('output').innerHTML = text;
    // console.log(text);
}
