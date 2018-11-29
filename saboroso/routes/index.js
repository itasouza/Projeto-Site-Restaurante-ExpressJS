var conexao = require('./../inc/db');
var express = require('express');
var menus   = require('./../inc/menus');
var reservations   = require('./../inc/reservations');
var contacts   = require('./../inc/contacts');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  menus.getMenus().then(results => {

    reservations.renderPaginaIndex(req,res,results);

  });

});

router.post('/',function(req,res,next){

  menus.getMenus().then(results => {

      if(!req.body.name){
        reservations.renderPaginaIndex(req,res,results,"Por favor preencha o seu nome.");
      }else if(!req.body.email){
        reservations.renderPaginaIndex(req,res,results,"Por favor preencha o seu email.");
      }else if(!req.body.people){
        reservations.renderPaginaIndex(req,res,results,"Por favor selecione o número de pessoas.");
      }else if(!req.body.date){
        reservations.renderPaginaIndex(req,res,results,"Por favor selecione uma data.");
      }else if (!req.body.time){
        reservations.renderPaginaIndex(req,res,results,"Por favor selecione uma hora.");
      }else{
          reservations.save(req.body).then(resultado => {
            req.body = {};
            reservations.renderPaginaIndex(req,res, results, null,"Registro gravado com sucesso!");
          }).catch(err =>{
            reservations.renderPaginaIndex(req,res,results, err.message,null);
          });
      }
    
    });

});


router.get('/contacts',function(req,res,next){

  contacts.renderPaginaContato(req,res);

});

router.post('/contacts',function(req,res,next){

  if(!req.body.name){
    contacts.renderPaginaContato(req,res,"Por favor preencha o seu nome.");
  }else if(!req.body.email){
    contacts.renderPaginaContato(req,res,"Por favor preencha o seu email.");
  }else if(!req.body.message){
    contacts.renderPaginaContato(req,res,"Por favor adicionar um comentário.");
  }else{
    
    contacts.save(req.body).then(results => {

      req.body = {};
      contacts.renderPaginaContato(req,res, null,"Contato gravado com sucesso!");
    }).catch(err =>{
      contacts.renderPaginaContato(req,res,err.message,null);
    });
    
  }


});

router.get('/menus', function (req, res, next) {

  menus.getMenus().then(results => {
    res.render('menus', {
      title: 'Menu - Restaurante Saboroso!',
      background: 'images/img_bg_4.jpg',
      h1: 'Saboreie nosso menu!',
      menus: results
    });
  });

});

router.get('/reservations',function(req,res,next){

  reservations.renderPaginaReserva(req,res,null,null);

});


router.post('/reservations',function(req,res,next){

    if(!req.body.name){
      reservations.renderPaginaReserva(req,res,"Por favor preencha o seu nome.");
    }else if(!req.body.email){
      reservations.renderPaginaReserva(req,res,"Por favor preencha o seu email.");
    }else if(!req.body.people){
      reservations.renderPaginaReserva(req,res,"Por favor selecione o número de pessoas.");
    }else if(!req.body.date){
      reservations.renderPaginaReserva(req,res,"Por favor selecione uma data.");
    }else if (!req.body.time){
      reservations.renderPaginaReserva(req,res,"Por favor selecione uma hora.");
    }else{
        reservations.save(req.body).then(results => {

          req.body = {};
          reservations.renderPaginaReserva(req,res, null,"Registro gravado com sucesso!");
        }).catch(err =>{
          reservations.renderPaginaReserva(req,res,err.message,null);
        });
    }
  
});


router.get('/services',function(req,res,next){
  res.render('services',{
    title: 'Serviços - Restaurante Saboroso!',
    background: 'images/img_bg_5.jpg',
    h1: 'É um prazer poder servir!'
  })
});


module.exports = router;
