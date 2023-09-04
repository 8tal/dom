// 1.
const firstElement = document.body.firstElementChild;
firstElement.textContent = "Rick Astley - Never Gonna Give You Up";
//obtenir tous les elements avec la class couplet qui sont transferer dans la variable couplet
var couplet = document.querySelectorAll(".couplet");


for (let i = 0; i < couplet.length; i++) {
 let bloc = couplet[i]
    console.log(bloc.textContent);
    //suppression du premier fils (node)et le retour a la ligne
    bloc.firstChild.remove();
    bloc.firstChild.remove("<br/>");
}
// Sélectionnez tous les éléments ayant la classe "refrain"
const newRefrain = document.querySelectorAll(".refrain");

// Parcourez chaque élément avec la classe "refrain"
newRefrain.forEach((element) => {
    // Récupérez le texte de l'élément
    const text = element.textContent;
    console.log(text);
    // Divisez le texte en lignes en utilisant '\n' comme séparateur
    const div = text.split('\n');
    console.log(div);
    // Créez un tableau pour stocker les lignes uniques
    const ligneUnique = [];

    // Parcourez les lignes et ajoutez-les au tableau uniqueLines uniquement si elles ne sont pas déjà présentes
    div.forEach((line) => {
        if (!ligneUnique.includes(line)) {
            ligneUnique.push(line);
            
           
        }
        console.log(ligneUnique);
    });
    // On vide le contenu de l'élément (NewRefrain[0] en suite de NewRefrain[1])
    element.textContent = ''
    // parcoure du tableau ligneUnique
    for (let i = 0; i < ligneUnique.length; i++) {
            // a chaque indice du tableau on rajoute le contenu à l'element avec un retour à la ligne
            element.innerHTML += `${ligneUnique[i]} <br />`;
            
        }
    
/* 
ligneUnique.forEach(unique => {
    element.textContent = `${ligneUnique} <br />`;
});
 */
    // Mettez à jour le contenu de l'élément avec les lignes uniques
   
    console.log(element);
});







const ThirdElement = document.getElementById("erreur");
ThirdElement.remove();
//cree un element footerbv     
const footerElement = document.createElement("footer");
footerElement.textContent = "© Copyright 2023 - Taoufik";
const BodyElement = document.body;
BodyElement.appendChild(footerElement);

//suppression des occurrances en doubles


// 2.

// 3.

// 4.

// 5.

