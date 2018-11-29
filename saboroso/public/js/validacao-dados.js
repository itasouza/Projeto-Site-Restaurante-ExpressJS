

$(document).ready(function () {
  $('.cep').mask('00000-000');
  $('.telefone').mask('(00)00000-0000');
  $('.campovalor').mask('#.##0,00', { reverse: true });
  $('.cpf').mask('000.000.000-00', { reverse: true });
  $('.cnpj').mask('00.000.000/0000-00', { reverse: true });
});

//==========================================================
/* validação dados do contato */
$('#contato').validate({
  messages: {
    name: {
      required: 'Por favor preencha o seu nome.',
    },
    email: {
      required: 'Por favor preencha o seu email.',
    },
    message: {
      required: 'Adicionar uma mensagem.',
    },
  },
  onkeyup: false,
  errorElement: 'div',
  errorPlacement: function (error, element) {
    error.appendTo(element.parent().siblings('.input-error'));
  }
});
//==========================================================

/* validação dados do subscribe */
$('#subscribe').validate({
  messages: {
    email: {
      required: 'Por favor preencha o seu email.',
    },
  },
  onkeyup: false,
  errorElement: 'div',
  errorPlacement: function (error, element) {
    error.appendTo(element.parent().siblings('.input-error'));
  }
});

//==========================================================
/* validação dados do reservations */
$('#reservations').validate({
  messages: {
    name: {
      required: 'Por favor preencha o seu nome.',
    },
    email: {
      required: 'Por favor preencha o seu email.',
    },
    people: {
      required: 'Por favor selecione uma opção.',
    },
    date: {
      required: 'Por favor selecione uma data.',
    },
    time: {
      required: 'Por favor selecione uma hora.',
    },
  },
  onkeyup: false,
  errorElement: 'div',
  errorPlacement: function (error, element) {
    error.appendTo(element.parent().siblings('.input-error'));
  }
});

   //==========================================================
    