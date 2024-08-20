function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
}

function customRender1(reactElement,container){
    const domElement = document.createAttribute(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop==='children') continue;
        domElement.setAttribute(prop, reactElement.props
            [prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click to get entertainment'
}
/*
const reactElement1 = {
    type: 'h2',
    props: {
        color: 'red',
        bgcolor: 'yellow'
    },
    children: 'hola amigo!!'
}
*/
const mainContainer = document.querySelector('#root')

customRender1(reactElement, mainContainer)
//customRender1(reactElement1,mainContainer)