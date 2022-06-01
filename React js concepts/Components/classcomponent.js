class Header extends React.Component{
    // access class using props
    render(){
        console.log(this.props.firstName)
        return (<div>
        <h1>Header</h1>
        <h1>Hamsa</h1>
        </div>  ) 

    }
}
class Content extends React.Component{
    render(){
        return <p>Content {this.props.firstName} {this.props.lastName}{this.props.age} </p> 


    }
}
class Footer extends React.Component{
    render(){
        return (
        <h2>Footer</h2>
        )

    }
}
ReactDOM.render(<div>
     <Header firstName="ZaynMallik"/>
     <Content firstName='Zayn'/>
     <Content lastName='Mallik'/>
     <Content age= '34'/>
     <Footer/>
     </div>, document.getElementById('container') )
   
// console.log("=====================================================");
// class Header extends React.Component{
//     render(){

//         return (<div>
//         <h1>Header</h1>
//         <h1>Hamsa</h1>
//         </div>  )

//     }
// }
// class Content extends React.Component{
//     render(){
//         return <p>Content</p>


//     }
// }
// class Footer extends React.Component{
//     render(){
//         return (
//         <h2>Footer</h2>
//         )

//     }
// }
// ReactDOM.render(<div>
//      <Header/>
//      <Content/>
//      <Content/>
//      <Content/>
//      <Footer/>
//      </div>, document.getElementById('container') )

// class Header extends React.component{
//     render(){
//     console.log(this.props.firstName)
//     return(<div>
//         <h1>hi</h1>
//         <h1>Hello</h1>
//         </div>)
//     }
// }

// class Content extends React.component{
//     render(){
       
//             <p>{this.props.firstName} {this.props.lastName}</p>
          
//     }
// }
// ReactDOM.render(
//     <div>
//     <Header firstName = "hamsa"/>
//     <Content firstName ="hamsa"/>
//     <content lastName ="dj"/>
//     </div>, document.getElementById('container'))