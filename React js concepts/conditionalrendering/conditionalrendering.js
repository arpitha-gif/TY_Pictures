class MyApp extends React.Component{
    state = {
        adminName : 'Ajay',
        userName : 'Vijay',
        isAdmin : false
    }
    render(){
        const {adminName, userName, isAdmin} = this.state
        let renderData = null
        if(isAdmin){
           renderData= <div>
                <h1>{adminName}</h1>
                <div>Home</div>
                <div>Login</div>
            </div>
        } else {
            renderData=<div>
                <h1>{userName}</h1>
                <div>login</div>
            </div>
        }
        return (
            <div>
            {renderData}
            <button onClick ={() => {this.changeAdminUserView()}}> {isAdmin ? 'Click here to see user view' : 'click here to see Admin view '} </button></div>
            )

        
    }
    changeAdminUserView(){
        this.setState({
           
            isAdmin : true
        })
    }

    }

ReactDOM.render( <MyApp/>
, document.getElementById('container'));