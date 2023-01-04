document.getElementById('watchOneSmallOne') .onclick = () => {
    document.querySelector('.big-pic') .style = 'background-image: url(/images/mw1.png)';
}
document.getElementById('watchOneSmallTwo') .onclick = () => {
    document.querySelector('.big-pic') .style = 'background-image: url(/images/mws2.webp)';
}
document.getElementById('watchOneSmallThree') .onclick = () => {
    document.querySelector('.big-pic') .style = 'background-image: url(/images/mws3.webp)';
}
document.getElementById('watchOneSmallFour') .onclick = () => {
    document.querySelector('.big-pic') .style.cssText = `
    background-image: url(/images/mws1.webp); 
    color:  white`;
}

