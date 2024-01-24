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
  var parsed = parseInputs(input.toUpperCase()) // breakdown input

  var translatedInput: Input[] = []

  for (var i = 0; i < parsed.length; i++) {
    var inputFound: Input = InputMap[parsed[i]]

    translatedInput.push(inputFound);
  }

  return translatedInput
}

/**
 * Parse input string into direction and action
 * @TODO: 
 * add support for multiple moves
 * - 2222 -> 2, 2, 2, 2
 * - 236236 -> 236, 236
 * 
 * How to handle if no input found?
 * - return string as is?
 * 
 * @param input input string
 * @returns array of input object
 */
const parseInputs = (input: string): string[] => {
  // parse input string into direction and action
  
  // get regex check from input map
  // if type: 'direction',
  // new RegExp(myArray.join("|"), 'gi');

  var parsedInputs = []
  var dirKey = Object.keys(InputMap).filter(key => InputMap[key].type === 'direction')
  var actKey = Object.keys(InputMap).filter(key => InputMap[key].type === 'action' || InputMap[key].type === 'attack')
 
  var directionRegex = new RegExp(dirKey.join("|"), 'g');
  var actionRegex = new RegExp(actKey.join("|"), 'g');

  const directionMatch = input.match(directionRegex);
  const actionMatch = input.match(actionRegex);

  if (directionMatch && directionMatch[0]) {
    // parsedInputs.direction = directionMatch[1];
    // parsedInputs.action = directionMatch[2];
    parsedInputs.push(directionMatch[0]);
  }
  
  if (actionMatch && actionMatch[0]) {
    parsedInputs.push(actionMatch[0]);
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
                  {input.icon? input.icon : input.label}
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