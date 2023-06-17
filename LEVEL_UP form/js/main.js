// $('user').on("keypress", function(e) {
  
//     var char = /["a-z"]/;
//     var val = String.fromCharCode(e.which);
//     var test = char.test(val);
    
//     if(!test) return false
//   })



function Clear() {
  document.getElementById('lock').value = "";
  document.getElementById('user').value = "";
 }


const btnPass = document.querySelector('lock');
const inputPass = document.querySelector('open');

btnPass.onClick = function () {
  // if (inputPass.gef)
}