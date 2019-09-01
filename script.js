const ext = '.png';
const folder = 'img';
const images = new Array('memory1', 'memory2', 'memory3', 'memory4', 'memory5', 'memory6', 'memory7', 'memory8', 'memory9', 'memory10',               'memory1', 'memory2', 'memory3', 'memory4', 'memory5', 'memory6', 'memory7', 'memory8', 'memory9', 'memory10');
const back = 'back4.png';
let tab1 = new Array();
let ticker;
let finish = 0;
max_obr = 20;

shuffle(images);


const hide = () => {
  for (x=0; x < images.length; x++) {
    document.write("<img value = '" + images[x] + "' src='" + folder + "/" + back + "'" +"onclick=display(this);>");
  }
}

const show = () => {
  for (x=0; x < images.length; x++) {
    document.write("<img src='" + folder + "/" + images[x] + ext + "'>");
  }
}

const display = event => {
    tab1.push(event);
    event.style.visibility='hidden';
    if (tab1.length == 2) {
      //console.log(tab1[0].getAttribute("value"));
      //console.log(tab1[1].getAttribute("value"));
      ticker = setTimeout(uncover, 1500);
    } else if (tab1.length == 3){
      clearTimeout(ticker);
      uncover();
      tab1.push(event);
    }
}
function uncover(){
  if(tab1[0].getAttribute("value") != tab1[1].getAttribute("value")){
    tab1[0].style.visibility="visible";
    tab1[1].style.visibility="visible";
  }
  else {
    finish = finish +2
    if(finish == max_obr) {
      alert('Wygrałeś');
    }
  }
  tab1 = [];
}
/*Random*/
function shuffle(o){
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x =       o[--i], o[i] = o[j], o[j] = x);
  return o;
}
