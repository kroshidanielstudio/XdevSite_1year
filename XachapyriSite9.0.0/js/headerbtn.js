document.getElementById("menu_btn").addEventListener("click", function(){
    document.getElementById("headermobi").classList.add("op")
    document.getElementById("close").classList.add("cl")
})
document.getElementById("close").addEventListener("click", function(){
    document.getElementById("headermobi").classList.remove("op")
    document.getElementById("close").classList.remove("cl")
})