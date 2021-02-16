// === menu show ===

const NMenu=document.getElementById("n-menu"),
 TMenu=document.getElementById("n-toggle"),
 CMenu=document.getElementById("n-close")

//show
TMenu.addEventListener('click',()=>{
    NMenu.classList.toggle('show');
})
//close
CMenu.addEventListener('click',()=>{
    NMenu.classList.remove('show');
})

const nLink=document.querySelectorAll(".n_link");

function LnikAction(){
    NMenu.classList.remove('show');
}
nLink.forEach( e => e.addEventListener('click',LnikAction));

//  === Scrool section ===
const sections=document.querySelectorAll('section[id]')
window.addEventListener('scroll',sectionActive);

function sectionActive(){
    const Scroll_y=window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight=current.offsetHeight
        const sectionTop=current.offsetTop - 50
        sectionId=current.getAttribute('id');

        if(Scroll_y > sectionTop && Scroll_y <= sectionTop + sectionHeight){
            document.querySelector('.n_menu a[href*='+ sectionId +']').classList.add('active')
        }
        else{
            document.querySelector('.n_menu a[href*='+ sectionId +']').classList.remove('active')

        }
    })
   
}
