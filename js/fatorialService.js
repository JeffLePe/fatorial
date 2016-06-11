var fatorialService = {
    
    setForm: function() {
        var number = document.getElementById('form-number');
        number.addEventListener('submit', fatorialService.eventSubmitHandler);
    },
    
    eventSubmitHandler: function(event) {
        event.preventDefault();
        var inputNumber = document.getElementById('number');
        fatorialService.calcFatorial(inputNumber.value);
        inputNumber = "";
    },
    
    calcFatorial: function(number) {
        if(number == 0 || number == 1) fatorialService.displayResult(1);
        else{
            var result = 1;
            for(var i = number; i >= 1; i--){
                result = result * i;
            }
            fatorialService.displayResult(result);
        }
    },
    
    displayResult: function(number) {
        var result = fatorialService.createItemResult(number);
        var item = document.getElementById('result');
        item.appendChild(result);
    },
    
    createItemResult: function(value) {
        var itemResult = document.createElement('p');
        itemResult.innerHTML = value;
        return itemResult;
    }
}

//init
fatorialService.setForm();