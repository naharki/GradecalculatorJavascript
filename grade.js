function calculate(){
  
    let a=parseInt(document.getElementById('bookOne').value);
    let b=parseInt(document.getElementById('bookTwo').value);
    let c=parseInt(document.getElementById('bookThree').value);
    let d=parseInt(document.getElementById('bookFour').value);
    let e=parseInt(document.getElementById('bookFive').value);
   
    if(a>100 ||b>100 || c>100 || d>100 || e>100  ){
        alert("Please enter the correct marks");
    }
    else
    {
        var obtained_marks=a+b+c+d+e;
        document.getElementById("obtained_marks").innerHTML=obtained_marks;
       
        let percentage_value=obtained_marks/500*100;
       document.getElementById("percentage_value").innerHTML=percentage_value + "%";
      
       if (a>40 && b>40 && c>40 && d>40 &&  e>40 ) {
            document.getElementById("remarks").innerHTML="<span style='color:#292'>PASS";
        } else {
            
            document.getElementById("remarks").innerHTML="<span style='color:red'>:Fail";
        }
     
    if ( percentage_value >=80) {
        document.getElementById("grade").innerHTML=" <span style='color:green'>A";
        
    } else if (percentage_value >=60){
        document.getElementById("grade").innerHTML="<span style='color:blue'>B";         
    }
    else if (percentage_value >=50){
        document.getElementById("grade").innerHTML="<span style='color:yellow'>C";
    }
    else if(percentage_value >=40){
        document.getElementById("grade").innerHTML="<span style='color:black'>D ";
    }
  else{
      document.getElementById("grade").innerHTML="<span style='color:red'>:Fail";
  }
    
    } 
}