const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");




function calculateBMI(){
    const heightValue = document.getElementById("height").value / 100;
    const weightValue = document.getElementById("weight").value;

    const bmivalue = weightValue / (heightValue * heightValue);

    bmiInputEl.value = bmivalue;

    if(bmivalue < 18.5){
        weightConditionEl.innerText = "Under Weight"
    } 
    else if (bmivalue >= 18.5 && bmivalue <= 24.9){
        weightConditionEl.innerText = "Normal Weight"
    }
     else if (bmivalue >= 24.9 && bmivalue <= 29.9){
        weightConditionEl.innerText = "Over Weight"
    }
     else if (bmivalue >= 30){
        weightConditionEl.innerText = "Obesity"
    }
}


btnEl.addEventListener("click", calculateBMI);



















