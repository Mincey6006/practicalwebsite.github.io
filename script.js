//To change Contact Information
document.getElementById('phone').innerHTML = "enter a new number";
document.getElementById('email').innerHTML = "enter new email";
document.getElementById('location').innerHTML = "enter new location";

//Button to open and close
function closeMe(){
      // Find the element
   		x=document.getElementById("info");
      y=document.getElementById("info1");
      z=document.getElementById("info2");
      a=document.getElementById("info3");
      b=document.getElementById("info4");
      c=document.getElementById("info5");
       //Option 1: Change the style attribute directly
		x.style.display="block";
    y.style.display='block';
    z.style.display="block";
    a.style.display="none";
    b.style.display='none';
    c.style.display="none";




      //Option 2: Change the class
	//x.className="closed";
	}

function openMe(){
      // Find the element
   		x=document.getElementById("info");
      y=document.getElementById("info1");
      z=document.getElementById("info2");
      a=document.getElementById("info3");
      b=document.getElementById("info4");
      c=document.getElementById("info5");
      //Option 1: Change the style attribute directly
      x.style.display="none";
      y.style.display="none";
      z.style.display="none";
      a.style.display="block";
      b.style.display='block';
      c.style.display="block";
   		//Complete the code here
      //Option 2: Change the class
   		//Complete the code here
	}

  // <button type="button" onclick="openMe()">Open!</button>
  // <button type="button" onclick="closeMe()">Close!</button>
  // 	<p id="demo1">You are god damn fucking gay.</p>
