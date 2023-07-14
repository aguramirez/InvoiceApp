import { RowItemView } from "./RowItemView";
import PropTypes from 'prop-types';
import { TotalView } from "./TotalView";

export const ListItemViews = ({ title,items, total }) => {

    return (
        <>
            <h4>{title}</h4>
            <table className="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {items.map(({id, product, price, quantity}) => {
                        return (
                            <RowItemView key={id} product={product} price={price} quantity={quantity} />
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