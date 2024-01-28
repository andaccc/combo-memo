# combo-memo
Combo maker for fighting games

## TODO
- [ ] UI Design
- [ ] Json Structure Design
- [ ] Json export/ import
- [ ] Cookies Storage
- [ ] Multi-games layout support
- [ ] Button <-> Command string translation


## Json Structure

### Profile
- game : `str`
  - commands : `Command[]`

### Command
- description : `str`
- command 
  - arrow : `str`
  - button : `str`
  - jump : `bool` 
  - condition : `str`


