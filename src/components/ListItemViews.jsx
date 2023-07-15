import { RowItemView } from "./RowItemView";
import PropTypes from 'prop-types';
import { TotalView } from "./TotalView";

export const ListItemViews = ({ title,items, total, handlerDeleteItem }) => {

    return (
        <>
            <h4>{title}</h4>
            <table className="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {items.map(({id, product, price, quantity}) => {
                        return (
                            <RowItemView key={id} id={id} product={product} price={price} quantity={quantity} handlerDeleteItem={handlerDeleteItem} />
                        );
                    })}
                </tbody>
            </table>
            <TotalView total={total} />
        </>
    )
} 

ListItemViews.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
}