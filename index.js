import chalk from 'chalk';
import  fs from  'fs';


function trataErro(erro){

   throw new Error(chalk.red(erro.code,'arquivo não encontrado'))


}



async function pegarArquivo(caminhodoArquivo){

  
  try{
   const encoding ='utf-8';
   
   const texto = await fs.promises.readFile(caminhodoArquivo,encoding)
  console.log(chalk.green(texto))} 
  catch(erro) {

      trataErro(erro)

  }








}










// function pegarArquivo(caminhodoArquivo){

//    const encoding ='utf-8';
   
//    fs.promises
//    .readFile(caminhodoArquivo,encoding)
//    .then((texto) => console.log(texto))
//    .catch((erro) => trataErro(erro))






// }








// function pegarArquivo(caminhodoArquivo){
//    const encoding ='utf-8';


//    fs.readFile(caminhodoArquivo,encoding,(erro,texto) =>{
           
//      if(erro){

//        trataErro(erro);
//      }

//      console.log(chalk.green(texto))



//    })



// }

pegarArquivo('./texto.md')