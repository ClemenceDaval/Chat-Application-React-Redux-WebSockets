import axios from 'axios';

import { LOGIN, saveUser } from 'src/actions';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const { email, password } = store.getState();
      axios
        .post(
          'http://localhost:3001/login',
          {
            // équivalent à :
            // email: email,
            // si on veut stocker une variable dans la propriété d'un objet
            // qui porte le même nom (la propriété, pas l'objet)
            // on peut utiliser la notation shorthand property :
            email,
            password,
          },
        )
        .then((response) => {
          // on emmet l'intention : je veux sauvegarder cet utilisateur
          store.dispatch(saveUser(response.data.pseudo));
        }).catch((error) => {
          console.error(error);
        });

      // puis on décide si on la laisse filer ou si on la bloque
      next(action);
      break;
    }
    default:
      console.log('auth');
      next(action);
  }
};
