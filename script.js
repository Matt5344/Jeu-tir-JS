//selectionner les éléments html
let  container = document.querySelector('.container');
let btn = document.querySelector('.start_btn');
let scoreContainer = document.querySelector('.score');
let timeContainer = document.querySelector('.time');

//quand on clique sur le bouton start une action est réaliser avec 
btn.onclick = function(){
    let score = 0;
    let time = 20;
    container.innerHTML = "";
    //on insere dans container un vide

    //interval pour excuter une fonction dans un interevale de temps
    let interval = setInterval(function showTarget(){
        //création de la cible 
        let target = document.createElement('img');
        //créer l'élément image
        target.id="target";
        //insérer l'image dans l'élément que l'on viens de créer
        target.src="mushroom.png";
        //mettre l'élément image dans le container
        container.appendChild(target);
        //positionner le target dans le container
        //utilisation de math.random pour une position aléatoire a chaque fois
        target.style.top = Math.random() * (500 - target.offsetHeight) + 'px'; 
        // 500 pour au dessus = la hauteur et 600 la largeur
        // le offsetheight permet de dire que l'on ne veut pas qu'il apparaisse en dehors du container
        target.style.left = Math.random() * (600 - target.offsetWidth) + 'px';

        //Faire disparaitre la cible toute les 2 secondes
        setTimeout(function(){
                target.remove();
        }, 2000)

        //quand on clique sur la cible on veut que le score augmente et qu'elle disparaisse
        target.onclick = function(){
            score += 1 ;
            target.style.display = 'none';
        }
        time-= 1;

        //afficher les informations
        scoreContainer.innerHTML = `Score : ${score} `
        timeContainer.innerHTML = `Temps : ${time} `

        //fin du jeu quand le temps est écoulé
        if(time ==0){
        clearInterval(interval);
        container.innerHTML = "La partie est terminée"
        }
    }, 1000);
}