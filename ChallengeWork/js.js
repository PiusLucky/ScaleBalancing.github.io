function scalebalance(){
    ws_array = document.getElementsByTagName('input')[0].value
    list_array = document.getElementsByTagName('input')[1].value
    remark = document.getElementById('remark')
    output_placeholder = document.getElementById('result_placeholder')
    output_placeholder2 = document.getElementById('result_placeholder2')

    // converting ws_array to array for indexing

     a = ws_array.replace(/'/g, '"');
     try {
        a = JSON.parse(a);
     } catch(e) {
        null
     }

     // end converting ws_array to array for indexing

     // Converting list_array to array for indexing
     b = list_array.replace(/'/g, '"');
     try {
        b = JSON.parse(b);
     } catch(e) {
        null
     }

     // end Converting list_array to array for indexing

    let left_weight = a[0]
    let right_weight = a[1]
    let ws_array_length = a.length

    if(ws_array.includes("[") && ws_array.includes("]") && ws_array.includes(",")
    || list_array.includes("[") && list_array.includes("]") && list_array.includes(",")
    ){
            if(left_weight == right_weight) {
            remark.innerHTML = `Remark: Scale Balanced`
            }

            // Checking for the number of elements in the scale in the LHS
            else if (ws_array_length>2){
            remark.innerHTML = 'Error: Sorry! the first element of the scale can only contain two weights(Array)'
            }


            else if(ws_array_length===2){
              // Getting The difference of the weights of the weight scale(WS)
              // The Math.abs converts the data passed into it into absolute values
              // And subtracted to prevent inaccuracies in calculation
                var diff = Math.abs(left_weight - right_weight)
                // I hoisted this block so as to update the remark.innerHTML value 
                remark.innerHTML = ''
                remark.innerHTML += "oops: Scale Imbalanced"
                // end hoist
                for(var i = 0; i < b.length; i++){
                if(b.includes(diff - b[i]) && b.indexOf(b[i]) != b.lastIndexOf(diff- b[i])){
                    output_placeholder.innerHTML = ''
                    remark.innerHTML = ''
                    remark.innerHTML += 'Check Result Below...'

                    // Returning a list of result
                    // for(i=0; i<b[i].length; i++){
                    //  output_placeholder.innerHTML += `${b[i]},${diff - b[i]}`   
                    // }
                    output_placeholder2.innerHTML += 
                    `Adding ${b[i]} to ${diff - b[i]} and Applying to one side balances the scale <br>
                     (${b[i]},${diff - b[i]}) <br>` 

                    
                    // console.log(`${b[i]},${diff - b[i]}`)
                    // Showing the list in ascending order
                    // console.log(`${b[i]},${diff - b[i]}`)
              
            


                }
                
                if  (b.includes(diff + b[i])) {
                    output_placeholder.innerHTML = ''
                    remark.innerHTML = ''
                    remark.innerHTML += 'Check Result Below...'
                   // Accounting for abnormally!
                    if (right_weight === 0){
                     output_placeholder.innerHTML += 
                    `Adding ${b[i]} to LHS & ${diff + b[i]} to the RHS balances the scale<br>
                     (${b[i]},${diff + b[i]}) <br>`   
                     }else{
                        output_placeholder.innerHTML += 
                        `Adding ${diff + b[i]} to LHS &  ${b[i]} to the RHS balances the scale<br>
                         (${b[i]},${diff + b[i]}) <br>` 
                     }

                }


                
                
                }//end for loop
              
            }//end else if
           
    }//end the ws vs list comparison
    
    else{
        remark.innerHTML = ''
        remark.innerHTML += "Error: Your Input must be an Array only"
    }
     
}//end function

var f = function(){
    var focusEventHandler = function(event){
        var divElement = document.getElementById('remark');
        var output_placeholder2 = document.getElementById('result_placeholder2')
        divElement.innerHTML = "Welcome...."
        output_placeholder2.innerHTML = ''
        divElement.style.paddingLeft='17px';
        divElement.style.paddingRight='17px';
    }
    var blurEventHandler = function(event){
        var divElement = document.getElementById('remark');
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
