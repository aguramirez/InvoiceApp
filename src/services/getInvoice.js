import { invoice } from "../data/invoice"

export const getInvoice = () =>{

    // console.log(invoice);

    // let suma = 0;

    // invoice.items.forEach(i => {
    //     suma += i.price * i.quantity;
    // })

    const suma = invoice.items
        .map( i => i.price * i.quantity)
        .reduce((accum, curr) => accum + curr, 0); //el 0 dice que el accum empieza en 0

    return {...invoice, total: suma};
}