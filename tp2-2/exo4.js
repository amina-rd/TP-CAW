window.onload= () => {
    b = true;
    let boundary = document.querySelectorAll("#maze .boundary");
    
    boundary.forEach((e1)=>{
        e1.addEventListener("mouseover", ()=> {
            boundary.forEach((e1)=>{
        e1.style.backgroundColor="red";
    });
    b = false;
});
});
    
    


let start = document.getElementById("start");
  let end = document.getElementById("end");
  start.onclick = () => {
    document.querySelectorAll("#maze .boundary").forEach((el) => {
      el.style.backgroundColor = "#eeeeee";
    });
    b = true;
  };

  end.onmouseover = () => {
    if (b == false) {
      alert("You lost");
    } else {
      alert("You win!");
    }
  };
};