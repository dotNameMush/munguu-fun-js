function no(){
    changeposx = Math.floor(Math.random() * 201) -100;
    changeposy = Math.floor(Math.random() * 201) -100;
    document.getElementById('no').style.top = changeposy + 'px';
    document.getElementById('no').style.right = changeposx + 'px';
}
function yes(){
    document.getElementById('h1').innerHTML = "I thought so!😂😂😂";
    
}