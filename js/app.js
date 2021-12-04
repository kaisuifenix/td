$(document).ready(function () { 
    $("#myInput").on("keyup", function () {//pesquisar dados
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $('.btn-filter').on('click', function () {//filtrar contas
        var $target = $(this).data('target');
        if ($target != 'all') {
          $('.table tr').css('display', 'none');
          $('.table tr[data-status="' + $target + '"]').fadeIn('slow');
        } else {
          $('.table tr').css('display', 'none').fadeIn('slow');
        }
      });
});
function copy(text, target) {//copy
    setTimeout(function() {
    $('#copied_tip').remove();
    }, 800);
    $(target).append("<div class='tip' id='copied_tip'>Copiado!</div>");
    var input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input)
    return result;
    }