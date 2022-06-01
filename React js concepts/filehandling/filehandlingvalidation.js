function MyApp(){

    const [user, setUser] = React.useState({
        userName: '',
        password:''
    })

    const login = (event) => {
        event.preventDefault();
        console.log(user); 
    }

    const updateUserName = (event) => {
        // console.log(event.target.value);
        setUser({
            ...user,
            userName: event.target.value
        })
    }
    const updatePassword = (event) =>{
        // console.log(event.target.value)
        setUser({
            ...user,
            password: event.target.value
        })
    }
    return <form>
        UserName : <input type = "text"  onChange = {(event) =>{updateUserName(event)}}></input>
        <br></br>
        <br></br>
        password : <input type = "password"  onChange = {(event) =>{updatePassword(event)}}></input>
        <br></br>
        <br></br>
        <button onClick={login}>login</button>
        <p>{user.userName}</p>
        <p>{user.password}</p>
    </form>
}
ReactDOM.render(<MyApp/>, document.getElementById('container'))