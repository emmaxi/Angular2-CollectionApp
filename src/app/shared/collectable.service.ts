/**
 * Created by Emma on 7/6/17.
 */
import { Collectable } from "./collectable.model";

// export makes this class public
export class CollectableService {
  private collectables: Collectable[] = [
    {description: 'A very rare copy of "jQuery of Dummies"', type: 'Book'},
    {description: 'The first letter ever written', type: 'Piece of Paper'},
    {description: 'A photograph showing nothing', type: 'Photo'},
    {description: 'A box with all sold Zunes', type: 'Garbage'}
  ];

  private collection : Collectable[] = [];

  getCollectables() {
    return this.collectables;
  }

  getCollection() {
    return this.collection;
  }

  addToCollection(item: Collectable) {
    if (this.collection.indexOf(item) !== -1) {
      return;
    }
    this.collection.push(item);
  }

  removeFromCollection(item: Collectable) {
    this.collection.splice(this.collection.indexOf(item), 1);
  }
}
