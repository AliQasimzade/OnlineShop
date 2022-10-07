import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist();

export const userData = atom({
  key: "userData",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const UserLogin = atom({
  key: "UserLogin",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const addBasket = atom({
  key: "addBasket",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const addBadge = atom({
  key: "addBadge",
  default: 0,
  effects_UNSTABLE: [persistAtom],
})