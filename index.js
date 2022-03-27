import chalk from 'chalk';
import  fs from  'fs';


function pegarArquivo(caminhodoArquivo){
   const encoding ='utf-8';


   fs.readFile(caminhodoArquivo,encoding,(_,texto) =>{

     console.log(chalk.green(texto))



   })



}

pegarArquivo('./texto.md')