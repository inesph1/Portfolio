
    let toggleTheme = document.getElementById('toggle-theme');
    let toggleIcon = document.getElementById('toggle-icon');
    let toggleText = document.getElementById('toggle-text');
    
    toggleTheme.addEventListener("click", ()=>{
        /*el elemento toggle elimina la clase si la tiene y si no la pone */
        document.body.classList.toggle('dark');
        if(toggleIcon.src.includes('moon.svg')){
            toggleIcon.src='./assets/icons/sun.svg';
            toggleText.textContent= "Modo claro";
        }else{
            toggleIcon.src='./assets/icons/moon.svg';
            toggleText.textContent= "Modo oscuro";
        }
        
    })

