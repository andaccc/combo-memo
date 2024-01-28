export type Combo = Input[][]

export type Input = {
  label: string,
  name: string,
  type: string | 'direction' | 'attack' | 'action',
  condition?: string | 'close' | 'far',
  icon?: JSX.Element,
}

export const InputMap: Record<string, Input> = {
  /** 
   * Directions
  */
  '1' : {
    label: '1',
    name: 'Down-Back',
    type: 'direction',
    icon: <img src="/input_icon/dir/48px-InputIcon_1.png" alt="appIcon"/>,
  },
  '2' : {
    label: '2',
    name: 'Down',
    type: 'direction',
    icon: <img src="/input_icon/dir/48px-InputIcon_2.png" alt="appIcon"/>,
  },
  '3' : {
    label: '3',
    name: 'Down-Forward',
    type: 'direction',
    icon: <img src="/input_icon/dir/48px-InputIcon_3.png" alt="appIcon"/>,
  },
  '4' : {
    label: '4',
    name: 'Left',
    type: 'direction',
    icon: <img src="/input_icon/dir/48px-InputIcon_4.png" alt="appIcon"/>,
  },
  '5' : {
    label: '5',
    name: 'Neutral',
    type: 'direction',
    icon: <img src="/input_icon/dir/48px-InputIcon_5.png" alt="appIcon"/>,
  },
  '6' : {
    label: '6',
    name: 'Right',
    type: 'direction',
    icon: <img src="/input_icon/dir/48px-InputIcon_6.png" alt="appIcon"/>,
  },
  '7' : {
    label: '7',
    name: 'Up-Back',
    type: 'direction',
    icon: <img src="/input_icon/dir/48px-InputIcon_7.png" alt="appIcon"/>,
  },
  '8' : {
    label: '8',
    name: 'Up',
    type: 'direction',
    icon: <img src="/input_icon/dir/48px-InputIcon_8.png" alt="appIcon"/>,
  },
  '9' : {
    label: '9',
    name: 'Up-Forward',
    type: 'direction',
    icon: <img src="/input_icon/dir/48px-InputIcon_9.png" alt="appIcon"/>,
  },
  '236': {
    label: '236',
    name: 'Quarter Forward',
    type: 'direction',
    icon: <img src="/input_icon/dir/36px-InputIcon_236.png" alt="appIcon"/>,
  },
  '236236': {
    label: '236236',
    name: 'Double Quarter Forward',
    type: 'direction',
    icon: <span><img src="/input_icon/dir/36px-InputIcon_236.png" alt="appIcon"/><img src="/input_icon/dir/36px-InputIcon_236.png" alt="appIcon"/></span>,
  },
  '214': {
    label: '214',
    name: 'Quarter Back',
    type: 'direction',
    // icon: <img src="/input_icon/dir/36px-InputIcon_214.png" alt="appIcon"/>,
  },
  '623': {
    label: '623',
    name: 'DP',
    type: 'direction',
    icon: <img src="/input_icon/dir/36px-InputIcon_623.png" alt="appIcon"/>,
  },
  '421': {
    label: '421',
    name: 'Reverse DP',
    type: 'direction',
    // icon: <img src="/input_icon/dir/36px-InputIcon_421.png" alt="appIcon"/>,
  },
  '41236': {
    label: '41236',
    name: 'Half Forward',
    type: 'direction',
    icon: <img src="/input_icon/dir/36px-InputIcon_41236.png" alt="appIcon"/>,
  },
  '63214': {
    label: '63214',
    name: 'Half Back',
    type: 'direction',
    // icon: <img src="/input_icon/dir/36px-InputIcon_63214.png" alt="appIcon"/>,
  },
  '87412': {
    label: '87412',
    name: 'Top Back',
    type: 'direction',
    icon: <img src="/input_icon/dir/36px-InputIcon_87412.png" alt="appIcon"/>,
  },
  
  /**
   * Attacks - GGST  
   */ 
  'P' : {
    label: 'P',
    name: 'Punch',
    type: 'attack',
    icon: <img src="/input_icon/ggst_act/33px-GGST_P_Prompt.png" alt="appIcon"/>,
  },
  'K' : {
    label: 'K',
    name: 'Kick',
    type: 'attack',
    icon: <img src="/input_icon/ggst_act/33px-GGST_K_Prompt.png" alt="appIcon"/>,
  },
  'S' : {
    label: 'S',
    name: 'Slash',
    type: 'attack',
    icon: <img src="/input_icon/ggst_act/33px-GGST_S_Prompt.png" alt="appIcon"/>,
  },
  'H' : {
    label: 'H',
    name: 'Heavy Slash',
    type: 'attack',
    icon: <img src="/input_icon/ggst_act/33px-GGST_H_Prompt.png" alt="appIcon"/>,
  },
  'D' : {
    label: 'D',
    name: 'Dust',
    type: 'attack',
    icon: <img src="/input_icon/ggst_act/33px-GGST_D_Prompt.png" alt="appIcon"/>,
  },
  /**
   * Actions - GGST
   */
  'RC' : {
    label: 'RC',
    name: 'Roman Cancel',
    type: 'action',
    // icon: <RomanCancelIcon />,
  },
  'RRC' : {
    label: 'RRC',
    name: 'Red Roman Cancel',
    type: 'action',
    // icon: <RedRomanCancelIcon />,
  },
  'YRC' : {
    label: 'YRC',
    name: 'Yellow Roman Cancel',
    type: 'action',
    // icon: <YellowRomanCancelIcon />,
  },
}

