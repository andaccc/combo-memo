# combo-memo
Combo maker for fighting games

https://main.d2g7trznx87yya.amplifyapp.com/

![image](https://github.com/andaccc/combo-memo/assets/8611553/f4e3b274-8b10-48ed-a6d3-07cb53fd55c6)


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


