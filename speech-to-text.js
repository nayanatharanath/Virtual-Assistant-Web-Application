const group = document.querySelector('.group');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e) =>{

    const text = Array.from(e.results)
     .map(result => result[0])
     .map(result => result.transcript)
     .join('');

    p.innerText = text;
    group.appendChild(p);

    if(e.results[0].isFinal){
        p = document.createElement('p');
    }

    console.log(e.results);
})

recognition.addEventListener('end', ()=>{
    recognition.start();
})

recognition.start();
