

const mobiles = ['Honor', 'samsung', 'Redmi', 'Iphone']

const items = <ul>        
   { mobiles.map((mobile, index) => {
      return <li key= {index} >{mobile}</li>

        })
   }
</ul>

ReactDOM.render(items, document.getElementById('container'))





