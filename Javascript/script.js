burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
rightnav=document.querySelector('.rightnav')
navlist=document.querySelector('.navlist')
burger.addEventListener('click',function(){
    rightnav.classList.toggle('vclassresp')
    navlist.classList.toggle('vclassresp')
    navbar.classList.toggle('hnavresp')
})