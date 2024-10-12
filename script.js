function openForm(productName, price) {
    document.getElementById("productName").value = productName;
    document.getElementById("price").value = price;
    
    document.getElementById("purchaseForm").style.display = "block";
}

function closeForm() {
    document.getElementById("purchaseForm").style.display = "none";
}

function submitForm(event) {
    event.preventDefault();
    
    // ??? ????? ????? ????? ??????? ???????? ??? ??????? ??? ??????
    alert("Ordered successfully!");
    
    closeForm();
}