

const input = document.getElementById('input');
const btn = document.getElementById('gstHandler'); 
let inpVal;

function GST() {
  inpVal = parseFloat(input.value) || input.value;
  const gstPercent = document.getElementById('gstDrop').value; 
  console.log(gstPercent);
  
  if (inpVal>0) {
    let gstPrice = parseFloat(inpVal * (gstPercent / 100)); 
    console.log(inpVal);
    console.log(gstPrice + inpVal);
    return Math.round(inpVal + gstPrice);
  } else {
   alert('Input value is empty or not a number');
  }
}


btn.addEventListener('click', () => {
  const calculatedGST = GST()
  console.log(calculatedGST);
  
  document.getElementById("gstPrice").innerHTML = inpVal?`<h2>Calculated GST Price : ${calculatedGST}</h2>`:'';
});
