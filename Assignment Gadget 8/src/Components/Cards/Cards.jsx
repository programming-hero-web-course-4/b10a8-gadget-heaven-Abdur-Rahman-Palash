import { useEffect, useState } from "react";
import Card from "../Card/Card";
import './Cards.css'
const Cards = () => {
    const [cards, setCards] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [cart,setCart]=useState([]);

    useEffect(() => {
        fetch('./heaven.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, []);
   
    const filteredCards = selectedCategory === "all" 
        ? cards 
        : cards.filter(card => card.category === selectedCategory);

    return (
        <div>
            <h1 className="text-center font-extrabold text-4xl">Explore Cutting-Edge Gadgets</h1>
            <div className="flex flex-col lg:flex-row w-11/12 mx-auto gap-6">
                <div className="flex flex-col gap-10">
                    <button className={`btn btn-outline ${selectedCategory === "all" ? "active-btn":""}`} onClick={() => setSelectedCategory("all")}>All Category</button>
                    <button className={`btn btn-outline ${selectedCategory === "Computers" ? "active-btn":""}`} onClick={() => setSelectedCategory("Computers")}>Laptops</button>
                    <button className={`btn btn-outline ${selectedCategory === "Phones" ? "active-btn":""}`} onClick={() => setSelectedCategory("Phones")}>Phones</button>
                    <button className={`btn btn-outline ${selectedCategory === "Accessories" ? "active-btn":""}`} onClick={() => setSelectedCategory("Accessories")}>Accessories</button>
                    <button className={`btn btn-outline ${selectedCategory === "Smart Watches" ? "active-btn":""}`} onClick={() => setSelectedCategory("Smart Watches")}>Smart Watches</button>
                    <button className={`btn btn-outline ${selectedCategory === "Smart Home" ? "active-btn" : ""}`} onClick={() => setSelectedCategory("Smart Home")}>Smart Home</button>
                    <button className={`btn btn-outline ${selectedCategory === "Tablets" ? "active-btn" : ""}`} onClick={() => setSelectedCategory("Tablets")}>Tablets</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCards.map(card => (
                    <Card card={card} key={card.product_id}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cards;
