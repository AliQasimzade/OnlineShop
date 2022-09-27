import {atom} from "recoil";
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist();

export const addedDataState = atom({
    key: 'addedDataState', 
    default: [{
      id: 1,
      price:10,
      img:"https://images.unsplash.com/photo-1616104671052-1eecdadc6d83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      count: 1
    }],
    effects_UNSTABLE: [persistAtom],
  });