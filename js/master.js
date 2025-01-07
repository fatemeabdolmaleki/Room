
let li = document.querySelectorAll('ul>li')
let main = document.getElementsByTagName('main')[0]
let h2move = document.getElementById('h2move')
let pmove = document.getElementById('pmove')
let pop = document.getElementById('pop')
let h3op = document.getElementById('h3op')
let mainsec = document.getElementById('mainsec')
let scalesec = document.getElementById('scalesec')
let scalesec2 = document.getElementById('scalesec2')
let long = document.querySelectorAll('#longwidth>figure')
let h2line = document.querySelectorAll('#line h2')
let spanline = document.querySelectorAll('#line span')
let line = document.getElementById('line')
let divline = document.querySelectorAll('#line>div>div>div')
let bgop = document.getElementById('bgop')
let bg2op = document.getElementById('bg2op')
let header = document.getElementById('header')





document.addEventListener("resize", () => {
    let allHeight = main.scrollHeight;
    mainsec.style.height = allHeight + 'px';
});

let i = 1;
document.getElementById('hamburgler').addEventListener('click', function (e) {
    this.classList.toggle('no-hamburgler');
    if (i % 2) {
        li.forEach((val) => {
            val.style.opacity = '1';
        });
    } else {
        li.forEach((val) => {
            val.style.opacity = '0';
        });
    }
    i++;
});

main.addEventListener('scroll', (e) => {
    let scrollscreen = e.target.scrollTop;

    
    if ((scrollscreen - 700) > h2move.clientHeight) {
        h2move.style.transform = 'translateY(' + (scrollscreen / 10) + 'px)';
        pmove.style.transform = 'translateY(' + (scrollscreen / 10) + 'px)';
        pop.classList.add('op');
        h3op.classList.add('op');
    } else {
        h2move.style.transform = 'translateY(0)';
        pmove.style.transform = 'translateY(0)';
        pop.classList.remove('op');
        h3op.classList.remove('op');
    }

   
    if ((scrollscreen - 300) > scalesec.clientHeight) {
        scalesec.style.transform = 'scale(0)';
    } else {
        scalesec.style.transform = 'scale(1)';
    }

    if ((scrollscreen - 700) > scalesec2.clientHeight) {
        scalesec2.style.transform = 'scale(1)';
    } else {
        scalesec2.style.transform = 'scale(0)';
    }

    if ((scrollscreen - 2700) > long[0].clientHeight) {
        long.forEach((val) => {
            val.style.transform = 'translateX(-' + (scrollscreen - 2500) + 'px)';
        });
    } else {
        long.forEach((val) => {
            val.style.transform = 'translateX(0)';
        });
    }

    
    if ((scrollscreen - 5800) > line.clientHeight) {
        divline.forEach((val) => {
            val.style.width = '100%';
        });

        h2line.forEach((val) => {
            val.style.transform = 'translateY(-' + (scrollscreen / 350) + 'px)';
        });

        spanline.forEach((val) => {
            val.style.transform = 'translateY(-' + (scrollscreen / 350) + 'px)';
        });
    } else {
        divline.forEach((val) => {
            val.style.width = '0%'; 
        });
        h2line.forEach((val) => {
            val.style.transform = 'translateY(0)';
        });
        spanline.forEach((val) => {
            val.style.transform = 'translateY(0)';
        });
    }

  
    let mainHeight = main.clientHeight;
    let totalHeight = main.scrollHeight;
    if (scrollscreen + mainHeight >= totalHeight - 50) {
        bg2op.style.height = '100vh'; 
    } else {
        bg2op.style.height = '500px'; 
    }
});
