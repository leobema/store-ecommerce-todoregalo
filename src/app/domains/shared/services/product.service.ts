import { Injectable } from '@angular/core';
import { Product } from './../../../domains/shared/models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  get<T>(productdb: ProductService) {
    throw new Error('Method not implemented.');
  }

  productdb: Product[] = [
    {
      id: 1,
      title: 'Muñeco Milei Chiquito Presidente - Almohada De Apego',
      description: 'Descubre nuestro exclusivo Muñequito de Milei, con un tamaño aproximado de 15 x 26 cm. Este peculiar muñeco es sublimado tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo. Somos LOLAORTEGA COM, tu destino único para moda exclusiva, almohadones, lencería, gorras, tazas y mucho más. Explora nuestra variada selección, arma tu carrito y paga un único envío. Compra con confianza en LOLAORTEGA COM. Encuentra algo especial que refleje tu estilo único. Envíos a todo el país: No importa dónde te encuentres, hacemos envíos a todo el país. Puedes recibir tu Muñequito de Milei en la comodidad de tu hogar. Siempre contamos con stock: Nos esforzamos por satisfacer tus necesidades de inmediato. Si realizas tu pedido, te aseguramos que, si no podemos despachar el mismo día, estaremos enviándolo al día siguiente. ¡Agradecemos tu elección y confianza en nosotros! Si tienes alguna pregunta o solicitud especial, no dudes en contactarnos. ¡Esperamos que disfrutes de tu Muñequito de Milei! ¡Haz tu pedido ahora y añade un toque especial a tu vida!',
      price: 3900,
      creationAt: new Date().toISOString(),
      category_id: 1,
      images: [
        '/assets/images/products/Mileis/image-0-compressed.jpg',
        '/assets/images/products/Mileis/image-1-compressed.jpg',
        '/assets/images/products/Mileis/image-2-compressed.jpg'
      ],
      cant: 40,  
    },
    {
      id: 2,
      title: 'Muñeco Milei Chiquito Serio - Almohada De Apego',
      description: 'Descubre nuestro exclusivo Muñequito de Milei, con un tamaño aproximado de 15 x 26 cm. Este peculiar muñeco es sublimado tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo. Somos LOLAORTEGA COM, tu destino único para moda exclusiva, almohadones, lencería, gorras, tazas y mucho más. Explora nuestra variada selección, arma tu carrito y paga un único envío. Compra con confianza en LOLAORTEGA COM. Encuentra algo especial que refleje tu estilo único. Envíos a todo el país: No importa dónde te encuentres, hacemos envíos a todo el país. Puedes recibir tu Muñequito de Milei en la comodidad de tu hogar. Siempre contamos con stock: Nos esforzamos por satisfacer tus necesidades de inmediato. Si realizas tu pedido, te aseguramos que, si no podemos despachar el mismo día, estaremos enviándolo al día siguiente. ¡Agradecemos tu elección y confianza en nosotros! Si tienes alguna pregunta o solicitud especial, no dudes en contactarnos. ¡Esperamos que disfrutes de tu Muñequito de Milei! ¡Haz tu pedido ahora y añade un toque especial a tu vida!',
      price: 3900,
      creationAt: new Date().toISOString(),
      category_id: 1,
      images: [
        '/assets/images/products/Mileis/image-0-compressed.jpg',
        '/assets/images/products/Mileis/image-1-compressed.jpg',
        '/assets/images/products/Mileis/image-2-compressed.jpg'
      ],
      cant: 40,  
    },

    {
      id: 3,
      title: 'Muñeco Milei Chiquito Enojado - Almohada De Apego',
      description: 'Descubre nuestro exclusivo Muñequito de Milei, con un tamaño aproximado de 15 x 26 cm. Este peculiar muñeco es sublimado tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo. Somos LOLAORTEGA COM, tu destino único para moda exclusiva, almohadones, lencería, gorras, tazas y mucho más. Explora nuestra variada selección, arma tu carrito y paga un único envío. Compra con confianza en LOLAORTEGA COM. Encuentra algo especial que refleje tu estilo único. Envíos a todo el país: No importa dónde te encuentres, hacemos envíos a todo el país. Puedes recibir tu Muñequito de Milei en la comodidad de tu hogar. Siempre contamos con stock: Nos esforzamos por satisfacer tus necesidades de inmediato. Si realizas tu pedido, te aseguramos que, si no podemos despachar el mismo día, estaremos enviándolo al día siguiente. ¡Agradecemos tu elección y confianza en nosotros! Si tienes alguna pregunta o solicitud especial, no dudes en contactarnos. ¡Esperamos que disfrutes de tu Muñequito de Milei! ¡Haz tu pedido ahora y añade un toque especial a tu vida!',
      price: 3900,
      creationAt: new Date().toISOString(),
      category_id: 1,
      images: [
        '/assets/images/products/Mileis/image-0-compressed.jpg',
        '/assets/images/products/Mileis/image-1-compressed.jpg',
        '/assets/images/products/Mileis/image-2-compressed.jpg'
      ],
      cant: 40,  
    },
    {
      id: 4,
      title: 'Muñeco Milei Chiquito Motosierra - Almohada De Apego',
      description: 'Descubre nuestro exclusivo Muñequito de Milei, con un tamaño aproximado de 15 x 26 cm. Este peculiar muñeco es sublimado tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo. Somos LOLAORTEGA COM, tu destino único para moda exclusiva, almohadones, lencería, gorras, tazas y mucho más. Explora nuestra variada selección, arma tu carrito y paga un único envío. Compra con confianza en LOLAORTEGA COM. Encuentra algo especial que refleje tu estilo único. Envíos a todo el país: No importa dónde te encuentres, hacemos envíos a todo el país. Puedes recibir tu Muñequito de Milei en la comodidad de tu hogar. Siempre contamos con stock: Nos esforzamos por satisfacer tus necesidades de inmediato. Si realizas tu pedido, te aseguramos que, si no podemos despachar el mismo día, estaremos enviándolo al día siguiente. ¡Agradecemos tu elección y confianza en nosotros! Si tienes alguna pregunta o solicitud especial, no dudes en contactarnos. ¡Esperamos que disfrutes de tu Muñequito de Milei! ¡Haz tu pedido ahora y añade un toque especial a tu vida!',
      price: 3900,
      creationAt: new Date().toISOString(),
      category_id: 1,
      images: [
        '/assets/images/products/Mileis/image-0-compressed.jpg',
        '/assets/images/products/Mileis/image-1-compressed.jpg',
        '/assets/images/products/Mileis/image-2-compressed.jpg'
      ],
      cant: 40,  
    },
    {
      id: 5,
      title: 'Muñeco Milei Chiquito Comic Motosierra - Almohada De Apego',
      description: 'Descubre nuestro exclusivo Muñequito de Milei, con un tamaño aproximado de 15 x 26 cm. Este peculiar muñeco es sublimado tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo. Somos LOLAORTEGA COM, tu destino único para moda exclusiva, almohadones, lencería, gorras, tazas y mucho más. Explora nuestra variada selección, arma tu carrito y paga un único envío. Compra con confianza en LOLAORTEGA COM. Encuentra algo especial que refleje tu estilo único. Envíos a todo el país: No importa dónde te encuentres, hacemos envíos a todo el país. Puedes recibir tu Muñequito de Milei en la comodidad de tu hogar. Siempre contamos con stock: Nos esforzamos por satisfacer tus necesidades de inmediato. Si realizas tu pedido, te aseguramos que, si no podemos despachar el mismo día, estaremos enviándolo al día siguiente. ¡Agradecemos tu elección y confianza en nosotros! Si tienes alguna pregunta o solicitud especial, no dudes en contactarnos. ¡Esperamos que disfrutes de tu Muñequito de Milei! ¡Haz tu pedido ahora y añade un toque especial a tu vida!',
      price: 3900,
      creationAt: new Date().toISOString(),
      category_id: 1,
      images: [
        '/assets/images/products/Mileis/image-0-compressed.jpg',
        '/assets/images/products/Mileis/image-1-compressed.jpg',
        '/assets/images/products/Mileis/image-2-compressed.jpg'
      ],
      cant: 40,  
    },
    {
      id: 6,
      title: 'Muñeco Milei Chiquito Comic Motosierra - Almohada De Apego',
      description: 'Descubre nuestro exclusivo Muñequito de Milei, con un tamaño aproximado de 15 x 26 cm. Este peculiar muñeco es sublimado tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo. Somos LOLAORTEGA COM, tu destino único para moda exclusiva, almohadones, lencería, gorras, tazas y mucho más. Explora nuestra variada selección, arma tu carrito y paga un único envío. Compra con confianza en LOLAORTEGA COM. Encuentra algo especial que refleje tu estilo único. Envíos a todo el país: No importa dónde te encuentres, hacemos envíos a todo el país. Puedes recibir tu Muñequito de Milei en la comodidad de tu hogar. Siempre contamos con stock: Nos esforzamos por satisfacer tus necesidades de inmediato. Si realizas tu pedido, te aseguramos que, si no podemos despachar el mismo día, estaremos enviándolo al día siguiente. ¡Agradecemos tu elección y confianza en nosotros! Si tienes alguna pregunta o solicitud especial, no dudes en contactarnos. ¡Esperamos que disfrutes de tu Muñequito de Milei! ¡Haz tu pedido ahora y añade un toque especial a tu vida!',
      price: 3900,
      creationAt: new Date().toISOString(),
      category_id: 1,
      images: [
        '/assets/images/products/Mileis/image-0-compressed.jpg',
        '/assets/images/products/Mileis/image-1-compressed.jpg',
        '/assets/images/products/Mileis/image-2-compressed.jpg'
      ],
      cant: 40,  
    },
    {
      id: 7,
      title: 'Corset Corselet Elástizado En Espalda Regulable',
      description: 'Descubre la elegancia en nuestro hermoso corset decorativo de Microtull diseñado para usarse bajo el busto. Ideal para ocasiones íntimas o para complementar tu estilo diario, este corset es versátil y combina perfectamente con tu ropa diaria o diferentes conjuntos de lencería. Es importante destacar que NO está diseñado para reducir el abdomen, sino que es exclusivamente decorativo. Viene armado para adaptarse cómodamente al contorno del busto, ofreciendo tallas hasta 120. Consulta nuestra Guía de Tallas para encontrar el ajuste perfecto y añade un toque de sofisticación a tu colección de lencería. Somos LOLAORTEGA COM, tu destino único para moda exclusiva, almohadones, lencería, gorras, tazas y mucho más. Explora nuestra variada selección, arma tu carrito y paga un único envío. Compra con confianza en LOLAORTEGA COM. Encuentra algo especial que refleje tu estilo único. Envíos a todo el país: No importa dónde te encuentres, hacemos envíos a todo el país. Puedes recibir tu Corset en la comodidad de tu hogar.',
      price: 12570,
      creationAt: new Date().toISOString(),
      category_id: 1,
      images: [
        '/assets/images/products/Mileis/image-0-compressed.jpg',
        '/assets/images/products/Mileis/image-1-compressed.jpg',
        '/assets/images/products/Mileis/image-2-compressed.jpg'
      ],
      cant: 40,  
    },
    {
      id: 8,
      title: 'Muñeco Chayanne Chiquito Clasico - Almohada De Apego',
      description: 'Descubre nuestro exclusivo Muñequito de Chayanne, con un tamaño aproximado de 15 x 26 cm. Este peculiar muñeco es sublimado en la parte delantera, lo que lo convierte en un artículo único y llamativo.',
      price: 3900,
      creationAt: new Date().toISOString(),
      category_id: 1,
      images: [
        '/assets/images/products/Mileis/image-0-compressed.jpg',
        '/assets/images/products/Mileis/image-1-compressed.jpg',
        '/assets/images/products/Mileis/image-2-compressed.jpg'
      ],
      cant: 40,  
    },
    {
      id: 9,
      title: 'Muñeco Chayanne Chiquito Navideño - Almohada De Apego',
      description: 'Descubre nuestro exclusivo Muñequito de Chayanne, con un tamaño aproximado de 15 x 26 cm. Este peculiar muñeco es sublimado en la parte delantera, lo que lo convierte en un artículo único y llamativo.',
      price: 3900,
      creationAt: new Date().toISOString(),
      category_id: 1,
      images: [
        '/assets/images/products/Mileis/image-0-compressed.jpg',
        '/assets/images/products/Mileis/image-1-compressed.jpg',
        '/assets/images/products/Mileis/image-2-compressed.jpg'
      ],
      cant: 40,  
    },
  ];

  constructor() { }
  
  getAllProducts() : Product[] {
    return this.productdb;
  }

  getProductById(id: number) : Product | undefined {
    return this.productdb.find(product => id === product.id); 
  }

  getProductByCategory(id: number) : Product[] {
    return this.productdb.filter(product => id === product.category_id); 
  }
  /*
  getProductsById(id: string) {
    return this.productdb.find(product => product.id);
  } 
  */
}
