import React, { useState, useEffect } from 'react'

import { Box, Button, ButtonGroup, IconButton, Stack, Divider, List, ListItem, ListItemText, Grid } from '@mui/material';
import Item from '@mui/material/ListItem';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { ProfileContext, combo } from '../ProfileContext'

type comboList = combo[];

const ggstButtons = [ "P", "K", "HS", "S", "RC" ] 

const ComboList: React.FC = () => {
  const { game, character, comboList, addCombo, deleteCombo } = React.useContext(ProfileContext);

  const [selectedButtons, setSelectedButtons] = useState<string>("");
  const [combo, setCombo] = useState<combo>([]); 

  const handleButtonClick = (button: string): void => {
    setSelectedButtons(button)
    // setSelectedButtons((prevButtons) =>
    //   prevButtons.includes(button)
    //     ? prevButtons.filter((selected) => selected !== button)
    //     : [...prevButtons, button]
    // );
  };

  const handleAddInput = (): void => {
    // add selected buttons to combo
    setCombo((prevCombo) => [...prevCombo, selectedButtons]);

    setSelectedButtons("");
  }

  const handleAddCombo = (): void => {
    // add new combo to combo list
    addCombo(combo);

    // reset combo
    setCombo([]);
    setSelectedButtons("");
  }

  const handleResetCombo = (): void => {
    // reset new combo
    setCombo([]);
  }

  const handleDeleteCombo = (index: number): void => {
    // delete combo from combo list
    deleteCombo(index);
  }

  
  return (
    <Box>
      {/* button select */}
      <h3>Select Buttons:</h3>
        <ButtonGroup size="small" aria-label="small button group">
          {/* store selected buttons */}
          {ggstButtons.map((button) => (
            <Button
              key={button}
              onClick={() => handleButtonClick(button)}
            >
              {button}
            </Button>
          ))}
        </ButtonGroup>
      
        <h3>Combo List:</h3>
        {/* new combo */}
        <Stack
          direction="row"
          // divider={<Divider orientation="vertical" flexItem />}
          divider={ <ArrowRightIcon/> }
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          { combo.map((input, index) => (
            <Item>{input}</Item>
            ))
          }
          {/* last item for adding new input */}
          <Item>
          { 
            selectedButtons.length > 0 && 
              <Box>
                {selectedButtons}
                <IconButton aria-label="add" size="small"
                  onClick={() => handleAddInput()}
                >
                    <AddIcon fontSize="small"/>
                </IconButton>
              </Box>
          }

          </Item>

        </Stack>

        {
          combo.length > 0 && 
          <Box>
            <Button onClick={() => handleAddCombo()} >
                <AddIcon fontSize="small"/>
            </Button>
            <Button onClick={() => handleResetCombo()} >
                <DeleteIcon fontSize="small"/>
            </Button>
          </Box>
        }


        {/* show added combos */}
        { comboList.map((combo: combo, index) => (
          <List dense={false}>
            <ListItem
              secondaryAction={
                <IconButton 
                  edge="end" 
                  aria-label="delete"
                  onClick={() => handleDeleteCombo(index)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <Stack
                direction="row"
                // divider={<Divider orientation="vertical" flexItem />}
                divider={ <ArrowRightIcon/> }
                justifyContent="center"
                alignItems="center"
                spacing={1}
              >
                { combo.map((input, index) => (
                  <Item>{input}</Item>
                  ))
                }

              </Stack>

            {/* <ListItemText
              primary="Single-line item"
              secondary={null}
            /> */}
            </ListItem>
          </List>
          ))
        }
  </Box>
  )
}

export default ComboList;