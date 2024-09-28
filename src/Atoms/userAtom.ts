import { atom } from "recoil";




export const userTokenState = atom({
    key: 'userTokenState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });


  export const userNotes = atom({
    key:'userNotes',
    default:[]
  })

  export const allNotes = atom({
    key:'allNotes',
    default:[]
  })

