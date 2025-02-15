import { BsCart } from "react-icons/bs";
import { Badge } from "react-bootstrap";

function CartWidget({ cantidad }) {
  return (
    <div className="contenedorCarrito position-relative">
      <BsCart size={30} />
      {cantidad > 0 && (
        <Badge
          pill
          bg="danger"
          className="position-absolute top-0 start-100 translate-middle">
          {cantidad}
        </Badge>
      )}
    </div>
  );
}

export default CartWidget;
