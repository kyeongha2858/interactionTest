(() => {
    const leaflet = document.querySelector(".leaflet");

    function getTarget(elem, className){ //부모노드까지 위임
        while(!elem.classList.contains(className)){
            elem = elem.parentNode;

            if(elem.nodename =='BODY'){
                elem = null;
                return;
            }
        }
        return elem;
    }

    leaflet.addEventListener('click',e =>{
        let pageElem = getTarget(e.target, 'page');
        if(pageElem){
            pageElem.classList.add('page-flipped');
        }
    });
})();


const img = document.querySelector(".imgg");
const gg = document.querySelector(".snoopi");

const currentShow = "Showing";

function init(){
    gg.addEventListener('click',e=>{
        img.classList.remove("hiding");
        img.classList.add(currentShow);
    })
}
init();