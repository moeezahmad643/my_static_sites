let open = false;
function navbarMenu() {
  open = !open;
  console.log("hello");
  if(open){
        document.querySelector('#ul-1').style.top = "40px";
        document.querySelector('.bi-list').setAttribute('class','bi bi-x')
    }else{
        document.querySelector('#ul-1').style.top = "-600px"    ;
        document.querySelector('.bi-x').setAttribute('class','bi bi-list')
  }
}
