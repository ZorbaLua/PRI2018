$(()=>{

    var formData = new FormData()

    $('#ficheiros').load('http://localhost:4008/files')
    $('#adic').click(e=>{
        
        e.preventDefault()
        var ficheiro = $('#fil')
        var i = ficheiro[0].files[0]

        $('#ficheiros').append('<li><a href=\'http://localhost:4008/uploaded/' + 
        i.name +'\'>' + i.name + '</a>'  + '<p>' + texto.value + '</p></li>')

        formData.append('file', i)
        ajaxNF(i.name)
    })


    function ajaxNF(name){
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "http://localhost:4008/file/guardar",
            data: JSON.stringify({desc: $('#texto').val(), filename: name}),
            success: p => alert('Ficheiro carregado com sucesso'),
            error: e => { alert('Erro no carregamento do ficheiro') }
        })
    }
    
})