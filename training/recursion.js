
    const back_btn = document.createElement('button');
    back_btn.innerHTML = 'previous';
    const next_btn = document.createElement('button');
    next_btn.innerHTML = 'next';
    document.body.append(back_btn, next_btn)

function getElement(elDOM) {
    let children = elDOM.children;
    let j = 0;
    for (const child of children) {

        getElement(child)

    let i = 0;
        if (child.localName !== 'ol' && child.localName === 'li' ) {

        child.classList.add('not_active');

        console.log(child)

        next_btn.onclick = () => {

            children[i]?.classList?.replace('not_active', 'active');
            i++
        }
        back_btn.onclick = () => {
            children[i]?.classList.replace('active', 'not_active');
            i--
        }

    }

    }
}

getElement(document.body);

    // next_btn.onclick = () => {
    //     children[i]?.classList?.replace('not_active', 'active');
    //     i++
    // }
    // back_btn.onclick = () => {
    //     children[i]?.classList.replace('active', 'not_active');
    //     i--
    // }

    // if (child.localName !== 'ol' && child.localName === 'li' ) {
    //
    //     child.classList.add('not_active');
    //     console.log(children[i])
    //
    //     next_btn.onclick = () => {
    //
    //         children[i]?.classList?.replace('not_active', 'active');
    //         i++
    //     }
    //     back_btn.onclick = () => {
    //         children[i]?.classList.replace('active', 'not_active');
    //         i--
    //     }
    //
    // } else if (child.localName === 'ol') {
    //     child.classList.remove('not_active', 'active');
    // }