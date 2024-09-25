document.getElementById('btn-donate').addEventListener('click', function(event){
    event.preventDefault();
    

    const cashDonate = document.getElementById('input-donate').value;
    const cashDonateNumber = parseFloat(cashDonate);
    
    if(cashDonate !== isNaN){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        if(cashDonate > balanceNumber || cashDonate < 0 || isNaN(cashDonate)){
            alert('Invalid Donation amount');
            return;
        }
        const newBalance = balanceNumber - cashDonateNumber;

        document.getElementById('account-balance').innerText = newBalance;   
    }
    else{
        alert('Invalid Donation amount');
    }

})



document.getElementById('btn-donate-two').addEventListener('click', function(event){
    event.preventDefault();
    

    const cashDonate = document.getElementById('input-donate-two').value;
    const cashDonateNumber = parseFloat(cashDonate);
    
    if(cashDonate !== isNaN){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        if(cashDonate > balanceNumber || cashDonate < 0 || isNaN(cashDonate)){
            alert('Invalid Donation amount');
            return;
        }

        const newBalance = balanceNumber - cashDonateNumber;

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Invalid Donation amount');
    }

})



document.getElementById('btn-donate-three').addEventListener('click', function(event){
    event.preventDefault();
    

    const cashDonate = document.getElementById('input-donate-three').value;
    const cashDonateNumber = parseFloat(cashDonate);
    
    if(cashDonate !== isNaN){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        if(cashDonate > balanceNumber || cashDonate < 0 || isNaN(cashDonate)){
            alert('Invalid Donation amount');
            return;
        }

        const newBalance = balanceNumber - cashDonateNumber;

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Invalid Donation amount');
    }

})