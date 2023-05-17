// reviews data
const reviews =[
    { id:1,
     name:"Aurora Lim",
     job:"Promoter",
     img:"cornrow.jpg",
     text:"Lorem ipsum dolor sit amet "
},
    {
        id:2,
        name:"Mira Mi",
        job:"Software developer",
        img:"cornrow1.jpg",
        text:"Great and artistic work. Her ideas help a lot"

    },

{
    id:3,
    name: "Mike Ron",
    job:"Advertiser",
    img:"photo_5796477005460519668_y.jpg",
    text:"Promotes good market and has his way of enhancing humor among customers"

},

{
    id: 4,
    name:"Lisa Nil",
    job:"Marketer",
    img:"sn.jpg",
    text:'Enthusiast and passionate about her work'

},

{
    id: 5,
    name:"Ronny",
    job:"Analyst",
    img:"photo_5837162865583307565_y.jpg",
    text:"Analysis made about systems and functions are really great and standard"

}
]

const img = document.getElementById("person1");
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")


const prev_btn = document.querySelector(".previous-btn");
const next_btn = document.querySelector(".next-btn")
const surprise_btn = document.querySelector(".surprise-btn");
document.get

// set starting item
let currentItem = 0;

//set initial item when window loads
window.addEventListener("DOMContentLoaded",function(){
   showPerson(currentItem);
})

function showPerson(person){
     const item = reviews[person];
	 img.src = item.img;
	 author.textContent = item.name;
	 job.textContent = item.job;
	 info.textContent = item.text;
}

//Show next person
next_btn.addEventListener("click",function(){
    currentItem++
    if(currentItem > reviews.length-1){
   currentItem = 0;
    }
    showPerson(currentItem);
   
})


prev_btn.addEventListener("click", function () {
	currentItem--;
	if (currentItem < 0) {
		currentItem = reviews.length-1;
	}
	showPerson(currentItem);
});

   

surprise_btn.addEventListener("click",function(){
currentItem= Math.floor(Math.random()*reviews.length);
    showPerson(currentItem);
})