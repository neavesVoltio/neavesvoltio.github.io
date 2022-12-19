let productosTab = document.getElementById("productosTab")
let reservasTab = document.getElementById("reservasTab")
let contactoTab = document.getElementById("contactoTab")
let productTabSection = document.getElementById("productTabSection")
let reservasSection = document.getElementById("reservasSection")


productosTab.addEventListener("click", function () {
    productosTab.className = "nav-link active"
    reservasTab.className = "nav-link"
    contactoTab.className = "nav-link"
    productTabSection.style.display = "block"
    reservasSection.style.display = "none"
    
})

reservasTab.addEventListener("click", function () {
    productosTab.className = "nav-link"
    reservasTab.className = "nav-link active"
    contactoTab.className = "nav-link"
    productTabSection.style.display = "none"
    reservasSection.style.display = "block"
})

contactoTab.addEventListener("click", function () {
    productosTab.className = "nav-link"
    reservasTab.className = "nav-link"
    contactoTab.className = "nav-link active"
    productTabSection.style.display = "none"
    reservasSection.style.display = "none"
})