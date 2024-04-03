/****************************************************************
 *  Atividade 04: Utilizando a linguagem javascript ou python na base importada do IMDB (movie e actor)
 * dentro do MongoDB, responda às seguintes consultas:
*****************************************************************/
use imdb_imt
// a)Faça a conversão na coleção actor para o campo height (altura). 
// Tente “limpar” a maior parte dos dados. 
db.movie.find()
db.actor.find()
db.actor.find().count() //297905

// para saber o datatype -> string
db.actor.aggregate( [ 
        { "$project": { "dataType": {  "$type": "$height"  } } } ] )
        
db.actor.aggregate ([
  { $group : { _id: {tipodado :  {  "$type": "$height"  } },  
              contagem : {$count : {} } } }  ] )  

db.actor.find({height : {$type: 2 }}).count() //253024 string
db.actor.find({height : {$type: 10 }}).count() //0 nulos
db.actor.find({height : {$type: 16 }}).count() //44681 int

db.actor.find({height : {$type: 2 } , "$expr": { "$eq": [ { "$strLenCP": "$height" }, 3 ] } )

db.actor.find({height:{$ne: null}}) // 297705
db.actor.find({height : {$ne: "" }}) //44681
db.actor.find({height:{$ne: null}}).forEach( function (doc) {
doc.height = parseInt(doc.height);
db.actor.save(doc) });
print("altura: " + doc.height)});

// tratamento para Not a Number NaN
db.actor.find({height: NaN})
db.movie.updateMany({ano_lancamento: NaN}, {$set: {ano_lancamento: null}})
 
//b) Mostre a quantidade de filmes por gênero em que atuou o ator Robert de Niro.
db.movie.find({actors: /robert de niro/i})
db.movie.aggregate ([
  {$match: {actors: /robert de niro/i}},  
  { $group : { _id: {genero: "$genre"},  
              contagem_genero : {$count : {} } } },
             {$sort : { contagem_genero: -1  } } ])   

//f) Mostre a contagem de filmes por país e gênero, mostrando o nome dos país(es) e idiomas(s) no formato “Brazil/EUA”, 
// “Comedy/Drama”, ou seja, transforme o conteúdo do vetor em string.
db.movie.aggregate (
  { $group : { _id: {pais: "$countries", genero: "$genre"},  
              pais_genero : {$count: {} } } },
{$project : {
    País: {$cond : {"if" : {"$eq": [{$size: "$_id.pais" }, 1] },
                               "then":  { "$arrayElemAt"  : ["$_id.pais", 0]  },
            "else": {"$concat": [ { "$arrayElemAt" : ["$_id.pais", 0]  }, "/", 
                                  { "$arrayElemAt" : ["$_id.pais", 1]  } ] } } } ,
    Gênero: {$cond : {"if" : {"$eq": [{$size: "$_id.genero" }, 1] },
                               "then":  { "$arrayElemAt"  : ["$_id.genero", 0]  },
            "else": {"$concat": [ { "$arrayElemAt" : ["$_id.genero", 0]  }, "/", 
                                  { "$arrayElemAt" : ["$_id.genero", 1]  } ] } } }, 
              pais_genero: 1, _id: 0} },
 {$match: {pais_genero : {$gte: 10}}},
            {$sort : { pais_genero: -1  } } )

//d) Mostre a contagem por motivos de óbito para os atores falecidos, com mais de 100 óbitos por motivo. 
db.actor.find()
db.actor.aggregate([
{$match: { date_of_death: {$ne: null}, death_details: {$ne: null}}},
{$group: {_id: "$reason_of_death",
          contagem: {$count: {} } } },
    {$match: {contagem : {$gte: 100}}},
    {$sort: {contagem: -1}} ] )
     
//e) Mostre a média de altura por ano de nascimento dos atores, da maior média para menor
// e limite o resultado para as 10 maiores médias.
// media de altura
db.actor.aggregate( [
{$match: {height : {$type: 16 }}},
{$group: { _id: null,
           media_altura: {$avg: "$height" } } } ] )
//por ano de nascimento
db.actor.aggregate( [
{$match: { date_of_birth: {$ne: null}, date_of_birth : {$type: 9 } , height : {$type: 16 } } }
{$project: {ano_nascto: {$year: "$date_of_birth"}, height: 1}},
{$group: { _id: "$ano_nascto",
           media_altura: {$avg: "$height" } 
           contagem: {$count: {}} } },
{$sort: {"_id":-1}}, 
  { $limit : 10 } ] ) 


/***** CONVERSÃO *****/
// NASCIMENTO
// 1o converte - data nascimento que tem 10 caracteres está no formato "AAAA-MM-DD" --93 mil convertidos
db.actor.find({ date_of_birth : {$type: 2 }, 
    "$expr": { "$eq": [ { "$strLenCP": "$date_of_birth" }, 10 ] } ,
    date_of_birth: /-/i } ).forEach(function(doc) { 
    doc.date_of_birth = ISODate(doc.date_of_birth);
    print(doc.date_of_birth)
    db.actor.save(doc); 
    })
db.actor.find({_id : ObjectId("626c3fbb63c4b6d126e35d9e"))

// 2o converte - no ano aparece o mês - limpar para ficar nulo ou data atual NÃO DEU CERTO, dois erros de ano com 3 digitos
db.actor.aggregate([
    {$match: { date_of_birth: {$type: 2, $not: /BC/}  , 
               "$expr": { "$gte": [ { "$strLenCP": "$date_of_birth" }, 4 ] } } },  //, date_of_birth: {$ne: null}
    {$project: { ano_nascto : {
                        $substr: ["$date_of_birth", 0, 4] } , date_of_birth: 1} },
    {$match: { ano_nascto: { $nin: [ /a/i, /e/i,/i/i,/o/i,/u/i, /c/i, " ", /bc/i] }}                                
] ).forEach(function(doc) { 
    novadata = doc.ano_nascto + "-01-01";
    doc.date_of_birth = ISODate(novadata);
    print(novadata)
    db.actor.save(doc); 
    })

  
  
  
  