import refs from "./refs";
import theme from "./themes";

const { body,checkBox } = refs;
const { LIGHT, DARK } = theme;

function setTheme() {
    const currentTheme = localStorage.getItem('theme');

    if (!currentTheme) {
        localStorage.setItem('theme', LIGHT);
    };

    body.classList.add(localStorage.getItem('theme'));
    
    if (currentTheme === DARK) {
        checkBox.checked = true;
    };
};

setTheme();

