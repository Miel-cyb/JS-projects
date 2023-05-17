const color =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E','F'];

const input = document.getElementById('number');
const submit = document.getElementById("submit");
const bodyDiv = document.querySelector('.boxes')
let RandomColor = "#";

function ColorPicker() {
	for (let j = 0; j < 6; j++) {
		RandomColor += color[Math.floor(Math.random() * color.length)];
	}
}

function displayBox(){
	//displaying boxes according the input value
	for (let i = 0; i < input.value; i++) {
		let section = document.createElement("div");
		section.classList.add("box");
		ColorPicker();
		section.style.backgroundColor = RandomColor;
		bodyDiv.append(section);
		document.body.appendChild(bodyDiv);
		RandomColor = "#";
	}
}

submit.addEventListener('click',function(){
    if(input.value <= 0)
{
    alert("Please enter a value above zero")
    input.value =""
}
 displayBox(); 
})