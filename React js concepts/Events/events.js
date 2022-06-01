class Welcome extends React.Component{
    constructor(props){
        super(props)
        this.getData = this.getData.bind(this)
        this.greet = this.greet.bind(this)
    }
    
    render(){
        return <div>
            <h1>Welcome, {this.props.firstName}</h1>
            <button onClick={this.getData.bind(this)} >Click</button>
            <button onClick={this.greet} >greet</button>
            <button onClick={this.greet} >greet</button>
            <button onClick={() => {this.getName()}} >get</button>
            
            <button onClick={() => {this.getAge('google')}} >Get Age</button>
        </div>
    }
    // best way to use call methods
    getAge = (data) =>{
        console.log(this);
        console.log(data);
    }
    getName(){
        console.log(this)
    }
    greet(){
        console.log(this)
    }
    

    getData(){
        console.log('Get data executed')
        console.log(this.props.firstName)
    }
}
ReactDOM.render(<Welcome firstName ="Ajay"/>, document.getElementById('container')

)





















