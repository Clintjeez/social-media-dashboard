// const switcher = document.getElementById('input')
// const uiMode = () => {
//     if(switcher.checked){
//         style.href='/styles/dark-theme.css'
//     }else{
//         style.href='/styles/light-theme.css'
//     }
// };
// switcher.addEventListener('change', uiMode);


const switcher = document.getElementById('input')
switcher.addEventListener('change', uiMode= () =>{
    switcher.checked ? style.href='/styles/dark-theme.css' 
    : style.href='/styles/light-theme.css'
 })