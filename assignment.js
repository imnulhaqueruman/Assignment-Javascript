function kilometerToMeter(ditsanceInKilometer){
    if(ditsanceInKilometer<0){
        return("Distance can't be negative");
    }
    var convertMeter = (ditsanceInKilometer*1000);
   
    return convertMeter;
}


function budgetCalculator(watch,phone,laptop){
    if(watch<0 || phone<0|| laptop<0){
        return("product number can't be negative")
    }
    var watchCost = watch * 50;
    var phoneCost = phone * 100;
    var laptopCost = laptop * 500;
    var totalBudget = (watchCost+phoneCost+laptopCost);
    return totalBudget;

}

function hotelCost(day){
    var totalCost = 0;
    if(day<=10){
        totalCost = day*100;
    }
    // 10-20days
    else if(day<=20){
        var firstTenDays = 10*100;
        var remainingDay = day - 10;
        var extraDayCost = remainingDay * 80;
        totalCost = firstTenDays + extraDayCost;

    }
    // 21-infinity  days
    else{
        var firstTenDays = 10*100;
        var secondTenDays = 10*80;
        var remainingDay = day - 20;
        var extraDayCost = remainingDay * 50;
        totalCost = firstTenDays + secondTenDays + extraDayCost;
    }
    return totalCost;
}

function megaFriend(friendList){
    if(friendList.length == 0){
        return("List is empty.Please Try again.")
    }
    var largeSize = friendList[0].length;
    var largeName = friendList[0];
    for(var i = 0; i<friendList.length; i++){
        var element = friendList[i].length;
        if(element>largeSize){
            largeName = friendList[i];
            largeSize = element;
        }
    }
    return largeName;
}