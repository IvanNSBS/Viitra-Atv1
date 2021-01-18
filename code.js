function SolveProblem(){
    let aAmountString = document.getElementById("a-amount").value; 
    let bAmountString = document.getElementById("b-amount").value;

    let aAmount = parseInt(aAmountString);
    let bAmount = parseInt(bAmountString);

    let result = GenerateResultString(aAmount, bAmount);
    document.getElementById("result").innerHTML = result;
}

function UpdateNumber(number, result){
    number.amount--;
    number.recurrency++;
}

function GenerateResultString(aAmount, bAmount){
    let result = '';
    let biggerNumber = {}
    let smallerNumber = {}

    if(aAmount > bAmount)
    {
        biggerNumber.amount = aAmount;
        biggerNumber.character = 'a'
        biggerNumber.recurrency = 0
        
        smallerNumber.amount = bAmount;
        smallerNumber.character = 'b'
        smallerNumber.recurrency = 0
    }
    else{
        biggerNumber.amount = bAmount;
        biggerNumber.character = 'b'
        biggerNumber.recurrency = 0
        
        smallerNumber.amount = aAmount;
        smallerNumber.character = 'a'
        smallerNumber.recurrency = 0
    }
    
    for(let i = 0; i < aAmount + bAmount; i++)
    {
        if(smallerNumber.amount > 0 && smallerNumber.recurrency < 2 && (smallerNumber.amount+2 > biggerNumber.amount || biggerNumber.recurrency >= 2)){
            result = result.concat(smallerNumber.character);
            smallerNumber.amount--;
            smallerNumber.recurrency++;
            biggerNumber.recurrency = 0;
        }
        else if(biggerNumber.amount > 0 && biggerNumber.recurrency < 2)
        {
            result = result.concat(biggerNumber.character);
            biggerNumber.amount--;
            biggerNumber.recurrency++;
            smallerNumber.recurrency = 0;
        }
    }
    return result;
}