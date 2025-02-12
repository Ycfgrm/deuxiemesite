document.addEventListener("DOMContentLoaded", () => {
    // Sélectionne tous les menus déroulants en utilisant 'getElementsByClassName'different de getElementbyId car une classe peut etre utiliser plusieurs fois tandis que l'id est unique 
    let menusDeroulants = document.getElementsByClassName("deroulant");

    // boucle for pour chaque menu deroulant 
    for (let i = 0; i < menusDeroulants.length; i++) {
        let menu = menusDeroulants[i];
        
        // Trouve le sous-menu à l'intérieur de chaque menu
        let sousMenu = menu.getElementsByClassName("sous-menu")[0]; // Récupère le premier élément avec cette classe

        // Affiche le sous-menu quand la souris entre
        menu.onmouseenter = () => sousMenu.style.display = "block";

        // Cache le sous-menu quand la souris sort
        menu.onmouseleave = () => sousMenu.style.display = "none";
    }
});


