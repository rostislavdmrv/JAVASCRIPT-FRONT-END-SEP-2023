function lockedProfile() {
    let buttons =Array.from(document.getElementsByTagName('button'));

    buttons.forEach((button)=>{
        button.addEventListener('click',showMoreInfo)
    });

    function showMoreInfo(e){

        let button = e.target;
        let profile = button.parentElement;
        let chilren =  Array.from(profile.children);

        let unlocked = chilren[4];
        let additionalInfo = chilren[9];

        if(!unlocked.checked){
            return;
        }
        if(button.textContent === 'Show more'){
            additionalInfo.style.display = 'block';
            button.textContent = 'Hide it';
        }else if(button.textContent === 'Hide it'){
            additionalInfo.style.display = 'none';
            button.textContent = 'Show more';

        }
    }
}