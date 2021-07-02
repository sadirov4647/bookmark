let status = false
function show(){
    if(status){
        document.querySelector('.site-nav__list').style.transform = 'translateX(0)';
        status =!status
    }else{
        document.querySelector('.site-nav__list ').style.transform = 'translateX(800px)';
        status =!status
    }
}



let elTabsFeatures = document.querySelector('.tabs-features');
let elTabsFeaturesItem = document.querySelectorAll('.tabs-features__item')
let elTabsFeaturesLink = document.querySelectorAll('.tabs-features__link');
let elsPanel = document.querySelectorAll('.features__panel');

if(elTabsFeaturesLink.length > 0){
    elTabsFeaturesLink.forEach(function(link){
        link.addEventListener('click', function(evt) {
            evt.preventDefault();

            elTabsFeaturesItem.forEach(function(item){
                item.classList.remove('tabs-features__item--active');
            });

            link.parentElement.classList.add('tabs-features__item--active');

            elsPanel.forEach(function (panel) {
                panel.classList.remove('features__panel--active')
            });

            document.querySelector(link.getAttribute('href')).classList.add('features__panel--active');
        });
        
       });
    }
    