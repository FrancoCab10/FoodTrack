var maxStock = 500;

function addElement(id, name, color, icon, amount) {
    
    var percentage = Math.round((amount*100) / maxStock);
    var html = '<tr>'+
    '<th scope="row">'+id+'</th>'+
    '<td><i class="'+icon+'" style="font-size:30px;"></i>'+ name +'</td>'+
    '<td>'+
        '<div class="progress">'+
            '<div class="progress-bar progress-bar-striped" role="progressbar" style="width: '+ percentage+'%; background: '+color+'" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"> '+percentage+' %</div>'+
        '</div>'+
    '</td>'+
    '<td>'+
        '<div class="input-group mb-3">'+
            '<input type="number" value="'+amount+'" class="form-control" id="txt-value-'+id+'">'+
            '<div class="input-group-append">'+
                '<button class="btn btn-outline-secondary" type="button" onclick="changeStock('+id+')" >Save</button>'+
            '</div>'+
        '</div>'+
    '</td>'+
'</tr>';
    var tableBody = document.getElementById('tableStock');
    tableBody.innerHTML += html; 
    
}


async function changeStock(id) {
    
    var value = document.getElementById('txt-value-'+id).value;
    
    if( 0 < value && value <= 500){
        console.log(id,value);
        updateStock(id,value);

        var resp = await updateStock(id,value)
        if( ! resp.error) {
            initialize();
        }   
        else {
            alert ("the stock could not be updated");
        }
    }
    else{
        alert("tiene que ser mayor a 0 y menor que 500")
    }
}

async function initialize() {
    var allStock = await getAllStock();

    document.getElementById('tableStock').innerHTML = '';

    for(var i=0; i < allStock.length; i++){
        var item = allStock[i];
        addElement(item.id, item.food.name, item.food.color, item.food.icon, item.amount)
    }
}
initialize();

