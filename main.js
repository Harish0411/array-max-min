let array = [3060, 4, 63, 74, 81, 43, 54, 12, 25, 37, -86, -30, 224, 1329, 75]

// Minimum number in the array
	 
function MaxNum(){
      let max=array[2];
	  for(var i=0; i<array.length;i++){
	     if(array[i]>max){
		 max=array[i];}
	 }
	 return max;
}
console.log(MaxNum());



// Minimum number in the array

function MinNum(){
      let min=array[2];
	  for(var i=0; i<array.length;i++){
	     if(array[i]<min){
		 min=array[i];}
	 }
	 return min;
}
console.log(MinNum());