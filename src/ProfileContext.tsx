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

export const DirInput = {
  "Neutral": "5",
  "Forward": "6",
  "Back": "4",
  "Down": "2",
  "DownForward": "3",
  "DownBack": "1",
  "Jump": "8",
  "Dash": "66",
  "DP": "623",
  "ReverseDP": "421",
  "QuarterForward": "236",
  "QuarterBack": "214",
  "HalfForward": "41236",
  "HalfBack": "63214",
  "FullForward": "4123641236",
  "FullBack": "6321463214",
}

export const MiscInput = {
  "JumpCancel": "jc",
  "SuperJump": "sj",
  "DoubleJump": "dj",
  "AirDash": "ad"
}

export const condition = {
  "air": "air",
  "wall": "wall",
  "delay": "delay",
  "close": "close",
  "far": "far",
  "counter": "counter", 
}

// TODO: GGST attack input
export const GGSTAttackInput = {
  "P": "P",
  "K": "K",
  "S": "S",
  "HS": "HS",
  "D": "D",

}

interface ProfileValues {
  game: any,
  character: string,
  changeCharacter: (char: string) => void,
  comboList: combo[],
  addCombo: (combo: combo) => void,
  deleteCombo: (index: number) => void,
}

const profileValues: ProfileValues = {
  game: '',
  character: Characters.ggst.ram,
  changeCharacter: (char: string) => {},
  comboList: [],
  addCombo: (combo: combo) => {},
  deleteCombo: (index: number) => {},
}



export const ProfileContext = React.createContext(profileValues);

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
    // <ProfileContext.Provider value={profileValues} >  
  
    <ProfileContext.Provider value={{ 
                              game, 
                              character, 
                              changeCharacter, 
                              comboList, 
                              addCombo, 
                              deleteCombo 
                            }}
    >
      {children}
    </ProfileContext.Provider>
  );
}