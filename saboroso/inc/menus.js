var conexao = require('./db');

module.exports = {

    getMenus() {
        return new Promise((resolve, reject) => {

            conexao.query(
                "select * from tb_menus order by title"
                , (err, results) => {

                    if (err) {
                        reject(err);
                    }

                    resolve(results);

                });

        });
    },


};
