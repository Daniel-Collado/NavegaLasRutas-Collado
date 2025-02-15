import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

function ItemList({ items }) {
  return (
    <div className="container-fluid estiloContainer">
      <div className="row estiloCards">
        {items.map((item) => (
          <div key={item.id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={item.image} className="card-img-top" />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>${item.price}</Card.Text>
                <Link to={`/item/${item.id}`}>
                  <Button variant="primary">Ver más</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList
