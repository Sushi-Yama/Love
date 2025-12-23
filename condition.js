const Runbtn = () =>{
    let x = Math.random()*window.innerWidth
    let y = Math.random()*window.innerHeight
    var btn = document.getElementById("btn-no")
    btn.style.position = "absolute"
    btn.style.left = x + "px"
    btn.style.top = y + "px"
}