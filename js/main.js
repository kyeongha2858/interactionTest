(() => {
    const leaflet = document.querySelector(".leaflet");
    let pageCount = 0;

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
            pageCount++;
            if(pageCount ==2){
                document.body.classList.add('leaflet-opend');
            }
        }
    });
})();