# ScaleBalancing
A simple webapp to balance scale with two weights passed in a single array which utililes weights passed in the second input array. The input fields are well validated using vanilla javascript with critical use of event listeners. 
For example: if a scale is [5,9] and the second input array(list of arrays) is [1, 2, 6, 7] then this means there is a balance scale with a weight of 5 on the left side and 9 on the right side. It is in fact possible to balance
this scale by adding a 6 to the left side from the list of weights and adding a 2 to the right
side. Both scales will now equal 11 and they are perfectly balanced. The webapp
returns a comma separated string of the weights that were used from the list in
ascending order, so for this example returns the string 2,6. 
check out the pen: https://codepen.io/lucky-pius/pen/PXeVxz
