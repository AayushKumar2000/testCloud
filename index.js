const app=require('express')();
const {exec} =require('child_process');

app.get('/',(req,res)=>{
        res.send('hi hello ----------------');
});

app.post('/gitAlert',(req,res)=>{
        console.log('git alert');
      exec('sudo rm -rf /var/www/html/*');
     exec('sudo rm -rf /var/www/html/.git');
      exec('sudo git clone https://github.com/AayushKumar2000/testCloud.git /var/www/html/');
          console.log('rready');
        res.send();
});
app.listen(81,()=>console.log('listening at port 81'));
