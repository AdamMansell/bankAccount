function BankAccount(name, amount, deposit, withdrawal) {
  this.name = name,
  this.amount = amount,
    this.withdrawal = withdrawal,
    this.deposit = deposit
}

BankAccount.prototype.transaction = function () {
  let answer1;
  let amount = parseInt(this.amount);
  let withdrawal = parseInt(this.withdrawal);
  let deposit = parseInt(this.deposit);
  if (withdrawal) {
    answer1 = amount -= withdrawal;
  } else if (deposit) {
    answer1 = amount += deposit
  }
  return answer1;
}

$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();

    const nameInput = $("#account-name").val();
    const initDepoInput = $("#initial-deposit").val();
    const depoAmoInput = $("#deposit-amount").val();
    const withAmoInput = $("#withdrawal-amount").val();

    let myBankAccount = new BankAccount(nameInput, initDepoInput, depoAmoInput, withAmoInput);
    let myBalance = myBankAccount.transaction()

    console.log(myBalance);

    $("#myBalance").text(myBalance);
    $("#myBalance-name").text(nameInput);
    $("#balanceH3").show();
  })
})
