import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const products = [
  {
    id: 1,
    name: "iPhone 14",
    price: 999,
    description: "Latest Apple smartphone with A15 Bionic chip and advanced camera system.",
    image: "https://picsum.photos/id/1/300/200"
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: 899,
    description: "Powerful Android phone with high-performance processor and AMOLED display.",
    image: "https://picsum.photos/id/2/300/200"
  },
  {
    id: 3,
    name: "MacBook Air M2",
    price: 1199,
    description: "Lightweight laptop with Apple M2 chip and long battery life.",
    image: "https://picsum.photos/id/3/300/200"
  },
  {
    id: 4,
    name: "Dell XPS 13",
    price: 1099,
    description: "Premium ultrabook with sleek design and powerful performance.",
    image: "https://picsum.photos/id/4/300/200"
  },
  {
    id: 5,
    name: "Sony Headphones",
    price: 199,
    description: "Noise-cancelling headphones with crystal clear sound quality.",
    image: "https://picsum.photos/id/5/300/200"
  },
  {
    id: 6,
    name: "Apple Watch",
    price: 399,
    description: "Smartwatch with fitness tracking and health monitoring features.",
    image: "https://picsum.photos/id/6/300/200"
  },
  {
    id: 7,
    name: "iPad Pro",
    price: 799,
    description: "High-performance tablet perfect for work, design, and entertainment.",
    image: "https://picsum.photos/id/7/300/200"
  },
  {
    id: 8,
    name: "Gaming Mouse",
    price: 59,
    description: "Ergonomic gaming mouse with customizable buttons and RGB lighting.",
    image: "https://picsum.photos/id/8/300/200"
  },
  {
    id: 9,
    name: "Mechanical Keyboard",
    price: 129,
    description: "Durable keyboard with tactile feedback and RGB backlight.",
    image: "https://picsum.photos/id/9/300/200"
  },
  {
    id: 10,
    name: "Smart TV 55 inch",
    price: 699,
    description: "4K UHD smart TV with streaming apps and vibrant display.",
    image: "https://picsum.photos/id/10/300/200"
  }
];

const CardComponent = () => {
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {products.map(product => (
                <Card key={product.id} className='m-2' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text> 
                         
                         <div className='d-flex justify-content-between align-items-center'>
                            <h5>${product.price}</h5> 
                         <Button variant="primary">Add to Cart</Button>
                         </div>
                        
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default CardComponent