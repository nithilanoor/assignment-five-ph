document.getElementById('btn-donate').addEventListener('click', function(event){
    event.preventDefault();

    const addDonate = document.getElementById('input-donate').value;

    // console.log(addDonate);
    const balance = document.getElementById('account-balance').innerText;
    const balanceNumber = parseFloat(balance);

    if(isNaN(addDonate) || addDonate < 0 || addDonate > balanceNumber){
        alert('Invalid Donation amount.');
        return;
    }

    if(addDonate !== isNaN){

        const balance = document.getElementById('donated-amount').innerText;
        console.log(balance);

        const addDonateNumber = parseFloat(addDonate);
        const balanceNumber = parseFloat(balance);
        const newBalance = addDonateNumber + balanceNumber;
        
        console.log(newBalance);

        document.getElementById('donated-amount').innerText = newBalance;
    }
    else{
        alert('Invalid Donation amount.')
    }

})



document.getElementById('btn-donate-two').addEventListener('click', function(event){
    event.preventDefault();

    const addDonate = document.getElementById('input-donate-two').value;

    // console.log(addDonate);
    const balance = document.getElementById('account-balance').innerText;
    const balanceNumber = parseFloat(balance);

    if(isNaN(addDonate) || addDonate < 0 || addDonate > balanceNumber){
        alert('Invalid Donation amount.');
        return;
    }

    if(addDonate !== isNaN){

        const balance = document.getElementById('donated-amount-two').innerText;
        console.log(balance);

        const addDonateNumber = parseFloat(addDonate);
        const balanceNumber = parseFloat(balance);
        const newBalance = addDonateNumber + balanceNumber;
        
        console.log(newBalance);

        document.getElementById('donated-amount-two').innerText = newBalance;
    }
    else{
        alert('Invalid Donation amount.')
    }

})



document.getElementById('btn-donate-three').addEventListener('click', function(event){
    event.preventDefault();

    const addDonate = document.getElementById('input-donate-three').value;

    // console.log(addDonate);
    const balance = document.getElementById('account-balance').innerText;
    const balanceNumber = parseFloat(balance);

    if(isNaN(addDonate) || addDonate < 0 || addDonate > balanceNumber){
        alert('Invalid Donation amount.');
        return;
    }

    if(addDonate !== isNaN){

        const balance = document.getElementById('donated-amount-three').innerText;
        console.log(balance);

        const addDonateNumber = parseFloat(addDonate);
        const balanceNumber = parseFloat(balance);
        const newBalance = addDonateNumber + balanceNumber;
        
        console.log(newBalance);

        document.getElementById('donated-amount-three').innerText = newBalance;
    }
    else{
        alert('Invalid Donation amount.')
    }

})