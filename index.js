const main = document.querySelector('main');
let exerciceArray = [
    {pic: 0, min: 1,},
    {pic: 1, min: 1,},
    {pic: 2, min: 1,},
    {pic: 3, min: 1,},
    {pic: 4, min: 1,},
    {pic: 5, min: 1,},
    {pic: 6, min: 1,},
    {pic: 7, min: 1,},
    {pic: 8, min: 1,},
    {pic: 9, min: 1,},
];

export default class Exercice{

}

//toutes les fonctions utiles au projet //all functions useful to the project
const utils = {
    pageContent : function(title, content, btn){
        document.querySelector("h1").innerHTML = title;
        main.innerHTML = content;
        document.querySelector(".btn-container").innerHTML = btn;
    },
    handleEventMinutes: function(){
        document.querySelectorAll('input[type="number"]').forEach((input)=>{
            input.addEventListener('input',(e)=>{
                exerciceArray.map((exo)=>{
                    if(exo.pic == e.target.id){
                        exo.min = parseInt(e.target.value)


                    }
                })
            })
        })
    }
}

//diferentes pages qui apparaitront 
const page = {
    lobby: function(){

        let mapArray = exerciceArray.map((exo)=>
            `
                <li>
                    <div class="card-header">
                        <input type="number" id=${exo.pic} min="1" max"10" value=${exo.min}>
                        <span>min</span>
                    </div>
                    <img src="./img/${exo.pic}.png"/>
                    <i class="fas fa-arrow-alt-circle-left arrow" data-pic=${exo.pic}></i>
                    <i class="fas fa-times-circle deleteBtn" data-pic=${exo.pic}></i>
                </li>
            
            `
        ).join("");
        

        utils.pageContent( "Parametrage <i id='reboot' class='fas fa-undo'></i>", 
        "<ul>" + mapArray + "</ul>",
        "<button id='start'>Commencer<i class='far fa-play-circle'></i></button>" )
        utils.handleEventMinutes();

    },
    routine: function(){
        utils.pageContent("Routine ", 
        "exercice avec chrono", 
        null)

    },
    finish: function(){
        utils.pageContent(
            "c'est termine",
            "<button id='start'>Recommencer</button>",
            "<button id='reboot' class='btn-reboot>Reinitialiser<i class='fas fa-times-circles'></i></button>",
        )
         
    }
}
page.lobby()