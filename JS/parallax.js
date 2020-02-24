
const wrapper = document.querySelector('.wrapper');
const layerOne = document.querySelector('.kuva');
const layerTwo = document.querySelector('.ufo');
const layerThree = document.querySelector('.light');
const layerFour = document.querySelector('.beam');
const mouse = document.querySelector('#mouse');
const mouse_center = document.querySelector('#mouse-center');

const cx = wrapper.clientWidth/2;
const cy = wrapper.clientHeight/2;

document.querySelector('body').addEventListener('mousemove', (event) => {
    let x = event.clientX;
    let y = event.clientY;
    //console.log('X: ' +x+ 'Y: ' +y);

    const coords = 'From left to right:<br> X: ' +x+ '\tY: ' +y;
    document.getElementById("mouse").innerHTML = coords;

    let from_center_x = cx - x;
    let from_center_y = cy - y;
        
    const coords2 = "From the center<br> X: " + from_center_x + ", Y: " + from_center_y;
    document.getElementById("mouse_center").innerHTML = coords2; 

    layerOne.style.transform = 'translateX(' + from_center_x/500 + '%) translateY(' + from_center_y/250 + '%)';
    layerTwo.style.transform = 'translateX(' + from_center_x/30 + '%) translateY(' + from_center_y/30 + '%)';
    layerThree.style.transform = 'translateX(' + from_center_x/30 + '%) translateY(' + from_center_y/30 + '%)';
    layerFour.style.transform = 'translateX(' + from_center_x/30 + '%) translateY(' + from_center_y/30 + '%)';
});