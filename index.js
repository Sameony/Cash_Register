const bill_amount = document.querySelector("#bill-amount");
const cash_amount = document.querySelector("#cash-amount");
const btn_check  = document.querySelector(".btn-check");
const error_message = document.querySelector("#error-message");

error_message.style.display="none";


function clickEventHandler(){
    if(bill_amount.value < 0){
        errorHandler("Invalid bill amount");
    }
    else if(cash_amount.value <= bill_amount)
    {
        errorHandler("The cash provided should at least be equal to the bill amount");
    }
    else{
        const change_amount = cash_amount.value - bill_amount.value;
        calculateChange(change_amount);

    }

}

function errorHandler(Message)
{
    error_message.style.display="block";
    error_message.innerText = Message;
}

btn_check.addEventListener("click" ,clickEventHandler);