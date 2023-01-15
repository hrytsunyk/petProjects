
    const back_btn = document.createElement('button');
    back_btn.innerHTML = 'previous';
    const next_btn = document.createElement('button');
    next_btn.innerHTML = 'next';

    document.body.append(back_btn, next_btn);

    const iterOl = document.querySelector('.for-iteration');


    const arrLi = [];




function getElement(elDOM) {
    let children = elDOM.children;


    for (let i = 0; i < children.length; i++) {
        getElement(children[i])

        if (children[i].localName === 'li' && children[i]){
            children[i].classList.add('not_active')
            arrLi.push(children[i])

        }
    }
}

getElement(iterOl);

let j = 0;

    let next = next_btn.onclick = () => {
        arrLi[j]?.classList.replace('not_active', 'active');
        j++
        console.log(arrLi[j])

    }

    const prev = back_btn.onclick = () => {
        arrLi[j]?.classList.replace('active', 'not_active');
        j--
        console.log(arrLi[j])

    }



