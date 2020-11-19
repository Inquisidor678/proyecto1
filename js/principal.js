$(function() {

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


    $('.btn-eliminar').on('click', function() {

        $('#dialogEliminar').dialog('open');


    })
})