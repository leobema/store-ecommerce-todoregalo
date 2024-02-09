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
    {
      id: 10,
      title: 'Muñeco Chayanne Chiquito con la Rosa - Almohada De Apego',
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
      id: 11,
      title: 'Bralette Transparente Con Detalle Sobre Busto Y Pantie',
      description: 'Experimenta la elegancia con nuestro Corpiño en microtull delicado y una Bombacha diseñada con puntilla y detalles cautivadores. IMPORTANTE: Indica el talle de la bombacha (Talle del 1 al 7) a través de mensaje privado. Descubre la perfecta combinación de estilo y comodidad con nuestra lencería de calidad.',
      price: 12370,
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
      id: 12,
      title: 'Hermoso Conjunto Bralette Y Pantie Liguero',
      description: 'Descubre la belleza con nuestro conjunto que incluye un Bralette Corpiño diseñado con puntilla y detalles cautivadores, junto con un encantador Liguero. Además, completa tu look con un hermoso Colaless REGULABLE, todo en el mismo diseño. IMPORTANTE: Especifica el TALLE de la Bombacha (Talle del 1 al 7) por Mensaje Privado. Eleva tu estilo con esta combinación perfecta de elegancia y comodidad.',
      price: 12370,
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
      id: 13,
      title: 'Bello Conjunto Transparente Nude En Microtull Elástizado',
      description: 'Sumérgete en la belleza con nuestro conjunto que incluye un Bralette Corpiño exquisitamente diseñado en Microtull con detalles cautivadores, acompañado por una hermosa bombacha en el mismo diseño. IMPORTANTE: Indícanos el TALLE de la Bombacha (del 1 al 7) a través de Mensaje Privado. Descubre la combinación perfecta de estilo y confort con este conjunto único.',
      price: 12370,
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
      id: 14,
      title: 'Corset En Cuerina Con Cierre - Accesorio Perfecto',
      description: 'Descubre la belleza atemporal de nuestro hermoso corset decorativo diseñado para uso diario, perfecto para llevar bajo el busto. Este delicado accesorio se adapta armoniosamente a tu estilo diario y se combina a la perfección con diversos conjuntos de lencería. Cada pieza está fabricada de forma artesanal, asegurando una calidad excepcional como se muestra en la foto. *No incluye Camiseta. Consulta nuestra Guía de Talles para encontrar la opción perfecta. Este corset viene armado para ajustarse cómodamente al contorno del busto, y lo realizamos hasta el talle XL. Eleva tu estilo con este toque artesanal y elegante.',
      price: 12370,
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
      id: 15,
      title: 'Corset En Cuerina Con Cierre - Accesorio Perfecto',
      description: 'Descubre la belleza atemporal de nuestro hermoso corset decorativo diseñado para uso diario, perfecto para llevar bajo el busto. Este delicado accesorio se adapta armoniosamente a tu estilo diario y se combina a la perfección con diversos conjuntos de lencería. Cada pieza está fabricada de forma artesanal, asegurando una calidad excepcional como se muestra en la foto. *No incluye Camiseta. Consulta nuestra Guía de Talles para encontrar la opción perfecta. Este corset viene armado para ajustarse cómodamente al contorno del busto, y lo realizamos hasta el talle XL. Eleva tu estilo con este toque artesanal y elegante.',
      price: 12370,
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
      id: 16,
      title: 'Conjunto Bralette Y Bombacha En Bella Puntilla Elastizada',
      description: 'Descubre la belleza atemporal de nuestro hermoso corset decorativo diseñado para uso diario, perfecto para llevar bajo el busto. Este delicado accesorio se adapta armoniosamente a tu estilo diario y se combina a la perfección con diversos conjuntos de lencería. Cada pieza está fabricada de forma artesanal, asegurando una calidad excepcional como se muestra en la foto. *No incluye Camiseta. Consulta nuestra Guía de Talles para encontrar la opción perfecta. Este corset viene armado para ajustarse cómodamente al contorno del busto, y lo realizamos hasta el talle XL. Eleva tu estilo con este toque artesanal y elegante.',
      price: 22240,
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
      id: 17,
      title: 'Conjunto Bralette En Puntilla Y Colaless Elegante',
      description: 'Bello Conjunto Bralette y Colaless diseño en Microtull con detalles para exhibir.',
      price: 22240,
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
      id: 18,
      title: 'Bello Conjunto Transparente Nude 3 Piezas En Hermoso Color',
      description: 'Bello Conjunto Bralette y Colaless diseño en Microtull con detalles para exhibir.',
      price: 22240,
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
      id: 19,
      title: 'Conjunto Bralette En Puntilla Y Colaless Elegante Y Sexy',
      description: 'Descubre la belleza en nuestro conjunto Bralette diseñado con puntilla, con detalles cautivadores que realzan tu estilo, y complementado con un encantador Colaless a juego. Este conjunto fusiona la elegancia de la puntilla con un diseño cuidadosamente elaborado para exhibir tu belleza de manera sutil y sofisticada. Experimenta la sensualidad y la comodidad en un solo conjunto.',
      price: 12544,
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
      id: 20,
      title: 'Bralette En Puntilla Elegante Y Sexy',
      description: 'Descubre la belleza con nuestro Bralette diseñado en puntilla, con detalles cautivadores que resaltan tu estilo. Si prefieres el encanto del blanco o cualquier otro color, no dudes en consultar la disponibilidad. Importante destacar que este Bralette NO INCLUYE PANTIE, pero puedes comunicarte conmigo para añadirlo a través de Mercadolibre y beneficiarte de un solo envío para ambos productos. Eleva tu colección de lencería con esta pieza única y delicada.',
      price: 12544,
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
      id: 21,
      title: 'Corset Corselet Ecocuero Elastizado Reversible Dos Colores',
      description: 'Descubre la exquisitez con nuestro hermoso corset decorativo diseñado para uso diario, perfecto para llevar bajo el busto. Este accesorio versátil puede complementar tu vestimenta diaria y diversos conjuntos de lencería, ofreciendo una opción de moda artesanal única, tal como se ve en la foto. PLUS: Viene con un segundo color reversible para alternar... (*u*) *No incluye Camiseta. Consulta nuestra Guía de Talles para encontrar la opción perfecta. Este corset viene armado para adaptarse cómodamente al contorno del busto, y lo realizamos hasta el talle XL. Añade un toque de sofisticación a tu estilo diario con esta pieza artesanal y reversible.',
      price: 12544,
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
      id: 22,
      title: 'Muñeco de Cristina Fernández de Kirchner Chiquito - Almohada De Apego',
      description: 'Descubre nuestro exclusivo Muñequito de Cristina, con un tamaño aproximado de 15 x 26 cm. Este peculiar muñeco es sublimado en la parte delantera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 23,
      title: 'Almohadones Decorativos 40x40 Frases Motivacionales - Deco Hogar',
      description: 'Bienvenido a la publicación individual de almohadones 40x40, ideal para que puedas armar tu propio combo a tu gusto con diseños de lujo que embellecerán la comodidad de tu hogar.',
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
      id: 24,
      title: 'X5 Llaveros Harry Potter Souvenirs - Elegí Diseños Varios',
      description: 'Lleva la magia contigo con nuestros llaveros plásticos de Harry Potter, disponibles en varios modelos (x5). El precio publicado es por [5] unidades, seleccionadas entre los modelos y cantidades mostrados en la foto. ¡Acompaña tus llaves con la esencia mágica de Harry Potter!',
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
      id: 25,
      title: 'Body En Bello Encaje Corte Alto En Cintura, Hermoso Diseño',
      description: 'Lencería sexy y sensual que despierta la pasión. Explora la sensualidad con nuestro bello Body diseñado en puntilla, con detalles cautivadores que te invitan a exhibir tu lado más seductor.',
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
      id: 26,
      title: 'Bello Bralette Corte Triangular Y Pantie Revelador',
      description: 'Sumérgete en la belleza con nuestro conjunto que incluye un Bralette Corpiño diseñado con puntilla y detalles cautivadores, complementado por un hermoso Colaless REGULABLE en el mismo diseño. Además, completa tu look con un elegante Liguero para un toque adicional de encanto. Si prefieres el encanto del blanco u otro color, no dudes en consultarnos para verificar la disponibilidad. Este conjunto es la elección perfecta para resaltar tu feminidad con estilo y elegancia.',
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
      id: 27,
      title: 'Muñeco Sergio Massa Chiquito - Almohada De Apego',
      description: 'Descubre nuestro exclusivo Muñequito de Sergio, con un tamaño aproximado de 15 x 26 cm. Este peculiar muñeco es sublimado en la parte delantera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 28,
      title: 'Taza De Ceramica - Milei Ideal Para Libertarios',
      description: '¡Lleva a casa una taza personalizada del político del momento! Descubre nuestros modelos para que elijas tu favorito.',
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
      id: 29,
      title: 'Conjunto Bralette Liguero E Hilo Super Candente',
      description: 'Embárcate en la elegancia con nuestro bello conjunto que incluye un Bralette Corpiño diseñado en puntilla con detalles cautivadores, complementado por un encantador liguero para un toque de seducción adicional. Además, completa tu conjunto con un hermoso colaless REGULABLE en el mismo diseño. Esta exquisita combinación resalta tu feminidad con estilo y sofisticación. Vive la experiencia de la sensualidad y la moda con este conjunto irresistible.',
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
      id: 30,
      title: 'Muñeco 100% Personalizado De Almohada De Apego - Sublimado',
      description: 'Esta publicación está diseñada para atender tus peticiones especiales. Ejemplos incluyen la adición de un rostro a una foto de persona, animal, caricatura, etc. Trabajaremos en la eliminación del fondo y ajustaremos la imagen al muñeco, sin realizar mayores modificaciones de diseño gráfico. Asegúrate de proporcionar una foto de alta calidad y resolución. Los colores pueden tener variaciones debido al proceso de sublimación. No se aceptarán fotos que vayan en contra de la legalidad, moral o buenas costumbres. Antes de ofertar, contáctanos con tu idea para confirmar la viabilidad del proyecto. En caso de no cumplir con las normativas, al llegar al día de envío, se enviará un muñeco de apego de algún personaje. Al ofertar en esta publicación, aceptas las condiciones del trabajo personalizado. ¡Esperamos crear algo único y especial para ti!',
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
      id: 31,
      title: 'Conjunto Corpiño Con Detalle En Flecos Y Bombacha',
      description: 'Descubre la sensualidad con nuestro corpiño en diseño exclusivo, solo en bretel y sin relleno, con detalles cautivadores para exhibir (ver fotos). Complementa tu estilo con nuestra bombacha en diseño único, también en bretel elástizado... IMPORTANTE: Envía por mensaje privado el talle de la bombacha (del 1 al 7). Vive la experiencia de la moda y la comodidad con esta exquisita combinación.',
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
      id: 32,
      title: 'Muñeco Messi Chiquito - Almohada De Apego',
      description: 'Descubre nuestro exclusivo Muñequito de Messi, con un tamaño aproximado de 15 x 26 cm. Este peculiar muñeco es sublimado en la parte delantera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 33,
      title: 'Corset Conjunto En Microtull - Ropa Interior Deluxe',
      description: 'Experimenta la sensualidad con nuestro conjunto de corte tipo corset, elaborado en microtull. Destaca por su detalle frontal de falsa ballena, diseñado de manera decorativa para añadir un toque único y atractivo. Este conjunto fusiona el encanto clásico con la modernidad del microtull, ofreciéndote una experiencia de lencería que combina estilo y comodidad. Descubre la elegancia y la sofisticación con cada detalle.',
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
      id: 34,
      title: 'Muñeco Patricia Bullrich Chiquito - Almohada De Apego',
      description: 'Descubre nuestro exclusivo Muñequito de Patricia, con un tamaño aproximado de 15 x 26 cm. Este peculiar muñeco es sublimado en la parte delantera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 35,
      title: 'X5 Pack De Llaveros Diseños Varios - Copa Del Mundo Ideal',
      description: 'Luce el orgullo mundialista con nuestro llavero de la Copa del Mundo. Medida: 5 cm Material: Plástico de alta calidad Ideal como souvenir, regalo o recuerdo. Entrega inmediata, si figura en stock es porque lo tenemos disponible.',
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
      id: 36,
      title: 'Almohadones Decorativos 40x40 Frases Motivación Pack 4 Unid',
      description: 'Tipo de Producto: Pack x 4 Almohadones 40x40. Diseños: Se pueden elegir entre los diseños disponibles, que se pueden ver en las fotos adjuntas. Incluido en la Publicación: 4 almohadones 40x40 con frases motivacionales estampadas.',
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
      id: 37,
      title: 'Almohadones Decorativos 40x40 Frases Motivación Pack 4 Unid',
      description: 'Tipo de Producto: Pack x 4 Almohadones 40x40. Diseños: Se pueden elegir entre los diseños disponibles, que se pueden ver en las fotos adjuntas. Incluido en la Publicación: 4 almohadones 40x40 con frases motivacionales estampadas.',
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
      id: 38,
      title: 'Body Negro Con Detalles En Puntilla Y Algodón',
      description: 'Sumérgete en la sensualidad con nuestro body en bella lencería de puntilla. Este exquisito diseño realza tu feminidad con elegancia y estilo.',
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
      id: 39,
      title: 'Muñeco Marco Antonio Solís Chiquito - Almohada De Apego',
      description: 'Descubre nuestro exclusivo Muñequito de Marcos, con un tamaño aproximado de 15 x 26 cm. Este peculiar muñeco es sublimado en la parte delantera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 40,
      title: 'Almohadones Gamer 40x40 Play Station Y Xbox Pack 4 Unid',
      description: 'Nombre del Producto: Pack x 4 Almohadones Gamers 40x40, Opciones de Diseño: Se pueden elegir entre los diseños disponibles (Ver fotos y opciones).',
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
      id: 41,
      title: 'Bralette Con 3 Tiras En Espalda Y Bombacha Con Tiras',
      description: '+ Corpiño En bella lencería + Bombacha con diseño en puntilla con detalles para exhibir. IMPORTANTE: Especificar por mensaje privado el talle de la bombacha (Talle del 1 al 7)',
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
      id: 42,
      title: 'Ricky Martin Chiquito - Almohada De Apego',
      description: 'Descubre nuestro exclusivo Muñequito de Ricky, con un tamaño aproximado de 15 x 26 cm. Este peculiar muñeco es sublimado en la parte delantera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 43,
      title: 'Almohadones Decorativos 40x40 Frases Motivación Pack 2 Unid',
      description: 'PACK x 2 ALMOHADONES 40x40, PUEDE ESCOGER ENTRE LOS DISEÑOS DISPONIBLES... (Mirar las fotos con todos los diseños)',
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
      id: 44,
      title: 'Almohadones Decorativos 40x40 Frases Motivación Pack 4 Unid',
      description: 'PACK x 4 ALMOHADONES 40x40. ¿QUÉ INCLUYE LA PUBLICACIÓN? 4 almohadones 40x40 (con frases motivacionales inspiracionales estampadas)',
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
      id: 45,
      title: 'Almohadones Decorativos 40x40 Frases Motivación Pack 4 Unid',
      description: 'PACK x 4 ALMOHADONES 40x40. ¿QUÉ INCLUYE LA PUBLICACIÓN? 4 almohadones 40x40 (con frases motivacionales inspiracionales estampadas)',
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
      id: 46,
      title: 'Milei Buddah De La Suerte - 12cm Altura - Buda De Vllc',
      description: 'Pequeña Estatua Realizada en Plástico Biodegradable, Ideal para tu escritorio, mostrador o cualquier lugar que consideres conveniente. Dimensiones: 12 cm x 7 cm x 7 cm. Peso: Aproximadamente 70 gramos. El precio publicado es por [1] unidad.',
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
      id: 47,
      title: 'Funda Almohadones 40x40 Con Frases Motivacionales - New Look',
      description: '¡Descubre la Elegancia y Motivación con Nuestras Fundas de Almohadones de 40x40! **Arma tu colección con las mejores frases para tu ambiente para tu espacio** Transforma tus espacios con nuestras fundas de almohadones diseñadas para agregar estilo y motivación a tu hogar. Con frases motivacionales, estas fundas son ideales para decorar tu sofá y camas, proporcionando un toque inspirador a cada rincón.',
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
      id: 48,
      title: 'Pijama Para Lucir Antes De Dormir De Dama Desde Xs',
      description: 'Conjunto Pijama - Diseñado para un excelente calce y confección. Material: Morley con detalles en puntilla.',
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
      id: 49,
      title: 'Almohadon Chayanne Grande De 100 Cm - Ideal Para Abrazar',
      description: 'Funda con Almohada: Medidas: 100 x 40 cm. Tela: Fabricada con tela Tropical de excelente calidad, suave al tacto. Funda Desmontable, No usa cierre, usa un dobles oculto. Color: Sublimada a full color. Durabilidad: La estampa es a todo color y no se va con los lavados. Cuidado: No necesita cuidados especiales para la funda. Con el relleno, lavar a mano. Esta descripción proporciona una visión clara de las especificaciones y características del producto. Si tienes alguna pregunta no dudas en hacerla.',
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
      id: 50,
      title: 'Marihuana Articulada En 3d - 17cm Articulo Decorativo Porro',
      description: 'Tipo de Producto: Figura articulada en forma de hoja de marihuana. Proceso de Fabricación: Impresión en 3D, lo que garantiza detalles precisos y diseño personalizado.',
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
      id: 51,
      title: 'Llavero Souvenir - Modelos De Star Wars 3d - Buen Regalo',
      description: 'Características: -Altura 5 cm aprox ; 4cm Diametro -Llavero en impresión 3D. -Material: PLA, En color Negro con detalle en pintura Plateada Metalizada',
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
      id: 52,
      title: 'Holder Para Kit De Destornilladores Slot X9 - 3d',
      description: 'Este organizador porta holder para destornilladores es fabricado mediante impresión 3D con la máxima calidad del mercado, utilizando PLA. Ofrece una capacidad máxima para sostener hasta 9 destornilladores. Este práctico accesorio te ayuda a mantener tus herramientas ordenadas y al alcance de la mano, facilitando tu trabajo y optimizando el espacio. Con este organizador, tendrás una solución eficiente y estéticamente agradable para almacenar tus destornilladores en la pared.',
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
      id: 53,
      title: 'Gorra Personajes Mario Bros Adulto Unisex - Universo Mario',
      description: '¡Sumérgete en el mundo mágico de Mario Bros con nuestras exclusivas gorras diseñadas para los verdaderos fanáticos de los videojuegos! Presentamos una colección única que fusiona la nostalgia de Mario Bros con un toque moderno de moda urbana. Aquí está lo que hace que nuestras gorras destaquen:',
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
      id: 54,
      title: 'Conjunto Corpiño Y Bombacha Con Detalle En Bordillo',
      description: '+ Corpiño En bello algodón y detalles en puntilla, No viene el corpiño con taza, es la misma tela de algodón. + Bombacha con diseño en puntilla con detalles para exhibir.',
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
      id: 55,
      title: 'Baby Spiderman Muñeco El Hombre Araña - Muñeco de Apego',
      description: 'Muñeco Tipo Peluche Apego De Tela Sublimado Alta Calidad Relleno Vellón Siliconado 22cm aprx de altura.',
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
      id: 56,
      title: 'Conjunto De Lencería Atrevida En Charol',
      description: 'Experimenta la elegancia con nuestro hermoso Top y Bombacha tipo Pantie, elaborados en charol de alta calidad. Esta sofisticada combinación es perfecta para complementar tu ropa diaria y diversos conjuntos de lencería, brindándote versatilidad y estilo.',
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
      id: 57,
      title: 'Muñeco John Wick Chiquito - Almohada De Apego',
      description: 'Descubre nuestro exclusivo Muñequito de Jhon, con un tamaño aproximado de 15 x 26 cm. Este peculiar muñeco es sublimado tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 58,
      title: 'Almohadones Nórdicos Infantiles Bebés, Cuna, Deco 27x15',
      description: 'Descubre nuestro exclusivo Muñequito de Animales, con un tamaño aproximado de 15 x 26 cm. Este peculiar muñeco es sublimado tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 59,
      title: 'X5 Llaveros Souvenir - Modelos De Calavera 3d - Buen Regalo',
      description: 'Características: -Altura 2,5 cm aprox ; 3cm Diametro. -Llavero en impresión 3D. -Material: PLA, En color Negro con detalle en pintura Plateada Metalizada',
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
      id: 60,
      title: 'Lampara Seleccion Argentina Luz Noche Colores Rgb Integrados',
      description: 'LÁMPARA DE PLÁSTICO IMPRESION 3D - AFA ARGENTINA CAMPEÓN DEL MUNDO - VELADOR LED RGB. Embellece tu espacio con nuestro velador decorativo de la AFA (Selección Argentina) en elegantes colores negro y amarillo. Este velador cuenta con luces LED RGB (multicolor) controladas por un control remoto, brindando una iluminación única y ajustable a tu hogar u oficina. Detalle grabado con lo 3 años que ha sido campeón.',
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
      id: 61,
      title: 'Almohadon De Bts Grande De 100 Cm - Ideal Para Abrazar',
      description: 'Funda con Almohada: Medidas: 100 x 40 cm. Tela: Fabricada con tela Tropical de excelente calidad, suave al tacto.',
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
      id: 62,
      title: 'Almohadon Messi El Grande De 100 Cm - Ideal Para Abrazar',
      description: 'Funda con Almohada: Medidas: 100 x 40 cm. Tela: Fabricada con tela Tropical de excelente calidad, suave al tacto.',
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
      id: 63,
      title: 'Llavero X5 Pack Poro Poritos De Lol - League Of Legends Souvenir',
      description: 'Lleva contigo el personaje más icónico de league of legends, disponibles en varios modelos (próximamente) (x5).',
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
      id: 64,
      title: 'Muñeco Javier Milei Caballero 3d De 17cm - No Motosierra',
      description: 'Muñeco impreso en 3D de Javier Milei y Versión Caballero Agarrador de la Pala! Dale miedo a la Casta con esta figura de Javi empuñando la pala trabajando por el País!',
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
      id: 65,
      title: 'Remera Unisex: Estilo 3d Para Verdaderos Gamers',
      description: 'Descubre la Excelencia en Moda con Nuestras Remeras: En el corazón de nuestra colección de moda se encuentran nuestras remeras diseñadas para ofrecerte una experiencia de uso excepcional.',
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
      id: 66,
      title: 'Remera Unisex: Estilo 3d Para Verdaderos Gamers',
      description: 'Descubre la Excelencia en Moda con Nuestras Remeras: En el corazón de nuestra colección de moda se encuentran nuestras remeras diseñadas para ofrecerte una experiencia de uso excepcional.',
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
      id: 67,
      title: 'Remera Unisex: Estilo 3d Para Verdaderos Gamers',
      description: 'Descubre la Excelencia en Moda con Nuestras Remeras: En el corazón de nuestra colección de moda se encuentran nuestras remeras diseñadas para ofrecerte una experiencia de uso excepcional.',
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
      id: 68,
      title: 'Remera Unisex: Estilo 3d Para Verdaderos Gamers',
      description: 'Descubre la Excelencia en Moda con Nuestras Remeras: En el corazón de nuestra colección de moda se encuentran nuestras remeras diseñadas para ofrecerte una experiencia de uso excepcional.',
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
      id: 69,
      title: 'Remera Unisex: Estilo 3d Para Verdaderos Gamers',
      description: 'Descubre la Excelencia en Moda con Nuestras Remeras: En el corazón de nuestra colección de moda se encuentran nuestras remeras diseñadas para ofrecerte una experiencia de uso excepcional.',
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
      id: 70,
      title: 'Remera Unisex: Estilo 3d Para Verdaderos Gamers',
      description: 'Descubre la Excelencia en Moda con Nuestras Remeras: En el corazón de nuestra colección de moda se encuentran nuestras remeras diseñadas para ofrecerte una experiencia de uso excepcional.',
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
      id: 71,
      title: 'Remera Unisex: Estilo 3d Para Verdaderos Gamers',
      description: 'Descubre la Excelencia en Moda con Nuestras Remeras: En el corazón de nuestra colección de moda se encuentran nuestras remeras diseñadas para ofrecerte una experiencia de uso excepcional.',
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
      id: 72,
      title: 'Remera Unisex: Estilo 3d Para Verdaderos Gamers',
      description: 'Descubre la Excelencia en Moda con Nuestras Remeras: En el corazón de nuestra colección de moda se encuentran nuestras remeras diseñadas para ofrecerte una experiencia de uso excepcional.',
      price: 3900,
      creationAt: new Date().toISOString(),
      category_id: 1,
      images: [
        '/assets/images/products/Mileis/image-0-compressed.jpg',
        '/assets/images/products/Mileis/image-1-compressed.jpg',
        '/assets/images/products/Mileis/image-2-compressed.jpg'
      ],
      cant: 73,  
    },
    {
      id: 65,
      title: 'Remera Unisex: Estilo 3d Para Verdaderos Gamers',
      description: 'Descubre la Excelencia en Moda con Nuestras Remeras: En el corazón de nuestra colección de moda se encuentran nuestras remeras diseñadas para ofrecerte una experiencia de uso excepcional.',
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
      id: 74,
      title: 'Remera Unisex: Estilo 3d Para Verdaderos Gamers',
      description: 'Descubre la Excelencia en Moda con Nuestras Remeras: En el corazón de nuestra colección de moda se encuentran nuestras remeras diseñadas para ofrecerte una experiencia de uso excepcional.',
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
      id: 75,
      title: 'Almohada Estudiantes Club Almohada De Apego Pequeña Chica',
      description: 'Descubre nuestro exclusivo Almohada del Estudiantes, con un tamaño aproximado de 15 x 26 cm. Esta peculiar almohada es sublimada tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 76,
      title: 'Almohada Independiente Rivadavia Club De Apego Pequeña Chica',
      description: 'Descubre nuestro exclusivo Almohada del Estudiantes, con un tamaño aproximado de 15 x 26 cm. Esta peculiar almohada es sublimada tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 77,
      title: 'Almohada River Club Plate Almohada De Apego Pequeña Chica',
      description: 'Descubre nuestro exclusivo Almohada del Estudiantes, con un tamaño aproximado de 15 x 26 cm. Esta peculiar almohada es sublimada tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 78,
      title: 'Almohada San Lorenzo Club Almohada De Apego Pequeña Chica',
      description: 'Descubre nuestro exclusivo Almohada del Estudiantes, con un tamaño aproximado de 15 x 26 cm. Esta peculiar almohada es sublimada tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 79,
      title: 'Muñeco Victoria Villarruel Chiquito - Almohada De Apego',
      description: 'Descubre nuestro exclusivo Almohada del Estudiantes, con un tamaño aproximado de 15 x 26 cm. Esta peculiar almohada es sublimada tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 81,
      title: 'Almohada Godoy Cruz Mendoza Almohada De Apego Pequeña Chica',
      description: 'Descubre nuestro exclusivo Almohada del Estudiantes, con un tamaño aproximado de 15 x 26 cm. Esta peculiar almohada es sublimada tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 82,
      title: 'Almohada Boca Junior Club Almohada De Apego Pequeña Chica',
      description: 'Descubre nuestro exclusivo Almohada del Estudiantes, con un tamaño aproximado de 15 x 26 cm. Esta peculiar almohada es sublimada tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 83,
      title: 'Almohada Independiente Club Almohada De Apego Pequeña Chica',
      description: 'Descubre nuestro exclusivo Almohada del Estudiantes, con un tamaño aproximado de 15 x 26 cm. Esta peculiar almohada es sublimada tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 84,
      title: 'Lampara Boca Junior Club Luz Noche Colores Rgb Integrados',
      description: 'Descubre nuestro exclusivo Almohada del Estudiantes, con un tamaño aproximado de 15 x 26 cm. Esta peculiar almohada es sublimada tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 85,
      title: 'Lampara Super Mario Bros Luz Noche Colores Rgb Integrados',
      description: 'Descubre nuestro exclusivo Almohada del Estudiantes, con un tamaño aproximado de 15 x 26 cm. Esta peculiar almohada es sublimada tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 86,
      title: 'Bombachas Colaless Estampadas Xunidad Ideal Para Vos',
      description: 'Descubre nuestro exclusivo Almohada del Estudiantes, con un tamaño aproximado de 15 x 26 cm. Esta peculiar almohada es sublimada tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 87,
      title: 'Bombachas Colaless Estampadas Xunidad Ideal Para Vos',
      description: 'Descubre nuestro exclusivo Almohada del Estudiantes, con un tamaño aproximado de 15 x 26 cm. Esta peculiar almohada es sublimada tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 88,
      title: 'Lampara Play Station Luz Noche Colores Rgb Integrados',
      description: 'Descubre nuestro exclusivo Almohada del Estudiantes, con un tamaño aproximado de 15 x 26 cm. Esta peculiar almohada es sublimada tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 89,
      title: 'Lampara River Plate Club Luz Noche Colores Rgb Integrados',
      description: 'Descubre nuestro exclusivo Almohada del Estudiantes, con un tamaño aproximado de 15 x 26 cm. Esta peculiar almohada es sublimada tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 90,
      title: 'Gorra Star Tropper Coffee - Diseños Varios - Calidad Aaa',
      description: 'Descubre nuestro exclusivo Almohada del Estudiantes, con un tamaño aproximado de 15 x 26 cm. Esta peculiar almohada es sublimada tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 91,
      title: 'Gorra Diseño Fuck Estampado Diferentes Diseños Y Colores',
      description: 'Descubre nuestro exclusivo Almohada del Estudiantes, con un tamaño aproximado de 15 x 26 cm. Esta peculiar almohada es sublimada tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 91,
      title: 'Almohadon Con Personajes De Star Wars - Decora Tu Hogar',
      description: 'Descubre nuestro exclusivo Almohada del Estudiantes, con un tamaño aproximado de 15 x 26 cm. Esta peculiar almohada es sublimada tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 92,
      title: 'Fundas De Almohadon 40x40 Personajes Star Wars - Diseños Varios',
      description: 'Descubre nuestro exclusivo Almohada del Estudiantes, con un tamaño aproximado de 15 x 26 cm. Esta peculiar almohada es sublimada tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 93,
      title: 'Muñeco Taylor Swift Chiquito - Almohada De Apego - Jesus',
      description: 'Descubre nuestro exclusivo Almohada del Estudiantes, con un tamaño aproximado de 15 x 26 cm. Esta peculiar almohada es sublimada tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 93,
      title: 'Almohadones Decorativos 40x40 Frases Motivación Pack 3 Unid',
      description: 'Descubre nuestro exclusivo Almohada del Estudiantes, con un tamaño aproximado de 15 x 26 cm. Esta peculiar almohada es sublimada tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 94,
      title: 'Muñeco Diana Mondino Chiquito - Almohada De Apego',
      description: 'Descubre nuestro exclusivo Almohada del Estudiantes, con un tamaño aproximado de 15 x 26 cm. Esta peculiar almohada es sublimada tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 95,
      title: 'Almohada Miami International Club De Apego Pequeña Chica',
      description: 'Descubre nuestro exclusivo Almohada del Estudiantes, con un tamaño aproximado de 15 x 26 cm. Esta peculiar almohada es sublimada tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 96,
      title: 'Almohada Racing Club Almohada De Apego Pequeña Chica',
      description: 'Descubre nuestro exclusivo Almohada del Estudiantes, con un tamaño aproximado de 15 x 26 cm. Esta peculiar almohada es sublimada tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 97,
      title: 'Almohada Gimnasia Y Esg Club Almohada De Apego Pequeña Chica',
      description: 'Descubre nuestro exclusivo Almohada del Estudiantes, con un tamaño aproximado de 15 x 26 cm. Esta peculiar almohada es sublimada tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 98,
      title: 'Muñeco Rambo Chiquito - Almohada De Apego - Chibi Rambo',
      description: 'Descubre nuestro exclusivo Almohada del Estudiantes, con un tamaño aproximado de 15 x 26 cm. Esta peculiar almohada es sublimada tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 99,
      title: 'Almohadon De 40cm Puchito De Marihuana - Diseño Decorativo',
      description: 'Descubre nuestro exclusivo Almohada del Estudiantes, con un tamaño aproximado de 15 x 26 cm. Esta peculiar almohada es sublimada tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 100,
      title: 'Almohadón Decorativo Forma Pene - Divertido Ideal 29x21 Cm',
      description: 'Descubre nuestro exclusivo Almohada del Estudiantes, con un tamaño aproximado de 15 x 26 cm. Esta peculiar almohada es sublimada tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo.',
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
      id: 101,
      title: 'Almohadón Decorativo Forma Pene - Divertido Ideal 29x21 Cm',
      description: 'Descubre nuestro exclusivo Almohada del Estudiantes, con un tamaño aproximado de 15 x 26 cm. Esta peculiar almohada es sublimada tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo.',
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
