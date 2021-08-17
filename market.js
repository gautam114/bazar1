/*signup*/
function load(){
    generate();
    fetching();
}
/*refresh function */
function refresh(){
    generate();
}
var passwordd=false,captchacode=false;
/*captcha generate */
var code1;
function generate(){
    let code=document.getElementById('code');
    let a=Math.random()*10;
    let b=Math.random()*10;
    let c=Math.random()*10;
    let d=Math.random()*10;
    let e=Math.random()*10;

    code.innerHTML=`${Math.trunc(a)} ${Math.trunc(b)} ${Math.trunc(c)} ${Math.trunc(d)} ${Math.trunc(e)}`;
   code1=code.innerHTML;
}
/*verifying catpcha function*/
function verify(){
    let captcha=document.getElementById('captcha').value;
    let msg=document.getElementById('msg');
console.log()
    let arry=code1.split(' ');//converting in to array
    let join=arry.join('');//join them without space
    captchacode=false;
    if(join==captcha){
console.log('c');        
        captchacode=true;
    }else{
        msg.innerHTML='wrong..';
    }
passwordd=false;
password();
if(captchacode==true && passwordd==true){
    let account=document.getElementById('acnt');
    let acnt_name=document.getElementById('acnt_name').value;
    account.innerHTML=`<span class='bi bi-person'> </span>${acnt_name}`;
    msg.innerHTML='your profile is created';
    

}else{
    if(captcha==false){msg.innerHTML='captcha is wrong';}
    else if(passwordd==false){msg.innerHTML='password is wrong';}
}
}
/*clear error msg of captcha */
function clean(){
document.getElementById('msg').innerHTML='';
}
/* password pattern */
function password(){
    let msg=document.getElementById('pas_msg');
    let pas=document.getElementById('password').value;
    let exp=/(?=.*[A-Z])\w{4,10}/;

    if(pas.match(exp)){
        msg.innerHTML='perfect';
        msg.className='text-success';
        passwordd=true;
        
    }else if(pas.length>4 && pas.length<10){
        msg.innerHTML='1 charachter and no.. required';
        msg.className='text-primary'
    }else if(pas.length<4){
        msg.innerHTML='minmun 4 charcatera!';
        msg.className='text-warning';
    }else if(pas.length>10){
        msg.innerHTML='maximun 10 charachter!';
        msg.className='text-danger';
    }
}
/*login*/
document.getElementById('ps').addEventListener('keypress',(pass)=>{
    let asci=pass.which;
    if(!(asci>=48 && asci<58 )){
        pass.preventDefault();
    }
});
document.getElementById('nm').addEventListener('keypress',(nam)=>{
    let asci=nam.which;
    
    if(!((asci>=65 && asci<=90) || (asci>=97 && asci<=122))){
         nam.preventDefault();
    }
});
function sell(){

document.getElementById('sellTable').style.display='block';
    

    let nm=document.getElementById('ln');
    let pp=document.getElementById('lp');
    let pcity=document.getElementById('lcity');
    let pc=document.getElementById('lc');
        
    
     nm.innerHTML=document.getElementById('pn').value;
     pp.innerHTML=document.getElementById('pp').value;
     pcity.innerHTML=document.getElementById('pcity').value;
     let checkbox=document.getElementById('pc');
    if(checkbox.checked){
     pc.innerHTML='available';
    }else{
        pc.innerHTML='not available';
    }
}
var a;
var cat;
var del;
function fetching(){
/* products */

    fetch('https://fakestoreapi.com/products')
    .then((convert)=>{
        return convert.json();
    })
    .then((data)=>{
        a=data;
      products();
    }).catch((error)=>{
        console.log(error);
    });

/* category */


fetch('https://fakestoreapi.com/products/categories')
.then((convert)=>{
    return convert.json();
}).then((data)=>{
   cat=data;
   category();
}).catch((error)=>{
    console.log(error);
});

/* delta */


}
function products(){
    
    for(let i of a){
        let col=document.createElement('div');
        col.className='col-md-4 col-6';

        let card=document.createElement('div');
        card.className='card  text-center my-2';

        card.innerHTML=`
        <div class='card-header'>
        ${i.category}
        </div>
        <div class='card-body'>
        <img src=${i.image} width='120' height='120' id='piture'>
        </div>
        <div class='card-footer'>
        ${i.price}
        </div>
        `;
         
        col.appendChild(card);
        document.getElementById('ro').appendChild(col);


    }
}

function category(){
    for(let i of cat){
        let op=document.createElement('option');
//        console.log(i);
        op.innerHTML=i;
        op.value=i;
        document.getElementById('sel').appendChild(op);        
    }
}
