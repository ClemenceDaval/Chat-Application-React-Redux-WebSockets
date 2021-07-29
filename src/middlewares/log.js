/* eslint-disable max-len */
/*
    Un middleware est une fonction qu'on va donner au store
    Le store s'en servira pour traduire des actions vers des effets (autre qu'une modification de state, pour ça il y a le reducer) par ex : du debug, des requetes ajax, des timers, ...
    L'objet action passera tour à tour dans chaque middleware puis arrivera enfin dans le reducer
    Dans un middleware on a accès à:
    - store : et à ses méthodes getState (lecture du state) et dispatch (émission d'intention)
    - next : la fonction qui dit explicitement si on laisse passer ou non une action, si on n'appelle pas next(action) dans le middleware l'action n'arrive pas au middleware/reducer suivant, si on l'appelle l'action passe au middleware/reducer suivant
    - action : l'objet action, l'intention qu'on a intercepté et qu'on va potentiellement traduire
*/
const log = (store) => (next) => (action) => {
  // on logge le type de l'action
  console.log(action.type);
  // on laisse passer au suivant
  // si on souhaite que l'action ne continue pas sa route vers le reducer
  // il suffit de ne pas appeler next
  next(action);
};

// on exporte notre middleware
export default log;
