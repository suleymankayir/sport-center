let buttons = document.querySelectorAll('#button');
let title = document.querySelector('#title')
let title2 = document.querySelector('#title2')
let image = document.querySelector('#class-image');
let header = document.querySelector('#header');

buttons.forEach(button => {

    button.addEventListener('click', () => {
       
       
       let text = button.textContent;
       
        if (text === 'Yoga') {
            
            image.src = './images/yoga.jpg';
            image.alt = 'Yoga photo'
            title.innerHTML = "Why are your Yoga?";
            title2.innerHTML = "When comes Yoga Your Time.";
            

        } else if (text === 'Group') {
            image.src = './images/group.webp';
            image.alt = 'Group photo'
            title.innerHTML = "Why are your Group?";
            title2.innerHTML = "When comes Group Your Time.";
            
        } else if (text === 'Solo') {
            image.src = './images/solo.jpg';
            image.alt = 'Solo photo'
            title.innerHTML = "Why are your Solo?";
            title2.innerHTML = "When comes Solo Your Time.";
        
        } else if (text === 'Stretching') {
            image.src = './images/stret.webp';
            image.alt = 'Stretching photo'
            title.innerHTML = "Why are your Stretching?";
            title2.innerHTML = "When comes Stretching Your Time.";
        }
    });
});

window.addEventListener("scroll",(e) => {
    let scroll = window.scrollY;
    if(scroll > 150){
        header.style.backgroundColor = "#355592";
    } else if (scroll <=150){
        header.style.backgroundColor = "transparent";
    }
})
