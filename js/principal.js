$(function() {

            var celulares = [
                'LG', 'Motorola', 'Xiaomi', 'Samsung'
            ]



            for (let i = 0; i < celulares.length; i++) {
                const cell = celulares[i];
                console.log(cell);
                $('#lista-celulares').append(´ < li > $ { cell } < /li>´);

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


                $('.btn-eliminar').on('click', function() {

                    $('#dialogEliminar').dialog('open');


                })
            })