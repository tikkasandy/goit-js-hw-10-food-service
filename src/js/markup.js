import refs from './refs';
import menuMarkup from "../templates/menu-card.hbs";
import menuList from "./menu.json";

const { menu } = refs;

menu.insertAdjacentHTML('beforeend', menuMarkup(menuList));
