function Header ({logo, brand, price}) {
    return <h1>Header {logo} {brand} {price}</h1>
}

function Content (props){
    return <p>Content {props.userName}</p>
}


function Footer ({person}) {
    return <h2>Footer{person.firstName} {person.lastName}</h2>
}
ReactDOM.render(<div>  
    <Header logo = "car.jpg" brand= "volvo" price = "12000000000"/>
    <Content userName= "Ajay"/>
    <Footer person= {{firstName: 'Ajay', lastName: 'k'}}/>
</div>, document.getElementById('container')
)