import { getInvoice } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { CompanyViews } from "./components/CompanyViews";
import './InvoiceApp.css';
import { InvoiceView } from "./components/InvoiceView";
import { ListItemViews } from "./components/ListItemViews";
import { useState } from "react";

export const InvoiceApp = () => {

    const { id, name, client, company, items: itemsInitial, total } = getInvoice();

    const [formItemsState, setFormItemsState] = useState({
        product: '',
        price: '',
        quantity: ''
    });
    const {product, price, quantity} = formItemsState;

    const [items, setItems] = useState(itemsInitial);
    const [counter, setCounter] = useState(4);

    const onInputChange = ({target: {name, value}}) => {
        console.log(name);
        console.log(value);
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

        setItems([...items, {
            id: counter, 
            product: product.trim(), 
            price: parseInt(price.trim(),10), 
            quantity: +quantity.trim()}]);

        setFormItemsState({
            product: '',
            price: '',
            quantity: ''
        });
        setCounter(counter + 1);
    }

    return (
        <>
            <div className="container">
                <div className="card my-3">
                    <div className="card-header">Ejemplo Factura</div>
                    <div className="card-body">

                        <InvoiceView id={id} name={name} />

                        <div className="row my-3">
                            <div className="col">

                                <ClientView title="Datos del Clinte" client={client} />

                            </div>
                            <div className="col">

                                <CompanyViews title="Datos de la Empresa" company={company} />

                            </div>
                        </div>

                        <ListItemViews title="Productos de la Factura" items={items} total={total} />

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
                            onChange={event => onInputChange(event)}  />

                            <input
                            type="text"
                            name="quantity"
                            value={quantity}
                            placeholder="Cantidad"
                            className="form-control m-3"
                            onChange={onInputChange} />

                            <button type="submit" className="btn btn-primary m-3">Crear Item</button>

                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}