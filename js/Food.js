

async function addFood() {

    var foodName = document.getElementById('food-name-selection').value;
    var foodColor = document.getElementById('food-color-selection').value;
    var foodIcon = document.getElementById('food-icon-selection').value;

    var resp = await createFood(foodName, foodColor, foodIcon)
        
    if ( ! resp.error ) {
        alert('The food was saved');
    }
    else {
        alert('The food was not saved');
    }
    
}