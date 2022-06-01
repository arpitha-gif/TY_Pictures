 class Parent extends React.Component{
    state = {
        text : ''
    }
    render(){
        return(
            <div>
                <h1>{this.state.text}</h1>
                <Child action = {this.getDataFromChild.bind(this)}/>
            </div>
        ) 
    }
    getDataFromChild(ChildData){
        console.log(JSON.parse(ChildData));
        this.setState({
            text: ChildData
        })
        // setstate is asynchronous
        // this.setState ({
        //     text:ChildData
        // })
        console.log('state text',this.state) //Welcome


       // use below state to  update the state always
        // this.setState({
        //     text: ChildData
        // }, () => {
        //     console.log('state text',this.state)

        // })
    }
}

function Child(props){
    const str = {
        name : "hamsa",
        age : 20
    }
    return(
        <div>
            <button onClick={()=>{props.action(JSON.stringify(str))}}>Send data to parent</button>
        </div>
    )

}
ReactDOM.render(<Parent/> , document.getElementById('container'))

