$(function() {

    var computadores = [
        'Asus', 'Lenovo', 'thoshiba', 'HP'
    ]



    for (let i = 0; i < computadores.length; i++) {
        const cell = computadores[i];
        console.log(cell);
        $('#lista-computadores').append(`
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

    $('#lista-computadores').on('click', '.btn-eliminar', function() {
        $('#dialogEliminar').dialog('open')
    })


});