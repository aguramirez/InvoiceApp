import { calcularTotal, getInvoice } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { CompanyViews } from "./components/CompanyViews";
import './InvoiceApp.css';
import { InvoiceView } from "./components/InvoiceView";
import { ListItemViews } from "./components/ListItemViews";
import { useEffect, useState } from "react";
import { FormItemsView } from "./components/FormItemsView";

const invoiceInitial = {
    id: 0,
    name: '',
    client:{
        name: '',
        lastName: '',
        address:{
            country: '',
            city: '',
            street: '',
            number: 0
        }
    },
    company:{
        name: '',
        fiscalNumber: 0,
    },
    items: []
    
};

export const InvoiceApp = () => {

    const [activeForm, setActiveForm] = useState(false);

    const [counter, setCounter] = useState(4);
    const [invoice, setInvoice] = useState(invoiceInitial);
    const [items, setItems] = useState([]);
    
    const [total, setTotal] = useState(0);
    
    const { id, name, client, company } = invoice;


    useEffect(() => {
        const data = getInvoice();
        console.log(data);
        setInvoice(data);
        setItems(data.items);
    }, []);

    useEffect(() => {
        setTotal(calcularTotal(items))
    },[items])

    

    const handlerAppItems = ({product, price, quantity}) => {

        setItems([...items, {
            id: counter, 
            product: product.trim(), 
            price: parseInt(price.trim(),10), 
            quantity: +quantity.trim()}]);

        setCounter(counter + 1);
    }

    const handlerDeleteItem = (id) =>{
        setItems(items.filter(i => i.id !== id));
    }

    const onActiveForm = () => {
        setActiveForm(!activeForm);
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

                        <ListItemViews title="Productos de la Factura" items={items} total={total} handlerDeleteItem={handlerDeleteItem} />

                        <button 
                        className="btn btn-secondary"
                        onClick={onActiveForm}>{ !activeForm?'Agregar Item':'Cerrar'}</button>
                        { !activeForm? '': <FormItemsView handler={handlerAppItems} />}
                        
                    </div>
                </div>
            </div>
        </>
    )
}