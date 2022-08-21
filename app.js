let layer1 = document.getElementById('layer1')
scroll = window.pageYOffset;
document.addEventListener('scroll',function(e){
    let offset = window.pageYOffset;
    scroll  = offset;
    layer1.style.width = (100 + scroll) + '%';
    layer1.style.right = scroll + '%';

});

let layer2 = document.getElementById('layer2')
scroll = window.pageYOffset;
document.addEventListener('scroll',function(e){
    let offset = window.pageYOffset;
    scroll  = offset;
    layer2.style.width = (100 + scroll/4) + '%';
    layer2.style.left = scroll/1000 + '%';

});

let text = document.getElementById('text')
scroll = window.pageYOffset;
document.addEventListener('scroll',function(e){
    let offset = window.pageYOffset;
    scroll  = offset;
 
    text.style.top = -scroll/20 + '%';
    

});


