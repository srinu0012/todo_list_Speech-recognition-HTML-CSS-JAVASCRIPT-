let con=document.getElementById("con")
let task =document.getElementById("val")
let btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    let ele =document.createElement("p")
    ele.innerText=task.value
    ele.id="ele"
    let text=ele.innerText +" task added"
    let speaking = new SpeechSynthesisUtterance(text)
    speechSynthesis.speak(speaking)


    let divget=document.createElement("div")
    divget.id="shown"
    let edit = document.createElement("button")
    edit.innerText="Edit"
    edit.style.marginLeft="50px"
    edit.className="btn1"
    let mark=document.createElement("button")
    mark.innerText="mark"
    mark.id="mark"
    mark.addEventListener("click",()=>{
        ele.innerHTML=`<strike>${ele.innerText}</strike>`
        let text=ele.innerText +"completed"
        let speaking = new SpeechSynthesisUtterance(text)
        speechSynthesis.speak(speaking)
    })

    edit.addEventListener("click",()=>{               
        let edit_take=prompt("enter editing task : ")
        ele.innerText=edit_take
        let text=ele.innerText +"edited"
        let speaking = new SpeechSynthesisUtterance(text)
        speechSynthesis.speak(speaking)
    })



    let del = document.createElement("button")
    del.innerText="delete"
    del.className="btn1"
    del.addEventListener("click",()=>{               
        
        ele.innerText=""
        edit.style.display="none"
        del.style.display="none"
        divget.style.display="none"
        let text="task deleted"
        let speaking = new SpeechSynthesisUtterance(text)
        speechSynthesis.speak(speaking)
    })
    divget.appendChild(ele)
    divget.appendChild(edit)
    divget.appendChild(del)
    divget.appendChild(mark)
    task.value=""
    con.appendChild(divget)
})



window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

if ('SpeechRecognition' in window) {
    console.log('Speech recognition supported');
} else {
    console.error('Speech recognition not supported');
}

const recognition = new window.SpeechRecognition();
recognition.continuous = false;
recognition.lang = 'en-US';

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    console.log('Transcript: ', transcript);

    
    const inputField = document.getElementById('val');
    inputField.value = transcript;

    recognition.stop();
};


recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
};


   let mic=document.getElementById("mic").addEventListener("click",()=>{
    recognition.start();
   })
