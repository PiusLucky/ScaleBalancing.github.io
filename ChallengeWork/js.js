//Complying basically to ES2015
"use strict;"
scaleBalance = () => {
const ws_value = document.getElementsByTagName('input')[0].value
const list_value = document.getElementsByTagName('input')[1].value
const remark = document.getElementById("remarks")
const result2 = document.getElementById("dummyOutput")

//coverting to JS object using JSON.parse
a = ws_value.replace(/'/g, '"');
try{
    a = JSON.parse(ws_value)
}catch(e){
    null
}
b = list_value.replace(/'/g, '"');
try{
    b = JSON.parse(list_value)
}catch(e){
    null
}

//sides of weight scale

let leftSide = a[0]
let rightSide = a[1]
let ws_length = a.length
let ls_length = b.length

if(ws_value === '' || list_value === ''){
        remark.innerHTML = ''
        remark.innerHTML += "Please fill the fields"
    }

else if(
    ws_value.includes("[") && ws_value.includes("]") && ws_value.includes(",") 
    ||  list_value.includes("[") && list_value.includes("]") && list_value.includes(",")
    ){
        if(leftSide === rightSide){
            remark.innerHTML = ''
            remark.innerHTML += "Remark: Scale Balanced"
        }
        else if(ws_length>2){
            remark.innerHTML = ''
            remark.innerHTML += "Error: Weight Scale takes two weights only"

        }
        else if(ls_length < 2 || list_value.includes(",,") || list_value.includes(",]")){
            remark.innerHTML = ''
            remark.innerHTML += "Error: List of weights must contain two weights or greater (Invalid input)"
        }
        
        else if (ws_length === 2 && ls_length >= 2){
            let headResult = document.getElementById("changeOver")
            headResult.innerHTML = `<b>[ click on any of the input fields to clear LOG ]</b>`
            let diff = Math.abs(leftSide - rightSide)
            remark.innerHTML = ''
            remark.innerHTML += "oops: Scale Imbalanced"
            

            for(let i=0;i<b.length;i++){
            if(b.includes(diff-b[i]) && b.indexOf(b[i]) != b.lastIndexOf(diff - b[i])){
             remark.innerHTML = ''
             remark.innerHTML += "Checking result now"
             result2.innerHTML += `Adding ${b[i]} to ${diff - b[i]} and applying to one side balances the scale <br>
                (${b[i]},${diff - b[i]}) <br><hr>
             `
             }
             if(b.includes(diff + b[i])){
                remark.innerHTML = ''
                remark.innerHTML += "Checking result now"
                if(rightSide === 0){                  
                    result2.innerHTML += `Adding ${b[i]} to the LHS and ${diff + b[i]} to the RHS balances the scale <br>
                    (${b[i]},${diff + b[i]}) <hr> 
                    `
                } else if(leftSide>rightSide){
                    result2.innerHTML += `Adding ${b[i]} to the LHS and ${diff + b[i]} to the RHS  balances the scale <br>
                (${b[i]},${diff + b[i]}) <br> <hr>`
                }
                else{
                    result2.innerHTML += `Adding ${b[i]} to the RHS and ${diff + b[i]} to the LHS balances the scale <br>
                (${b[i]},${diff + b[i]}) <br> <hr>
                    `
                    
                }

             }

              
            }
        }
    }
else{
    remark.innerHTML = ''
    remark.innerHTML += "Your input must be an Array only!"
}

}

let f = () => {
    let focusEventHandler = (event) => {
        let divElement = document.getElementById('remarks');
        let output_placeholder2 = document.getElementById('dummyOutput')
        let headResult = document.getElementById("changeOver")
        headResult.innerHTML = `<b>[ Your Output will be Displayed Below ]</b>`
        
        divElement.innerHTML = "Welcome...."
        output_placeholder2.innerHTML = ''

        divElement.style.paddingLeft='17px';
        divElement.style.paddingRight='17px';

    }
    let blurEventHandler = (event) => {
        let divElement = document.getElementById('remarks');
        divElement.style.backgroundColor = '#4169E1'
    }

    
    let inputElement = document.getElementsByTagName('input')[0];
    inputElement.addEventListener('mouseenter',focusEventHandler,false )
    inputElement.addEventListener('mouseout',blurEventHandler,false )

    let inputElement2 = document.getElementsByTagName('input')[1];
    inputElement2.addEventListener('mouseenter',focusEventHandler,false )
    inputElement2.addEventListener('mouseout',blurEventHandler,false )
    
}
document.addEventListener('DOMContentLoaded', f, false)





