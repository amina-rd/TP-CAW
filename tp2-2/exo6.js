window.onload = () => {
	let start = document.getElementById("start");
	let status = document.getElementById("status");
	let b = false;
	let boundary = document.querySelectorAll("#maze .boundary");
	start.addEventListener("click", () => {
	  status.innerHTML = 'Move your mouse over the "S" to begin.';
	  b = true;
	  boundary.forEach((e1) => {
		e1.style.backgroundColor = "#eeeeee";
	  });
	  boundary.forEach((e1) => {
		e1.addEventListener("mouseover", () => {
		  boundary.forEach((e1) => {
			e1.style.backgroundColor = "red";
		  });
  
		  b = false;
		  if (b == false) {
			status.innerHTML =
			  '<strong style ="color : red"> You Lost !</strong><br> Move your mouse over the "S" to begin.';
		  }
		});
	  });
  
	  document.getElementById("end").onmouseover = () => {
		if (b == true) {
		  status.innerHTML =
			'<strong style ="color : green"> You Win !</strong><br> Move your mouse over the "S" to begin.';
		} else {
		  status.innerHTML =
			'<strong style ="color : red"> You Lost !</strong><br> Move your mouse over the "S" to begin.';
		}
	  };
	});
  };
  