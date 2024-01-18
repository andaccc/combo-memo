import React from 'react';
import { Stack } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { ProfileContext, combo } from '../ProfileContext'

import { Item } from './Item';

// Display graphical combo inputs  

const translateComboString = (comboString: string): combo => {
  var combo: combo = [];

  // split string to arr, demiliter >
  var inputs = comboString.split(">");

  // translate each input
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    var translatedInput = translateInput(input);
    


    if (translatedInput === '') {
      continue
    }

    combo.push(translatedInput);
  }


  return combo;
}

const translateInput = (input: string): string => {

  return ""
}

const InputMap = {
  directions: {
    '2': {
      label: 'Down',
      // icon: <DownIcon />,
    },
    // Add more direction mappings as needed
  },
  actions: {
    'k': {
      label: 'Kick',
      // icon: <KickIcon />,
    },
    // Add more action mappings as needed
  }
}

const parseInputs = (input: string) => {
  const directionRegex = /^(2|4|6|8|d|u|b|f|df|uf|db|ub)(.*)/;
  const actionRegex = /^(LP|MP|HP|LK|MK|HK)$/;
  const parsedInputs = {
    direction: 'Unknown',
    action: 'Unknown',
  };

  const directionMatch = input.match(directionRegex);
  const actionMatch = input.match(actionRegex);

  if (directionMatch) {
    parsedInputs.direction = directionMatch[1];
    parsedInputs.action = directionMatch[2];
  } else if (actionMatch) {
    parsedInputs.action = actionMatch[1];
  }

  return parsedInputs;
};


const ComboViewer = ({inputs}: {inputs: []}) => {
  const comboNotation = '2K > 2D > 214P > 214P > dl~dc > 623P';
  const comboInputs = comboNotation.split(' > ');


  return (
    <Stack
        direction="row"
        // divider={<Divider orientation="vertical" flexItem />}
        divider={ <ArrowRightIcon/> }
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        { inputs.map((input, index) => (
          <Item key={index}>{input}</Item>
          ))
        }

  </Stack>
  );
};

export default ComboViewer;