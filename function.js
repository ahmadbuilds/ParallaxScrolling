let bg=document.querySelectorAll(".bg");
let tabs=document.querySelectorAll(".tab");

window.addEventListener('wheel',(event)=>{
    event.preventDefault=true;
    const scrollSpeed=0.2;
    const scrollValue=window.scrollY + (event.deltaY /3) *scrollSpeed;
    window.scrollTo(0,scrollValue);


    let top=scrollValue;
    bg.forEach((value,index)=>{
        if(index!=0){
            value.animate({
                transform:`translateY(${(-top*index)}px)`
            },{
                duration:1000,fill:"forwards"
            })
        }
        if(index==bg.length-1){
            // tabs.forEach((tab)=>{
            //     tab.animate({
            //         transform:`translateY(${(-top*index)}px)`
            //     },{
            //         duration:500,fill:"forwards"
            //     })
            // })
        }

        // tabs.forEach((tab,index)=>{
        //     if(tabs.offsetTop - top <= this.window.innerHeight*(index+1)){
        //         let content=tab.getElementsByClassName('content')[0];
        //         let transformContent=window.innerHeight*(index+1) - (tab.offsetTop - top);
        //         alert("run");
        //         content.animate({
        //             transform:`translateY(${(-transformContent + (100*index))}px)`
        //         },{
        //             duration:500,fill:"forwards"
        //         })
        //     }
        // })
    })
    
})