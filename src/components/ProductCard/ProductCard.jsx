import './ProductCard.scss';
import {Link} from 'react-router-dom';
import {AddBtn} from '../Buttons/Buttons';
import {useDispatch} from "react-redux";
import {addItem} from "../../store/slices/cartSlice";
function ProductCard ({data, category}) {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addItem(data));
    };
    function scroll(){
        window.scrollTo(0,0)
    }

    return (
        <div className="offer__product">
            {/*<Link className="offer__product-category-link green" to={`/products/${category.toLowerCase()}`} onClick={scroll} >{category}</Link>*/}
            {/*<Link className="offer__product-link" to={`/products/${category.toLowerCase()}/${data.name.toLowerCase()}`} onClick={scroll}>*/}
            <Link className="offer__product-category-link green" to={`/products/${category.toLowerCase()}`}>{category}</Link>
            <Link className="offer__product-link" to={`/product/${data.id}`}>
                <img className="offer__product-image" src={data.image} alt={data.name}/>
            </Link>
            <div className="offer__product-name">
                {/*<Link className="offer__product-name-link" to={`/products/${category.toLowerCase()}/${data.name.toLowerCase()}`} onClick={scroll}>*/}
                <Link className="offer__product-name-link" to={`/product/${data.id}`}>
                    {data.name}
                </Link>
            </div>
            <div className="offer__product-price">{`$${data.price}.00`}</div>
            <AddBtn handler={handleAddToCart}/>
        </div>
    )
}

export default ProductCard;




