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
      title: 'Prod 1',
      description: 'Esto es la descripcion Prod 1',
      price: 100,
      creationAt: new Date().toISOString(),
      category_id: 5,
      images: [
        'https://cdns-images.dzcdn.net/images/artist/03ac3759cf240640d902d9aa5a067632/500x500.jpg',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dd574b8c-3262-41c3-a671-f98ed74e26c7/d4691o5-352c7226-2945-4c62-b7c6-e1f6522ab358.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RkNTc0YjhjLTMyNjItNDFjMy1hNjcxLWY5OGVkNzRlMjZjN1wvZDQ2OTFvNS0zNTJjNzIyNi0yOTQ1LTRjNjItYjdjNi1lMWY2NTIyYWIzNTguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.w8TqQzOtiV_sewPKL17Tpx5UupGEpeZ68i6QIbmtwJk',
        'https://undibujo.com/wp-content/uploads/2018/04/stitch-para-imprimir.jpg'
      ],  
      cant: 3,
    },
    {
      id: 2,
      title: 'Prod 2',
      description: 'Esto es la descripcion Prod 2',
      price: 200,
      creationAt: new Date().toISOString(),
      category_id: 5,
      images: [
        'https://m.media-amazon.com/images/I/419mR+BiEiL._SL500_.jpg',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dd574b8c-3262-41c3-a671-f98ed74e26c7/d4691o5-352c7226-2945-4c62-b7c6-e1f6522ab358.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RkNTc0YjhjLTMyNjItNDFjMy1hNjcxLWY5OGVkNzRlMjZjN1wvZDQ2OTFvNS0zNTJjNzIyNi0yOTQ1LTRjNjItYjdjNi1lMWY2NTIyYWIzNTguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.w8TqQzOtiV_sewPKL17Tpx5UupGEpeZ68i6QIbmtwJk',
        'https://undibujo.com/wp-content/uploads/2018/04/stitch-para-imprimir.jpg'
      ],
      cant: 3,
    },
    {
      id: 3,
      title: 'Prod 3',
      description: 'Esto es la descripcion Prod 3',
      price: 300,
      creationAt: new Date().toISOString(),
      category_id: 5,
      images: [
        'https://m.media-amazon.com/images/I/41cxUMcT-pL._AC_.jpg',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dd574b8c-3262-41c3-a671-f98ed74e26c7/d4691o5-352c7226-2945-4c62-b7c6-e1f6522ab358.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RkNTc0YjhjLTMyNjItNDFjMy1hNjcxLWY5OGVkNzRlMjZjN1wvZDQ2OTFvNS0zNTJjNzIyNi0yOTQ1LTRjNjItYjdjNi1lMWY2NTIyYWIzNTguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.w8TqQzOtiV_sewPKL17Tpx5UupGEpeZ68i6QIbmtwJk',
        'https://undibujo.com/wp-content/uploads/2018/04/stitch-para-imprimir.jpg'
      ],
      cant: 3,
    },
    {
      id: 4,
      title: 'Prod 4',
      description: 'Esto es la descripcion Prod 4',
      price: 400,
      creationAt: new Date().toISOString(),
      category_id: 5,
      images: [
        'https://drimerchocolates.com.ar/upload/images/512x512/corazon-de-chocolate-latidos-12grs--1658876346.jpg',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dd574b8c-3262-41c3-a671-f98ed74e26c7/d4691o5-352c7226-2945-4c62-b7c6-e1f6522ab358.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RkNTc0YjhjLTMyNjItNDFjMy1hNjcxLWY5OGVkNzRlMjZjN1wvZDQ2OTFvNS0zNTJjNzIyNi0yOTQ1LTRjNjItYjdjNi1lMWY2NTIyYWIzNTguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.w8TqQzOtiV_sewPKL17Tpx5UupGEpeZ68i6QIbmtwJk',
        'https://undibujo.com/wp-content/uploads/2018/04/stitch-para-imprimir.jpg'
      ],
      cant: 3,  
    },
    {
      id: 5,
      title: 'Muñeco Milei Chiquito - Almohada De Apego',
      description: 'Descubre nuestro exclusivo Muñequito de Milei, con un tamaño aproximado de 15 x 26 cm. Este peculiar muñeco es sublimado tanto en la parte delantera como en la trasera, lo que lo convierte en un artículo único y llamativo. Somos LOLAORTEGA COM, tu destino único para moda exclusiva, almohadones, lencería, gorras, tazas y mucho más. Explora nuestra variada selección, arma tu carrito y paga un único envío. Compra con confianza en LOLAORTEGA COM. Encuentra algo especial que refleje tu estilo único. Envíos a todo el país: No importa dónde te encuentres, hacemos envíos a todo el país. Puedes recibir tu Muñequito de Milei en la comodidad de tu hogar. Siempre contamos con stock: Nos esforzamos por satisfacer tus necesidades de inmediato. Si realizas tu pedido, te aseguramos que, si no podemos despachar el mismo día, estaremos enviándolo al día siguiente. ¡Agradecemos tu elección y confianza en nosotros! Si tienes alguna pregunta o solicitud especial, no dudes en contactarnos. ¡Esperamos que disfrutes de tu Muñequito de Milei! ¡Haz tu pedido ahora y añade un toque especial a tu vida!',
      price: 2000,
      creationAt: new Date().toISOString(),
      category_id: 1,
      images: [
        '/assets/images/products/Mileis/image-0-compressed.jpg',
        '/assets/images/products/Mileis/image-1-compressed.jpg',
        '/assets/images/products/Mileis/image-2-compressed.jpg'
      ],
      cant: 10,  
    }
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
