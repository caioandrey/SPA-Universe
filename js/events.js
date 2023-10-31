import {
    home,
    universe,
    exploration,
} from './elements.js'

function removeBG() {
    document.documentElement.classList.remove('switch-bg1', 'switch-bg2', 'switch-bg3');
}

export function changeBG() {
    home.addEventListener('click', () => {
        removeBG();
        document.documentElement.classList.add('switch-bg1');
    });

    universe.addEventListener('click', () => {
        removeBG();
        document.documentElement.classList.add('switch-bg2');
    });

    exploration.addEventListener('click', () => {
        removeBG();
        document.documentElement.classList.add('switch-bg3');
    });
}




function removeSelectClassFromAll() {
    home.classList.remove('select');
    universe.classList.remove('select');
    exploration.classList.remove('select');
}
    
export function homeColorChange() {
    homeChange.addEventListener('click', () => {
        removeSelectClassFromAll();
        home.classList.add('select');
    });
}

export function universeColorChange() {
    universeChange.addEventListener('click', () => {
        removeSelectClassFromAll();
        universe.classList.add('select');
    });
}

export function explorationColorChange() {
    explorationChange.addEventListener('click', () => {
        removeSelectClassFromAll();
        exploration.classList.add('select');
    });
}




   
    