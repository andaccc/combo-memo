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


  var parsedInputs: string[] = []
  var dirKey = Object.keys(InputMap).filter(key => InputMap[key].type === 'direction')
  var actKey = Object.keys(InputMap).filter(key => InputMap[key].type === 'action' || InputMap[key].type === 'attack')
 
  // separate input string into direction and action
  // 236P -> 236, P
  // 236236P -> 236, 236, P
  // 236236 P -> 236, 236, P
  // 236 236 P -> 236, 236, P

  var inputArr = input.split(/(\d+)/).map((item) => item.trim())
  console.log(inputArr)
  for (var i = 0; i < inputArr.length; i++) {
    if (dirKey.includes(inputArr[i])) {
      parsedInputs.push(inputArr[i]);
    } 
    else if (actKey.includes(inputArr[i])) {
      parsedInputs.push(inputArr[i]);
    } 
    else {
      // input not found
      // TODO: handle unknown input
      // return input as is 
      console.log("input not found: " + input)
    }
  }


  // parse input string into direction and action
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