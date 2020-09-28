import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
// @ts-ignore
export class ProductoServices {
  constructor(private _db: AngularFirestore) {
  }

  crearProducto(producto: any): Promise<any> {
    return this._db.collection('tienda').add(producto);
  }

  updateProducto(producto: any, id_producto): Promise<void> {
    console.log(producto, id_producto);
    return this._db
      .collection('tienda')
      .doc(id_producto)
      .set(producto, {merge: true});
  }

  deleteProducto(id_producto): Promise<void> {
    return this._db
      .collection('tienda')
      .doc(id_producto)
      .delete();
  }

  trearUnProductoPorId(id_producto) {
    return this._db.collection('tienda').doc(id_producto).get();
  }

  traerTodosProductos(id: number) {
    return this._db.collection('tienda', ref => ref.where('id_tienda', '==', id)).get();
  }
}
