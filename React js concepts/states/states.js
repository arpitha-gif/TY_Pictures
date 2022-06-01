// class Greet extends React.Component{
//     state = {
//         firstName: 'Ajay'
//     }
//     constructor(props){
//         super(props)
//         this.state ={
//            firstName : 'Ajay'
//             }
//     }
//     render(){
//         return <div>
//             <h1>{this.state.firstName}</h1>
//             <button onClick={()=>{this.changedName()}}>Click </button>
//         </div>
//     }
//     changedName(){
        // never ever mutate the state like this 
        // this.state.firstName = 'Vijay'
//         console.log('Before setState', this.state.firstName);
//         this.setState({
//             firstName:'Vijay'
//         })
//     }
// }
// ReactDOM.render(<Greet/> , document.getElementById('container'))

class Header extends React.Component{
    state = {
        firstName : 'Ajay'
    }

    render(){
        return <div>
            <h1>{this.state.firstName}</h1>
            <button onClick = {() => {this.changeName()}}>click</button>
        </div>
    }
    changeName(){
        console.log('before changing the state', this.state.firstName)
        this.setState({
            firstName : 'Vijay'
        })
    }
}
ReactDOM.render(<Header/>, document.getElementById('container'))