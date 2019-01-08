//Complying basically to ES2015
"use strict;"
scaleBalance = () => {
ws_value = document.getElementsByTagName('input')[0].value
list_value = document.getElementsByTagName('input')[1].value
remark = document.getElementById("remarks")
result1 = document.getElementById("results")
result2 = document.getElementById("dummyOutput")

//coverting to JS object using JSON.parse
a = ws_value.replace(/'/g, '"');
try{
    a = JSON.parse(ws_value)
}catch(e){
    if(ws_value === '' && list_value === ''){
        remark.innerHTML = ''
        remark.innerHTML += "Please fill the fields"
    }
}
b = list_value.replace(/'/g, '"');
try{
    b = JSON.parse(list_value)
}catch(e){
    if(ws_value === '' && list_value === ''){
        remark.innerHTML = ''
        remark.innerHTML += "Please fill the fields"
    }
}

//sides of weight scale

let leftSide = a[0]
let rightSide = a[1]
let ws_length = a.length

if(
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
        else if (ws_length === 2){
            headResult = document.getElementById("changeOver")
            headResult.innerHTML = `<b>[ click on any of the input fields to clear LOG ]</b>`
            var diff = Math.abs(leftSide - rightSide)
            remark.innerHTML = ''
            remark.innerHTML += "oops: Scale Imbalanced"
            

            for(i=0;i<b.length;i++){
            if(b.includes(diff-b[i]) && b.indexOf(b[i]) != b.lastIndexOf(diff - b[i])){
             remark.innerHTML = ''
             remark.innerHTML += "Checking result now"



             result2.innerHTML += `Adding ${b[i]} to ${diff - b[i]} and applying to one side balances the scale <br>
                (${b[i]},${diff - b[i]}) <br><hr>
             `
             console.log(`${b[i]},${diff - b[i]}`)
             }
             if(b.includes(diff + b[i])){
                remark.innerHTML = ''
                remark.innerHTML += "Checking result now"
                if(rightSide === 0){
                    console.log( `${b[i]},${diff + b[i]}`)
                    
                    result2.innerHTML += `Adding ${b[i]} to the LHS and ${diff + b[i]} to the RHS balances the scale <br>
                    (${b[i]},${diff + b[i]}) <hr> 
                    `

                  

                }else{
                    console.log( `${b[i]},${diff + b[i]}`)
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

var f = () => {
    var focusEventHandler = (event) => {
        var divElement = document.getElementById('remarks');
        var output_placeholder2 = document.getElementById('dummyOutput')
        var headResult = document.getElementById("changeOver")
        headResult.innerHTML = `<b>[ Your Output will be Displayed Below ]</b>`
        
        divElement.innerHTML = "Welcome...."
        output_placeholder2.innerHTML = ''

        divElement.style.paddingLeft='17px';
        divElement.style.paddingRight='17px';

    }
    var blurEventHandler = (event) => {
        var divElement = document.getElementById('remarks');
        divElement.style.backgroundColor = '#4169E1'
    }

    
    var inputElement = document.getElementsByTagName('input')[0];
    inputElement.addEventListener('mouseenter',focusEventHandler,false )
    inputElement.addEventListener('mouseout',blurEventHandler,false )

    var inputElement2 = document.getElementsByTagName('input')[1];
    inputElement2.addEventListener('mouseenter',focusEventHandler,false )
    inputElement2.addEventListener('mouseout',blurEventHandler,false )
    
}
document.addEventListener('DOMContentLoaded', f, false)
