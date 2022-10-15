
    
  window.onload= function(){
    let boundary = document.querySelectorAll(".boundary");
    console.log(boundary)
    boundary.forEach((e1)=>{
        e1.addEventListener("mouseover", changeColor)
    })
    
    function changeColor(e1){
        
        e1.target.style.backgroundColor="red";
    
    }
      }
    