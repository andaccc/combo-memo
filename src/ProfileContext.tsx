import React from 'react';

// https://stackoverflow.com/questions/76396203/cart-and-context-api
// https://deku.posstree.com/react/context-api/#consumer


export type combo = string[]

export const Characters = {
  "ggst": {
    "ram": "ram",
    "elp": "elp"
  },
}


export const ProfileContext = React.createContext({
  game: '',
  character: Characters.ggst.ram,
  changeCharacter: (char: string) => {},
  comboList: [],
  addCombo: (combo: combo) => {},
  deleteCombo: (index: number) => {},
});

export const ProfileProvider = ({children}: any) => {
  const [game, setGame] = React.useState('ggst');
  const [character, setCharacter] = React.useState('ram');
  const [comboList, setComboList] = React.useState([]);

  const changeCharacter = (character: string) => {
    setCharacter(character);
  }

  const addCombo = (combo: combo) => {
    setComboList((prevCombos) => [...prevCombos, combo]);
  }

  const deleteCombo = (index: number) => {
    setComboList((prevCombos) => [...prevCombos.slice(0, index), ...prevCombos.slice(index + 1)]);
  }

  return (
    <ProfileContext.Provider value={{ game, character, changeCharacter, comboList, addCombo, deleteCombo }}>
      {children}
    </ProfileContext.Provider>
  );
}