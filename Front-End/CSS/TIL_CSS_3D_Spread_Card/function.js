const more1 = document.querySelector("#moreContent1");
const return1 = document.querySelector("#returnContent1");

const more2 = document.querySelector("#moreContent2");
const return2 = document.querySelector("#returnContent2");

const more3 = document.querySelector("#moreContent3");
const return3 = document.querySelector("#returnContent3");


let index = 0;
const arr = [0, more1, more2, more3];

function findIndex(_return){
    index = _return.target.id.split('').pop();
    console.log(index);
}

function showDescription(_more){
    _more.target.parentNode.parentNode.style.transition = `1.5s`;
    _more.target.parentNode.parentNode.style.opacity = `0`
    _more.target.parentNode.parentNode.style.zIndex = `-1`
}

function hideDescription(_return){
    findIndex(_return);
    _return.target.parentNode.parentNode.classList.add(`showing`);
    const showing = document.querySelector(".showing");
    showing.style.transition = `1.5s`;
    showing.style.zindex = `-1` ;
    _return.target.parentNode.parentNode.classList.remove(`showing`);
    arr[index].parentNode.parentNode.style.zIndex = `1`
    arr[index].parentNode.parentNode.style.opacity = `1`
    
}

more1.addEventListener('click',showDescription);
return1.addEventListener('click',hideDescription);

more2.addEventListener('click',showDescription);
return2.addEventListener('click',hideDescription);

more3.addEventListener('click',showDescription);
return3.addEventListener('click',hideDescription);