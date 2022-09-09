const btn = document.getElementById('btn');
const adviceId = document.getElementById('adviceId');
const adviceText = document.getElementById('adviceText');

btn.onclick = () =>{

fetch("https://api.adviceslip.com/advice")
.then(reponse => reponse.json())
.then(reponse2 => {

    adviceId.textContent = reponse2.slip.id;
    adviceText.textContent=reponse2.slip.advice;

})

}



