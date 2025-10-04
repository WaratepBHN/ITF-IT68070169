function addHistory(account, cash) {
    const historyList = document.getElementById("history-list");
    const li = document.createElement("li");
    li.textContent = `Current account balance: ${account}, Current cash balance: ${cash}`;
    historyList.appendChild(li);
}

document.getElementById("balance-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const account = document.getElementById("account-balance").value;
    const cash = document.getElementById("cash-balance").value;
    addHistory(account, cash);
});

function addHistory(account, cash) {
    const historyList = document.getElementById("history-list");
    const li = document.createElement("li");
    li.textContent = `Current account balance: ${account}, Current cash balance: ${cash}`;
    historyList.appendChild(li);
}
const accountInput = document.getElementById("account-balance");
const cashInput = document.getElementById("cash-balance");
const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");

depositBtn.addEventListener("click", function() {
    const amount = parseFloat(document.getElementById("operation-amount").value);
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid deposit amount.");
        return;
    }

    let account = parseFloat(accountInput.value);
    account += amount;
    accountInput.value = account;

    addHistory(account, cashInput.value);
});

withdrawBtn.addEventListener("click", function() {
    const amount = parseFloat(document.getElementById("operation-amount").value);
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid withdraw amount.");
        return;
    }

    let account = parseFloat(accountInput.value);
    if (amount > account) {
        alert("Insufficient balance!");
        return;
    }

    account -= amount;
    accountInput.value = account;

    addHistory(account, cashInput.value);
});
