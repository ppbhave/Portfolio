const typeWriter = function (wait = 3000, words, icons, textElement, home_animation, anim_circle) {
    this.textElement = textElement;
    this.home_animation = home_animation;
    this.anim_circle = anim_circle;
    this.words = words;
    this.icons = icons;
    this.txt = '';
    this.wait = parseInt(wait, 10);
    this.wordInd = 0;
    this.type();
    this.isDeleting = false;

}

// const glow = (element,on) => {
//     if(on) {
//         element.style.color="#ffff00";
//         element.style.boxShadow="0 0 0 3px #ffff00";
//         element.style.transition= "all 500ms ease";
//     } else { 
//         element.style.color="#f2f2f2";
//         element.style.boxShadow="0 0 0 2px #f2f2f2";
//         element.style.transition= "all 500ms ease";
//     }
// }

typeWriter.prototype.type = function () {
    //get FullText of current word
    const FullText = this.words[this.wordInd];
    //get current icon
    let typeSpeed = 80;
    this.anim_circle.innerHTML = `<i class="${this.icons[this.wordInd]}"></i>`
    //typing effect
    if (this.isDeleting) {
        typeSpeed = 40;
        //Remove character
        this.txt = FullText.substring(0, this.txt.length - 1);
        if (this.txt == '') {
            // glow(this.anim_circle,true);
            this.isDeleting = !this.isDeleting;
            this.wordInd = this.wordInd == 2 ? 0 : this.wordInd + 1;
        }
    } else {
        this.txt = FullText.substring(0, this.txt.length + 1);
        if (this.txt == FullText) {
            // glow(this.anim_circle,false);
            this.isDeleting = !this.isDeleting;
            typeSpeed = this.wait;
        }
    }
    this.textElement.innerHTML = this.txt

    setTimeout(() => this.type(), typeSpeed);
}

document.addEventListener('DOMContentLoaded', initilization);

function initilization() {
    const textElement = document.querySelector('.typer');
    const home_animation = document.querySelector(".home-animation");
    const anim_circle = document.querySelector(".ico-anim-circle");
    const words = JSON.parse('["Web Developer","Storyteller","Debatist"]');
    const icons = JSON.parse('["fa fa-laptop","fa fa-book","fa fa-lightbulb-o"]');
    const wait = 1000;

    // init typewriter
    new typeWriter(wait, words, icons, textElement, home_animation, anim_circle)

}