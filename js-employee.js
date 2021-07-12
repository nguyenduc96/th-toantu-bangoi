function mesSage(){
    let message = document.getElementById('login').value;
    let text = (message== 'Employee')?"Hello":(message=='Director')?"Greetings":(message=="")?"No login":"";
    document.getElementById('output').innerHTML= text;
}