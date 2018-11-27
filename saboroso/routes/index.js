var conexao = require('./../inc/db');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {


  conexao.query("select * from tb_menus order by title",(err,results)=>{
    if(err){
      console.log(err);
    }

    res.render('index', { 
      title: 'Restaurante Saboroso!',
      menus: results
    });

 });

});


router.get('/contacts',function(req,res,next){
    res.render('contacts',{
      title: 'Contato - Restaurante Saboroso!',
      background: 'images/img_bg_3.jpg',
      h1: 'Diga um oi!'

    })
});

router.get('/menus',function(req,res,next){
  res.render('menus',{
    title: 'Menu - Restaurante Saboroso!',
    background: 'images/img_bg_4.jpg',
    h1: 'Saboreie nosso menu!'
  })
});

router.get('/reservations',function(req,res,next){
  res.render('reservations',{
    title: 'Reserva - Restaurante Saboroso!',
    background: 'images/img_bg_2.jpg',
    h1: 'Reserve uma Mesa!'
  })
});

router.get('/services',function(req,res,next){
  res.render('services',{
    title: 'Serviços - Restaurante Saboroso!',
    background: 'images/img_bg_5.jpg',
    h1: 'É um prazer poder servir!'
  })
});


module.exports = router;
