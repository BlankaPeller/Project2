var Orders = [];
function getValue() {
    var PageTitle = document.title;
    var Size = document.getElementsByName('size'); 
    var SizeSelected = ""
    var Milk = document.getElementsByName('milk');
    var MilkSelected = ""
    var Sweetener = document.getElementsByName('sweetener');
    var SweetenerSelected = ""
    var SweetAmount = document.getElementById("sweetamount");
    var Temp = document.getElementsByName('temperature');
    var TempSelected = ""
    var Amount = document.getElementById("amount");

    for (var i = 0, length = Size.length; i < length; i++) {
        if (Size[i].checked) {
            SizeSelected = Size[i].value;
            break;
        }
    }
    for (var i = 0, length = Milk.length; i < length; i++) {
        if (Milk[i].checked) {
            MilkSelected = Milk[i].value;
            break;
        }
    }
    for (var i = 0, length = Sweetener.length; i < length; i++) {
        if (Sweetener[i].checked) {
            SweetenerSelected = Sweetener[i].value;
            break;
        }
    }
    for (var i = 0, length = Temp.length; i < length; i++) {
        if (Temp[i].checked) {
            TempSelected = Temp[i].value;
            break;
        }
    }
    var order = [PageTitle, SizeSelected, MilkSelected, SweetenerSelected, SweetAmount.value, TempSelected, Amount.value];
    var options = document.querySelectorAll('input[type=checkbox]:checked');
    for (var i = 0; i < options.length; i++) {
        order.push(options[i].value);
    }
    Orders.push(order);
    document.getElementById("result").innerHTML = Orders[0];
    sessionStorage.setItem("Orders", JSON.stringify(Orders));
}
