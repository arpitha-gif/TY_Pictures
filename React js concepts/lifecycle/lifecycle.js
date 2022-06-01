class Parent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text : 'mounting phase',
            show : true 
        }
        console.log('parent constructor executed')
    }

    static getDerivedStateFromProps(props, state){
        console.log('parent getDerivedStateFromProps executed ');
        return state
    }
    render(){
        console.log('parent render executed');
        return <div>
            <p>{this.state.text}</p>
            <button onClick={()=> {this.updateText('updatephase')}}>Click</button>
            {this.state.show ? <Child/> : null}
            </div>
    }
        updateText(text){
            this.setState({
                text: text,
                show: false
            })
       

    }
    


    shouldComponentUpdate(){
        console.log('Parent shouldComponentsUpdate executed')
        return true
    }
    componentDidMount(){
       /*  1. used to make side effects if,e making api ChannelSplitterNode,interfacing with DOMException
        2. Used to update the state */
        console.log('Parent componentDidmount executed')
    }
    getSnapShotBeforeUpdate(prevProps, prevState,snapShot){
        console.log('Parent getSnapShotBeforeUpdate executed ')
        // return 'scrolling position'
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('Parent componentDidUpdate executed')
        console.log('------------------------------')
        console.log('prevProps',prevProps )
        console.log('prevState',prevState )
        console.log('snapShot',snapshot )
        console.log('current state', )
    }
}
class Child extends React.Component{
    render(){
        return <div> Child component</div>
    }
    componentWillUnmount(){
        console.log('child componentWillUnmount executed ')
    }

}
ReactDOM.render(
    <Parent/> , document.getElementById('container') 
)