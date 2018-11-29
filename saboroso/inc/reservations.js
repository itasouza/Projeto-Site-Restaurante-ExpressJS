var conexao = require('./db');


module.exports = {

    renderPaginaReserva(req,res,error,success){

        res.render('reservations',{
            title: 'Reserva - Restaurante Saboroso!',
            background: 'images/img_bg_2.jpg',
            h1: 'Reserve uma Mesa!',
            body: req.body,
            error,
            success
          })
    },

    renderPaginaIndex(req,res,results,error,success){

        res.render('index',{
            title: 'Restaurante Saboroso!',
            menus: results,
            body: req.body,
            error,
            success
          })
    },

    save(fields) {
       
        return new Promise((resolve, reject) => {

            debugger; // Ponto de interrupcao

            let date = fields.date.split('/');
            fields.date = `${date[2]}-${date[1]}-${date[0]}`;
            

            conexao.query(`
                    insert into tb_reservations(name,email,people,date,time) 
                    values(?,?,?,?,?) `
                , [
                    fields.name,
                    fields.email,
                    fields.people,
                    fields.date,
                    fields.time

                ], (err, results) => {
                   if(err){
                       reject(err);
                   }

                   
                   resolve(results);
                });
        });

    }

};