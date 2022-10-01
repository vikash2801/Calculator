function myCalc(){
    let string = "";
    let buttons = document.querySelectorAll('.button');
    Array.from(buttons).forEach( (button) =>{
        
            button.addEventListener('click', (e)=>{
                if(e.target.innerHTML == '='){
                    
                    try{
                        string = eval(string);
                        document.querySelector('input').value = string;
                    }
                    catch(err){
                        document.querySelector('input').value = 'INVALID OPERATION';
                    }

                }
                else if(e.target.innerHTML == 'Clr'){
                    string = "";
                    document.querySelector('input').value = string;
                }
                else if(e.target.innerHTML == 'Del'){
                    string = string.slice(0, -1);
                    document.querySelector('input').value = string;
                }
                else{
                    console.log(e.target);
                    if(document.querySelector('input').value == 'INVALID OPERATION'){
                        string = e.target.innerHTML;    
                    }
                    else{
                        string = string + e.target.innerHTML;
                    }
                    document.querySelector('input').value = string;
                    
                }
            })  
       
    })

}

