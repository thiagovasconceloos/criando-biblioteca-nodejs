import chalk from 'chalk';
import  fs from  'fs';


function trataErro(erro){

   throw new Error(chalk.red(erro.code,'arquivo não encontrado'))


}





function pegarArquivo(caminhodoArquivo){
   const encoding ='utf-8';


   fs.readFile(caminhodoArquivo,encoding,(erro,texto) =>{
           
     if(erro){

       trataErro(erro);
     }

     console.log(chalk.green(texto))



   })



}

pegarArquivo('./texto')