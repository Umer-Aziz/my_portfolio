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
nLink.forEach( e=> e.addEventListener('click',LnikAction));

//  === Scrool section ===
const Sec=document.querySelectorAll('section[id]')
window.addEventListener('scroll',SActive);

function SActive(){
    const Scroll_y=window.pageYOffset

    Sec.forEach(active =>{
        const SecHeight=active.offsetHeight
        const SecTop=active.offsetTop - 50
        sectionId=active.getAttribute('id')

        if(Scroll_y >SecTop && Scroll_y <= SecTop + SecHeight){
            document.querySelector('.n_menu a[href*='+sectionId+']').classList.add('active')
        }else{
            document.querySelector('.n_menu a[href*='+sectionId+']').classList.remove('active')

        }
        
    })
}