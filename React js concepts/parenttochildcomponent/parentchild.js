 // function App(props){
//     return <div>
//         <Home appName ='Netfixing' userName={props.loggedinUser}/>
//     </div>
// }

// function Home(props) {
//     return <div>
//         <h1>Home Page {props.appName}</h1>
//         <h2>{props.userName}</h2>
//     </div>
// }
// ReactDOM.render(<App loggedinUser = 'Sujay'/>,
// document.getElementById('container'));

//Passing data from parent to child
function App(props){
    const data = ['chocolate', 'strawberry', 'Vanilla', 'butterscotch']
    return <div>
        <Home appName ='Netfix' userName={props.loggedinUser}/>
        <List list={data}/>
    </div>
}

function Singlelist(props){
    return <div>
        <p>{props.value}</p>
    </div>
}

function List(props) {
    return <div> {props.list.map((value, index) =>{
        return <p key ={index}>{value}</p>   
    }
    )}
        
    </div>
}

function Home(props){
    return <div>
    <h1>Home Page {props.appName}</h1>
    <h2>{props.userName}</h2>
</div>
}
ReactDOM.render(<App loggedinUser = 'Sujay'/>,
document.getElementById('container'));