const box = document.querySelector('.box');

// Ajouter un écouteur d'événement pour la pression d'une touche
document.addEventListener('keydown', (event) => {
    // Vérifier si la touche "R" est pressée (vous pouvez changer la touche si nécessaire)
    if (event.key.toLowerCase() === 'r') {
        // Ajouter la classe de rotation
        box.classList.add('rotate');

        // Supprimer la classe après la fin de l'animation pour pouvoir la rejouer
        box.addEventListener('animationend', () => {
            box.classList.remove('rotate');
        }, { once: true }); // { once: true } garantit que l'événement est supprimé après son déclenchement
    }
});