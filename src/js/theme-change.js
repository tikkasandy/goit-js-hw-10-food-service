import refs from "./refs";
import theme from "./themes";

const { body, checkBox } = refs;
const { LIGHT, DARK } = theme;

function changeTheme(e) {
    if (e.target.checked) {
        body.classList.replace(LIGHT, DARK);
        localStorage.setItem('theme', DARK);
    } else {
        body.classList.replace(DARK, LIGHT);
        localStorage.setItem('theme', LIGHT);
    };
};

checkBox.addEventListener('change', changeTheme);
