const listElement= React.createElement('ul',null,
React.createElement('li',null,'Car'),
React.createElement('li',null, 'Jeep'))

const mobiles = ['Xiaomi','Samsung','Google','Motorola','Oneplus']

const mobileItems = React.createElement('ul', null,
// to loop 
mobiles.map((mobiles,index) => { 
    return React.createElement('li',{key : mobiles + index}, mobiles)

}))

const allItems = React.createElement('div',null, listElement, mobileItems)
console.log(allItems)
// console.log(listElement)
// ReactDOM.render(listElement,document.getElementById('container'))
// ReactDOM.render(mobileItems, document.getElementById('container'))

// console.log(mobileItems)
ReactDOM.render(allItems, document.getElementById('container'))