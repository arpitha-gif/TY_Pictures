function MyApp (){
    
    const [name, setName] = React.useState('Ajay')
    const [isAdmin, setIsAdmin] = React.useState(true)
    const updatedName = () =>{
        console.log(name)
        console.log(isAdmin)
        setName('Vijay')
        setIsAdmin(false)
    }  
    
     return <div>
         <p>{name}</p>
         <button onClick = {updatedName}> updatedName</button>
     </div>
}
ReactDOM.render(<MyApp/>, document.getElementById('container'));