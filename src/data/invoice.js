export const invoice ={
    id: 10,
    name: 'Componentes PC',
    client:{
        name: 'Agustin',
        lastName: 'Ramirez',
        address:{
            country: 'Argentina',
            city: 'Cordoba',
            street: 'Pueyrredon',
            number: 85
        }
    },
    company:{
        name: 'Pirce & Pirce',
        fiscalNumber: 1234567,
    },
    items: [
        {
            id: 1,
            product: 'Cpu Intel i7',
            price: 499,
            quantity: 1
        },
        {
            id: 2,
            product: 'Corsair Keyboard Mecanico',
            price: 150,
            quantity: 2
        },
        {
            id: 3,
            product: 'Monitor Asus',
            price: 350,
            quantity: 1
        }
    ]
    
}