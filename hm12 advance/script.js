const button = document.getElementById('button')

const createTooltip = (element, text) => {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip')

    tooltip.innerText = text;

    document.body.append(tooltip);

    const elemCoords = element.getBoundingClientRect();
    console.log(elemCoords)

    const tooltipTop = elemCoords.top - 20 - tooltip.clientHeight;

    const tooltipLeft = 
        elemCoords.left +
        elemCoords.width / 2 -
        tooltip.clientWidth / 2;
    
    tooltip.style.top = `${tooltipTop}px`;
    tooltip.style.left = `${tooltipLeft}px`;

}
createTooltip(button, "bla bla bla");