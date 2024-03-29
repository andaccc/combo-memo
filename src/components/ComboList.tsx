import React, { useState, useEffect } from 'react'

import { Box, Button, ButtonGroup, IconButton, Stack, Divider, List, ListItem, ListItemText, Grid, Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import { ProfileContext, combo } from '../ProfileContext'

import { Item } from './Item';
import ComboViewer from './ComboViewer';
import { translateComboString } from './ComboViewer';
import {Combo, Input} from './InputMap';


const ggstButtons = [ "P", "K", "HS", "S", "RC" ] 


const ComboList: React.FC = () => {
  const { game, character, comboList, addCombo, deleteCombo } = React.useContext(ProfileContext);

  const [selectedButtons, setSelectedButtons] = useState<string>("");
  const [comboString, setComboString] = useState<string>("");
  const [translatedCombo, setTranslatedCombo] = useState<Combo>([]);
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

  const handleComboString = (comboString: string): void => {
    setComboString(comboString);
    var inputs = translateCombo(comboString)
    setTranslatedCombo(inputs);
  }

  const translateCombo= (comboString: string): Combo => {
    var combo: Combo = [];

    combo = translateComboString(comboString)
    return combo
  }

  return (
    <Container>
      {/*
        string notation translate 
      */}
      <h3>Combo String Translate:</h3>
      <TextField id="standard-basic" variant="standard" onChange={event => handleComboString(event.target.value)}/>
      <ComboViewer combo={translatedCombo}/>

      {/*
        Combo List 
       */}

      {/* button select */}
      <h3>Inputs:</h3>
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
      
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Stack
          direction="row"
          divider={ <ArrowRightIcon />  }
          justifyContent="center"
          alignItems="center"
          spacing={1}
          >
            { combo.map((input, index) => (
              <Item key={index}>{input}</Item>
              ))
            }

            <Item>
            { 
              selectedButtons.length > 0 && 
              <Container>
                {selectedButtons}
                <IconButton aria-label="add" size="small"
                  onClick={() => handleAddInput()}
                >
                    <AddIcon fontSize="small"/>
                </IconButton>
              </Container>
            }

            </Item>

          </Stack>
        </Grid>
        <Grid item xs={4}>
          {
            combo.length > 0 && 
            <Container>
              <IconButton  onClick={() => handleAddCombo()} color="primary">
                  <AddIcon fontSize="small"/>
              </IconButton >
              <IconButton  onClick={() => handleResetCombo()} color="primary">
                  <DeleteIcon fontSize="small"/>
              </IconButton >
            </Container>
          }
        </Grid>

      </Grid>
      {/* new combo */}
      



      {/* show added combos */}
      <List dense={false}>
        { comboList.map((combo: combo, index) => (
          <ListItem
            key={index}
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
                <Item key={index}>{input}</Item>
                ))
              }

            </Stack>
          </ListItem>
        ))
      }
      </List>
  </Container>
  )
}

export default ComboList;