function UsuariosDAO(connection){
    this._conn = connection();
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
    this._conn.open(function(err, mongoclient){
        mongoclient.collection("usuarios", function(err, collection){
            collection.insert(usuario);
            mongoclient.close();
        }); 
    });
    
}

UsuariosDAO.prototype.autenticar = function(usuario){
    this._conn.open(function(err, mongoclient){
        mongoclient.collection("usuarios", function(err, collection){
            collection.find(usuario);
            mongoclient.close();
        }); 
    });
     

	console.log(usuario);

}	

module.exports = function(){
    return UsuariosDAO;
}