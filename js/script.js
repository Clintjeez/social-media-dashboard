// Note: this code block does same thing with the one below and 
// both cant be use at the same it just a similar controller with 
// a different coding style

// UI Mode controller
// const switcher = document.getElementById('input')
// const uiMode = () => {
//     if(switcher.checked){
//         style.href='/styles/dark-theme.css'
//     }else{
//         style.href='/styles/light-theme.css'
//     }
// };
// switcher.addEventListener('change', uiMode);


// UI Mode controller
const switcher = document.getElementById("input");
switcher.addEventListener(
  "change",
  (uiMode = () => {
    switcher.checked
      ? (style.href = "/styles/dark-theme.css")
      : (style.href = "/styles/light-theme.css");
  })
);
