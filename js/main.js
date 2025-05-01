$(document).ready(function(){
    $("#carousel-imagens").slick({
        autoplay:true
    })

    $(".menu-hamburguer").click(function(){
        $("nav").slideToggle();
    })

    $("#telefone").mask("(00) 00000-0000")

    $("form").validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            }
        },
        messages: {
            nome: "Por favor, insira o seu nome"
        }
    })

    $(".lista-veiculos button").click(function(){
        const destino = $("#contato");

        const nomeVeiculo = $(this).parent().find("h3").text()

        $("#veiculo-interesse").val(nomeVeiculo)

        $("html, body").animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})