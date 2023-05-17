const colors = ['green', 'red', 'blue',
'violet','pink','orange', 'indigo','whitesmoke', 'Magenta',
 'Purple','Wheat','Brown', 'Grey', 'Gray','rgba(2,132,78,1)'];

 const btn = document.getElementById('btn');
 const color = document.querySelector(".color")

 btn.addEventListener("click",function(){
    randomColorPicker = Math.floor(Math.random()* colors.length);
    color.textContent = colors[randomColorPicker];
    document.body.style.backgroundColor = colors[randomColorPicker];
 })