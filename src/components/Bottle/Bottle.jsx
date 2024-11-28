import PropTypes from 'prop-types';
import './Bottle.css'
const Bottle = ({bottle,handleAddToCart}) => {
    
    const {name,img,price} = bottle
    return (
        <div className="Bottle">
            <h3>Bottle:{name}</h3>
            <img src={img} alt="" />
            <p>price:${price}</p>
            <button onClick={()=>handleAddToCart(bottle)}>purchase</button>
          
        </div>
    );
};

Bottle.propTypes ={
    bottle: PropTypes.array.isRequired,
    handleAddToCart:PropTypes.func.isRequired
}

export default Bottle;