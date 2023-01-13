
    const back_btn = document.createElement('button');
    back_btn.innerHTML = 'back';
    const next_btn = document.createElement('button');
    next_btn.innerHTML = 'next';
    document.body.append(back_btn, next_btn)

function getElement(elDOM) {

    let children = elDOM.children;

    if (children.length !== 0) {
        for (const child of children) {
            let i = 0;

            console.log(children[1])
            getElement(child)
            if (child.localName === 'li') {

                child.classList.add('not_active');

                next_btn.onclick = () => {
                    child.classList.replace('not_active', 'active');
                }

            }
        }
    }



}

getElement(document.body);

