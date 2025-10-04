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
const proceedBtn = document.getElementById("proceed-btn");

proceedBtn.addEventListener("click", function() {
    const type = document.getElementById("operation-type").value;
    const amount = parseFloat(document.getElementById("operation-amount").value);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    let account = parseFloat(accountInput.value);
    let cash = parseFloat(cashInput.value);

    if (type === "deposit") {
        if (amount > cash) {
            alert("Not enough cash to deposit!");
            return;
        }
        account += amount;
        cash -= amount;
    } else if (type === "withdraw") {
        if (amount > account) {
            alert("Insufficient account balance!");
            return;
        }
        account -= amount;
        cash += amount;
    }

    accountInput.value = account;
    cashInput.value = cash;

    addHistory(account, cash);
    document.getElementById("operation-amount").value = "";
});