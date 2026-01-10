
// function myFunction(event){
//     let text = event.target.nodeName;
//     console.log(text);
// }


// let target = document.body.onclick=(event)=>{
//     event.preventDefault();
//     // console.log(event.target.nodeName);
//     // console.log(event.currentTarget.nodeName);
//     // console.log(event.target.style);
//     // console.log(event.target.value);
//     // console.log(event.target.classList);
//     // console.log(event.target.closest('button'));
//     // console.log(event.target.classList.contains('.box'));
//     const btn = event.target.closest('button');
//     if(btn){
//         let btnVal = btn.value;
//         console.log(btnVal);
//     }
//     return;
// };

let target = document.body.onclick=(event)=>{
    event.preventDefault();
    const button = event.target.closest('button');
    if(button){
        let buttonValue = button.value;
        console.info(buttonValue);

        let input = document.querySelector('input');
        if(buttonValue.toUpperCase().trim()==="CLEAR"){
            input.value="0";
            console.warn("Cleared!");
            return;
        }

        let getCurrentOperation = document.querySelector('input');
        getCurrentOperation.value += "hello world";
        
        console.info("value:", getCurrentOperation);
        
    }
    return;
}