const App = () => {
    const [datas, setData] = React.useState(data)
    return <div>
        <h2>Stock</h2>
        <Stock data={datas}/>
        <h2>Shopping Cart</h2>
        <ShoppingCart />
    </div>
}
ReactDOM.render(<App />, document.getElementById('root'))