$(function() {

    var celulares = [
        'LG', 'Motorola', 'Xiaomi', 'Samsung'
    ]



    for (let i = 0; i < celulares.length; i++) {
        const cell = celulares[i];
        console.log(cell);
        $('#lista-celulares').append(`
            <li>
                <span class="row">

                    <span class="col">
                        ${cell}
                    </span>
                    <span class="col">
                        <a href="#" class="btn-eliminar">eliminar</a>
                    </span>
                    
                </span>
               
            </li>
            
        `);

    }

    $('#dialogEliminar').dialog({
        autoOpen: false,
        modal: true,
        buttons: {

            'Acepto': function() {
                alert('eliminado');
            }
        },
        Cancel: function() {
            console.log('hola qe')
        }

    });

    $('#lista-celulares').on('click', '.btn-eliminar', function() {
        $('#dialogEliminar').dialog('open')
    })


});