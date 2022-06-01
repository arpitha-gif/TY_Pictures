// function MyApp (){
//     const[person, setPerson] = React.useState({
//         firstName : 'Ajay',
//         lastName : 'k'
//     })
//     const updateFirstName = () =>{
//     //  never update state like below while using React Hooks for objects
//     //   setPerson({
//     //       firstName : 'Prakash'
//     //   })
//     setPerson({
//         ...person,
//         firstName: 'Prakash'
    
//     })
// } 

// return (
// <div>
//     <p>{person.firstName}</p>
//     <p>{person.lastName}</p>
//     <button onClick ={updateFirstName}>updateFirstName</button>
// </div>
// )

// }
// ReactDOM.render( <MyApp/>
//     , document.getElementById('container'));

// function MyApp (){
//     const[bikes, setBikes] = React.useState(['bmw', 'KTM', 'Harleydavidson', 'Vikrant' ])
//     const removeKTM = () =>{
//         const indexOfKTM = bikes.indexOf('KTM')
//         console.log(indexOfKTM)
//         if(indexOfKTM>= 0){
//         bikes.splice(indexOfKTM,1)
//         setBikes([...bikes])
//         }
//     };
//     const navigateToGoogle= (event) => {
//         console.log(event);
//         event.preventDefault(); // prevents default behaviour of html tags 
//     }
//     return (
//         <div>
//             { bikes.map((bike,index) => {
//                 return <p key ={index}>{bike}</p>;

               
//             })}
//            <button onClick = {removeKTM}>Remove KTM</button>
//            <button onClick ={(event) => {navigateToGoogle(event)}}>click</button>
//            <hr/>   
//            <a href ="https://www.google.com" onClick={navigateToGoogle}>click</a>
         
//         </div>
//     );
// }
// ReactDOM.render(<MyApp/>,document.getElementById('container'));