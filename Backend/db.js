const mongoos=requier('mongoose');

async function dbconection (){
   const conn= await mongoos.connect("mongodb+srv://adityamaddheshiya669_db_user:root@cluster.wrpwvfb.mongodb.net/aiml_c")

   if(conn){
    console.log("data base connection sucesfully ");
   }else{
    console.log("not connect data base");
    
   }
}
Module.exports=dbconection;