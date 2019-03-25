document.querySelector('#inColor').addEventListener('change', function(e){
    console.log((new Date()));
    // console.log(e);

    let descr = document.querySelector('.descr'),
        color = e.target.value,
        shadow = '8px 8px 5px '+ color,
        colors = [  255 - parseInt(color[1] + color[2], 16),
                    255 - parseInt(color[3] + color[4], 16),
                    255 - parseInt(color[5] + color[6], 16)
        ],
        colorRGB = 'rgb(' + colors[0] + ',' + colors[1] + ',' + colors[2] + ')',
        aligns = ['left', 'center', 'right'];

    //firstChild - первый потомок(может быть текстом)
    //firstElementChild - первый потомок элемент(тег)
    descr.firstElementChild.style.color = color;

    descr.firstElementChild.nextElementSibling.style.borderColor = color;

    descr.previousElementSibling.style.textShadow = shadow;

    descr.parentElement.style.backgroundColor = colorRGB;

    console.log(colors);
    descr.style.textAlign = aligns[colors.indexOf(Math.min(...colors))];

});


