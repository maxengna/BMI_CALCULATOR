function Cal_bmi(){
    
    // location.reload()
    
    var Weight =  document.querySelector("#Value-kilo").value
    var Height = document.querySelector("#Value-metre").value
    var Output = document.querySelector("#result") 
    var row1 = document.querySelector(".bmi-knowledge-table tr:nth-of-type(1)")
    var row2 = document.querySelector(".bmi-knowledge-table tr:nth-of-type(2)")
    var row3 = document.querySelector(".bmi-knowledge-table tr:nth-of-type(3)")
    var row4 = document.querySelector(".bmi-knowledge-table tr:nth-of-type(4)")
    var row5 = document.querySelector(".bmi-knowledge-table tr:nth-of-type(5)")
    var row6 = document.querySelector(".bmi-knowledge-table tr:nth-of-type(6)")
    var table = document.querySelector(".bmi-knowledge-table").childElementCount
    var visible = document.querySelector(".bmi-knowledge-table").style.display
    
   
    if(Weight != "" && Height != "" ){
        
        var conv_metre =  parseFloat(Height/100)   
        var final_bmi =   parseFloat(Weight/(conv_metre * conv_metre))
        final_bmi = final_bmi.toFixed(2)
        
        if(final_bmi <= 18.5){
            Output.style.backgroundColor = "green"
            
            row3.style.display = "none"
            row4.style.display = "none"
            row5.style.display = "none"
            row6.style.display = "none"
        
        }
        else if(final_bmi > 18.5 && final_bmi <= 22.9){
            Output.style.backgroundColor = "yellow"
            row2.style.display = "none"
            row4.style.display = "none"
            row5.style.display = "none"
            row6.style.display = "none"
        }
        else if(final_bmi > 23.0 && final_bmi <= 24.9){
            Output.style.backgroundColor = "orange"
            row2.style.display = "none"
            row3.style.display = "none"
            row5.style.display = "none"
            row6.style.display = "none"
     
       }
        else if(final_bmi > 25.0 && final_bmi <= 29.9){
            Output.style.backgroundColor = "red"
            row2.style.display = "none"
            row3.style.display = "none"
            row4.style.display = "none"
            row6.style.display = "none"
     
        }
        else
        {
            Output.style.backgroundColor = "darkred"
            row2.style.display = "none"
            row3.style.display = "none"
            row4.style.display = "none"
            row5.style.display = "none"
     
      
        }
        
        Output.value  =  "Your BMI :" + final_bmi
        
    }
    else
    {
        location.reload()
    }
   
  
}



function Refresh_Page(){
    location.reload();
}
    







