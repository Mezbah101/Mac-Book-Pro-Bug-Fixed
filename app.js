function updatePrice(buttonNumber) {
    //Memory

    if (buttonNumber == "memoryBtnOne") {
        var currentCost = 0;
    document.getElementById("memory-extra-cost").innerText = currentCost; 
    }
    if (buttonNumber == "memoryBtnTwo") {
        var currentCost = 180;
    document.getElementById("memory-extra-cost").innerText = currentCost; 
  
    }


    //Storage

    if (buttonNumber == "storageBtnOne") {
        var currentCost = 0;
    document.getElementById("storage-extra-cost").innerText = currentCost; 
   
    }
     if (buttonNumber == "storageBtnTwo") {
        var currentCost = 100;
    document.getElementById("storage-extra-cost").innerText = currentCost; 
   
    }
     if (buttonNumber == "storageBtnThree") {
        var currentCost = 180;
    document.getElementById("storage-extra-cost").innerText = currentCost; 
   
    }

    //Delivery


    if (buttonNumber == "deliveryBtnOne") {
        var currentCost = 0;
    document.getElementById("delivery-extra-cost").innerText = currentCost; 
   
    }
     if (buttonNumber == "deliveryBtnTwo") {
        var currentCost = 20;
    document.getElementById("delivery-extra-cost").innerText = currentCost; 
   
    }
     updateTotalPrie()

}

//Update Total Price 



function updateTotalPrie() {

 var memoryCost = parseInt(document.getElementById("memory-extra-cost").innerText);
 console.log(memoryCost);

 var storageCost =parseInt( document.getElementById("storage-extra-cost").innerText);
 console.log(storageCost);


 var deliveryCost = parseInt(document.getElementById("delivery-extra-cost").innerText);
 console.log(deliveryCost);


 var totalCost = 1299 + memoryCost + storageCost + deliveryCost;

 document.getElementById("total-cost").innerText = totalCost;

  //Ultimate Total Section 

  var ultimateTotal= 1299 + memoryCost + storageCost + deliveryCost;
  document.getElementById ("ultimate-total").innerText = ultimateTotal;


    
}







// For Memory Buttons

document.getElementById("memory-button-one").addEventListener("click", function () {
    
 updatePrice("memoryBtnOne")
})

document.getElementById("memory-button-two").addEventListener("click", function () {
    
    updatePrice ("memoryBtnTwo")

})



// For Storage Buttons

document.getElementById("storage-button-one").addEventListener("click", function () {

    updatePrice("storageBtnOne");

    
})

document.getElementById("storage-button-two").addEventListener("click", function () {

    updatePrice("storageBtnTwo");
    
})

document.getElementById("storage-button-three").addEventListener("click", function () {

    updatePrice("storageBtnThree")
     
})


//For Delivery Buttons

document.getElementById("delivery-button-one").addEventListener("click", function () {

    updatePrice ("deliveryBtnOne")
    
})

  
document.getElementById("delivery-button-two").addEventListener("click", function () {

    updatePrice ("deliveryBtnTwo")
    
})


//Promo Code Section --- Bonus Part 


document.getElementById("apply-btn").addEventListener("click", function () {
if (document.getElementById("promo-code").value == "stevekaku") {

var previousAmount = parseInt(document.getElementById("total-cost").innerText);


var discountAmount = (previousAmount*20)/100;


var ultimateTotalAmount = previousAmount - discountAmount;

document.getElementById("ultimate-total").innerText = ultimateTotalAmount

document.getElementById("promo-code").value = ""


}
})