function validaFooter() {

    var footernome = jQuery("#footer-nome").val();
    var footeremail = jQuery("#footer-email").val();
    var footeremailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    if (footeremail == '') {
        jQuery("#footer-email").attr("placeholder", "Preencha seu Email");
        jQuery("#footer-email").addClass('error');
        jQuery("#footer-email").addClass('animated');
        jQuery("#footer-email").addClass('shake');
        return false;
    }
    if (!footeremailReg.test(footeremail)) {
        jQuery("#footer-status").html("Por favor, preencha um e-mail válido.").show();
        return false;
    }

    if (footernome == '') {
        jQuery("#footer-nome").attr("placeholder", "Preencha a Senha");
        jQuery("#footer-nome").addClass('error');
        jQuery("#footer-status").hide();
        jQuery("#footer-nome").addClass('animated');
        jQuery("#footer-nome").addClass('shake');
        return false;
    }

    jQuery("#footer-enviar").val('Aguarde, entrando...');
    jQuery("#footer-enviar").prop("disabled", true);
    window.location.replace("../../portal.html");
    return true;

}

function redireciona() {
    if (validaFooter()) {
        location.href = "portal.html";
    }
}