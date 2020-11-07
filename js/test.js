const NavList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

for (let i = 0; i < sections.length; i++) {
    const element = sections[i];
    setLink(element);
}

function setLink(element){
    const sectionTitle = element.getAttribute('data-nav');
    const sectionId = element.getAttribute('id');
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute('href',`${sectionId}`);
    a.innerText = sectionTitle;
    a.className = 'menu__link';
    li.appendChild(a);
    NavList.appendChild(li);
}
const html = document.querySelector('html');
html.style.scrollBehavior = 'smooth';

sections[0].addEventListener('click',function(evt){
    console.log(evt);
})
function respondToTheClick(evt) {
    if (evt.target.nodeName.toLowerCase() === 'a') {  // ← verifies target is desired element
        evt.preventDefault();
        const linkTarget = document.getElementById(evt.target.getAttribute('href'));
        linkTarget.scrollIntoView();
        evt.target.getAttribute('href');
       
    }
}


NavList.addEventListener('click', respondToTheClick);
function clearStyle(section){
  
        section.classList.remove('your-active-class');
   
}
function checkInView(){
    for (const section of sections){
        let bounding = section.getBoundingClientRect();
        // const check = rect.top >=0 && rect.bottom >= window.innerHeight;
        if (
            bounding.top >= -window.innerHeight/4 &&
            bounding.bottom <= (window.innerHeight)
        ) {
            if(!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class')
            }
        }else{
           clearStyle(section);
        }
    }
}
function hideNavList(){
    NavList.style.display = 'none';
}
function showNavList(){
    NavList.style.display = 'block';
}
document.addEventListener('scroll',function(){
    showNavList();
   checkInView();
   setTimeout(function(){hideNavList();},2000);
})
function test(){
    if(NavList.style.display == 'none'){
        console.log('hideen');
    }else{
        console.log('showed');
    }
}