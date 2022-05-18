var btn = document.createElement('button');
btn.onclick = switches;
btn.style.margin = '10px';
btn.innerHTML = 'turn on';
document.body.appendChild(btn);

// schijf hier tussen je code



// schijf hier tussen je code
var click = true
function switches(){
    if (click == true){
        document.body.style.backgroundColor = "yellow";
        btn.innerHTML = "turn off!";
        console.log("light is on!")
        click = false
    } 
    else if (click == false){
        document.body.style.backgroundColor = "black";
        btn.innerHTML = "turn on!";
        console.log("light is off!")
        click = true
    }
}