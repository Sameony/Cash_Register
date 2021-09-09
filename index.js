const bill_amount = document.querySelector("#bill-amount");
const cash_amount = document.querySelector("#cash-amount");
const btn_check  = document.querySelector(".btn-check");
const error_message = document.querySelector("#error-message");

error_message.style.display="none";

//Register
const no_of_notes = document.querySelectorAll(".no-of-notes");

const ourNotes = [1,5,10,20,50,100,500,2000];

function calculateChange(change)
{
    for(var i=ourNotes.length-1;i>=0;i--)
    {
        var curr_num = Math.trunc(change/ourNotes[i]);
        change %= ourNotes[i];
        no_of_notes[i].innerHTML = curr_num;
    }
    

}




function errorHandler(Message)
{
    error_message.style.display="block";
    error_message.innerText = Message;
}


btn_check.addEventListener("click" ,function clickEventHandler(){
    if(parseInt(bill_amount.value)  < 0){
        errorHandler("Invalid bill amount");
    }
    else 
    {
        if(parseInt(cash_amount.value) >= parseInt(bill_amount.value))
        {
            const change_amount = cash_amount.value - bill_amount.value;
            calculateChange(change_amount);
            
        }
        else
        {
            errorHandler("The cash provided should at least be equal to the bill amount");

        }
    }

});