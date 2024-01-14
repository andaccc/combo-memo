import React from 'react';
import { ReactHTMLElement } from 'react';

// https://stackoverflow.com/questions/76396203/cart-and-context-api
// https://deku.posstree.com/react/context-api/#consumer


export const Characters = {
  "ggst": {
    "ram": "ram",
    "elp": "elp"
  },
}


export const ProfileContext = React.createContext({
  game: '',
  character: Characters.ggst.ram,
  changeCharacter: (character: string) => {},
  combos: [],
});

export const ProfileProvider = ({children}: any) => {
  const [game, setGame] = React.useState('ggst');
  const [character, setCharacter] = React.useState('ram');
  const [combos, setCombos] = React.useState([]);

  const changeCharacter = (character: string) => {
    setCharacter(character);
  }

  return (
    <ProfileContext.Provider value={{ game, character, changeCharacter, combos }}>
      {children}
    </ProfileContext.Provider>
  );
}