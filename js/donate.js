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

        // donation history
        const div = document.createElement('div');
        div.classList.add('border');
        div.classList.add('border-gray-200');
        div.classList.add('rounded-lg');
        div.classList.add('lg:w-1/2');
        div.classList.add('mx-auto');
        div.classList.add('mb-5');
        div.classList.add('py-4');
        div.innerHTML = `
            <h4 class="font-bold text-xl">${addDonate} Taka is Donated for Donate for Flood at Noakhali, Bangladesh</h4>
            <p>Date: ${new Date}</p>
        `
        document.getElementById('history-container').appendChild(div);

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

        // donation history
        const div = document.createElement('div');
        div.classList.add('border');
        div.classList.add('border-gray-200');
        div.classList.add('rounded-lg');
        div.classList.add('lg:w-1/2');
        div.classList.add('mx-auto');
        div.classList.add('mb-5');
        div.classList.add('py-4');
        div.innerHTML = `
            <h4 class="font-bold text-xl">${addDonate} Taka is Donated for Donate for Flood Relief in Feni,Bangladesh</h4>
            <p>Date: ${new Date}</p>
        `
        document.getElementById('history-container').appendChild(div);

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

        // donation history
        const div = document.createElement('div');
        div.classList.add('border');
        div.classList.add('border-gray-200');
        div.classList.add('rounded-lg');
        div.classList.add('lg:w-1/2');
        div.classList.add('mx-auto');
        div.classList.add('mb-5');
        div.classList.add('py-4');
        div.innerHTML = `
            <h4 class="font-bold text-xl">${addDonate} Taka is Donated for Aid for Injured in the Quota Movement</h4>
            <p>Date: ${new Date}</p>
        `
        document.getElementById('history-container').appendChild(div);

    }
    else{
        alert('Invalid Donation amount.')
    }

})