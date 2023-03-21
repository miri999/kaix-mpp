let currentUi=1;

let messages=[];

window.addEventListener("load", function() {
  console.log("Hello World!");
  document.activeElement.addEventListener('keydown', handleKeydown);
  for (let i = 0; i < 20; i++) {
    messages.push({by:"lachs", content:i});
  }
});

function gti(){
  return document.querySelector("input")===document.activeElement;
}

function upUi(){
  if(currentUi==0){
    document.querySelector(".left").hidden=false;
    document.querySelector(".right").hidden=true;
  }
  if(currentUi==1){
    document.querySelector(".left").hidden=true;
    document.querySelector(".right").hidden=true;
  }
  if(currentUi==2){
    document.querySelector(".left").hidden=true;
    document.querySelector(".right").hidden=false;
  }
}

function handleKeydown(e) {
  switch(e.key) {
    case 'ArrowUp':
      nav(-1);
      e.preventDefault();
      break;
    case 'ArrowDown':
      nav(1);
      e.preventDefault();
      break;
    case 'ArrowRight':
      if(!gti()){
        currentUi+=1;
        currentUi%=3;
        upUi();
      }
      break;
    case 'ArrowLeft':
      if(!gti()){
        currentUi-=1;
        currentUi%=3;
        upUi();
      }
      break;
  }
}
function nav(move){
  const items = document.querySelectorAll('.tabb');
  const currentIndex = Array.prototype.indexOf.call(items, document.activeElement);
  const next = currentIndex + move;
  const targetElement = items[next];
  //if(!targetElement)return;
  targetElement.focus();
}

function updateChan(){
  const disp=document.getElementById("mess");
  for (let i = 0; i < messages.length; i++) {
    const element = messages[i];
    const msg=document.createElement("message");
    const by=document.createElement("by");
    const cont=document.createElement("cont");

    by.innerText=element.by;
    cont.innerText=element.content;

    msg.appendChild(by);
    msg.appendChild(cont);
    msg.classList.add("tabb");
    msg.tabIndex=0;

    disp.appendChild(msg);
  }
}
updateChan()