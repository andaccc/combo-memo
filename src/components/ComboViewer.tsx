import React from 'react';
import { Stack } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { ProfileContext } from '../ProfileContext'

import { InputMap, Input, Combo} from './InputMap';
import { Item } from './Item';

/**
 * Display graphical combo inputs  
 */


export const translateComboString = (comboString: string): Input[][] => {
  var combo = [];

  // split string to arr, demiliter >
  var inputs = comboString.split(">");

  // translate each input
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    
    if (input === '') {
      continue
    }

    var translatedInput = translateInput(input);

    if (translatedInput.length === 0) {
      continue
    }

    combo.push(translatedInput);
  }

  return combo;
}

export const translateInput = (input: string): Input[] => {
  var parsed = parseInputs(input) // breakdown input

  var translatedInput: Input[] = []

  for (var i = 0; i < parsed.length; i++) {
    var inputFound: Input = InputMap[parsed[i]]

    translatedInput.push(inputFound);
  }

  return translatedInput
}

const parseInputs = (input: string): string[] => {
  // parse input string into direction and action
  const directionRegex = /(2|4|6|8)(.*)/;
  const actionRegex = /(P|MP|HP|LK|MK|HK)/;
  // define dict for direction and action?
  // var  parsedInputs = {
  //   direction: "",
  //   action: ""
  // }

  var parsedInputs = []

  const directionMatch = input.match(directionRegex);
  const actionMatch = input.match(actionRegex);

  if (directionMatch) {
    // parsedInputs.direction = directionMatch[1];
    // parsedInputs.action = directionMatch[2];
    parsedInputs.push(directionMatch[1]);
  }
  
  if (actionMatch) {
    parsedInputs.push(actionMatch[1]);
    // parsedInputs.action = actionMatch[1];
  }

  return parsedInputs;
};


const ComboViewer = ({combo}: {combo: Combo}) => {
  return (
    <Stack
        direction="row"
        // divider={<Divider orientation="vertical" flexItem />}
        divider={ <ArrowRightIcon/> }
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        { combo.map((inputs, index) => (
          <Item key={index}>
            {
              // add space between icons
              inputs.map((input, index) => (
                <span key={index} style={{ marginRight: '8px' }}>
                  {input.icon}
                </span>
              ))
            }
            
          </Item>
          ))
        }
  </Stack>
  );
};

export default ComboViewer;