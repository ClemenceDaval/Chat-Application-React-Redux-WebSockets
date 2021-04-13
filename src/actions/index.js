export const FILL_OUT_INPUT = 'FILL_OUT_INPUT';
export const CHANGE_FIRST_COLOR = 'CHANGE_FIRST_COLOR';
export const CHANGE_LAST_COLOR = 'CHANGE_LAST_COLOR';

// Notre action creator changeDirection a besoin d'être configurable
// afin qu'il gérèe l'objet action de type CHANGE_DIRECTION
// embarquant l'information : 'dans quelle direction aller'
// cette information sera stockée dans la propriété newDirection de l'objet action
// à créer.

export const fillOutInput = (text) => (
  {
    type: FILL_OUT_INPUT,
    newMessage: text,
  }
);
