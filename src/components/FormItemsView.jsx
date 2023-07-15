import { useState } from "react";

export const FormItemsView = ({handler}) => {

    const [formItemsState, setFormItemsState] = useState({
        product: '',
        price: '',
        quantity: ''
    });
    const {product, price, quantity} = formItemsState;

    const onInputChange = ({target: {name, value}}) => {
        // console.log(name);
        // console.log(value);
        setFormItemsState({
            ...formItemsState,
            [name]: value
        });
    }
    const onInvoiceItemsSubmit = (event) => {
        event.preventDefault();

        if(product.trim().length < 1) return;
        if(price.trim().length < 1) return;
        if(isNaN(price.trim()) || price.trim() <= 0){
            alert('Error, el precio debe ser un numero mayor a 0');
            return;
        }
        if(quantity.trim().length < 1) return;
        if(isNaN(quantity.trim()) || quantity.trim() <= 0){
            alert('Error, la cantidad debe ser un numero mayor a 0');
            return;
        }

        handler(formItemsState);

        setFormItemsState({
            product: '',
            price: '',
            quantity: ''
        });
    }

    return (
        <>
            <form className="w-50" onSubmit={onInvoiceItemsSubmit}>
                <input
                    type="text"
                    name="product"
                    value={product}
                    placeholder="Producto"
                    className="form-control m-3"
                    onChange={onInputChange} />

                <input
                    type="text"
                    name="price"
                    value={price}
                    placeholder="Precio"
                    className="form-control m-3"
                    onChange={event => onInputChange(event)} />

                <input
                    type="text"
                    name="quantity"
                    value={quantity}
                    placeholder="Cantidad"
                    className="form-control m-3"
                    onChange={onInputChange} />

                <button type="submit" className="btn btn-primary m-3">Crear Item</button>

            </form>
        </>
    )
}