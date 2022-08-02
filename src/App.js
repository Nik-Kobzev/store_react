import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            items: [
                {
                    id: 1,
                    title: 'Стул серый',
                    img: 't1.jpg',
                    desc: 'sdfsfs sdsfsfaf adfasdf',
                    category: 'chairs',
                    price: '49.99'
                },
                {
                    id: 2,
                    title: 'Стул',
                    img: 't2.jpg',
                    desc: 'sdfsfs sdsfsfaf adfasdf',
                    category: 'tables',
                    price: '149.00'
                },
                {
                    id: 3,
                    title: 'Стул2',
                    img: 't3.jpg',
                    desc: 'sdfsfs sdsfsfaf adfasdf',
                    category: 'tables',
                    price: '149.00'
                },
                {
                    id: 4,
                    title: 'Стул3',
                    img: 't4.jpg',
                    desc: 'sdfsfs sdsfsfaf adfasdf',
                    category: 'tables',
                    price: '149.00'
                },
                {
                    id: 5,
                    title: 'Стул4',
                    img: 't5.jpg',
                    desc: 'sdfsfs sdsfsfaf adfasdf',
                    category: 'tables',
                    price: '149.00'
                }
            ]
        }
        this.addToOrder = this.addToOrder.bind(this)
    }


    render() {
        return (
            <div className='wrapper'>
                <Header orders={this.state.orders} />
                <Items items={this.state.items} onAdd={this.addToOrder}/>
                <Footer/>
            </div>
        );
    }

    addToOrder(item) {
        this.setState({ orders: [...this.state.orders, item] })
    }
}

export default App;
