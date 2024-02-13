var navBurger = document.getElementById('nav-burger')
       var navMenu = document.getElementById('nav-menu')
       var webContent = document.getElementById('content-container')
       

       console.log()

       navBurger.onclick = e => {
        navBurger.classList.toggle('open')
        
        


        if (!navMenu.classList.value) {
            navMenu.classList.toggle('flex');
            webContent.classList.toggle('close');
            setTimeout(()=>{navMenu.classList.toggle('open')}, 350);
        }
        else if (navMenu.classList.value) {
            navMenu.classList.toggle('open');
            setTimeout(()=>{
                navMenu.classList.toggle('flex')
                webContent.classList.toggle('close');
        }, 350);
        }
    }

    const customCursor = document.getElementById("custom-cursor");

const cursorPosition = (event)=> {
  const mouseY = event.clientY;
  const mouseX = event.clientX;
     
  customCursor.style.left = `${mouseX}px`;
  customCursor.style.top = `${mouseY}px`;
  cursorOpacity(14)
  }



const cursorOpacity = (cursorWidth) => {
  customCursor.style.width = (`${cursorWidth}px`);
  customCursor.style.height = (`${cursorWidth}px`);
}


window.addEventListener('mousemove', cursorPosition)