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
        errorHandler("Invalid cash amount");
    }
    else{

    }

}

function errorHandler(Message)
{
    error_message.style.display="block";
    error_message.innerText = Message;
}

btn_check.addEventListener("click" ,clickEventHandler);