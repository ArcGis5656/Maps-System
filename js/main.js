var mybtn=document.getElementById('icon'),
myside=document.getElementById('slidebar');

mybtn.onclick=function(){
    if(myside.classList.contains('hide')){
      myside.classList='show';
    }else{
        myside.classList='hide';
    }
}