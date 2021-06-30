let status = false
function show(){
if(status){
    document.querySelector('.site-nav__list').style.display = 'block';
    status =!status
}else{
    document.querySelector('.site-nav__list ').style.display = 'none';
    status =!status
}
}