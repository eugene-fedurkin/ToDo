import { Store } from '../../store/store';

export class MockInitializer {
  public static initialize(store: Store): void {
    store.saveUser({
      email: 'eugene.fedurkin@gmail.com',
      lists: [{
        id: -1,
        title: 'toDo',
        items: [
          {
            id: -2,
            title: 'wash the dishes',
            description: '',
            listId: -1
          },
          {
            id: -1,
            title: 'visit a doctor',
            description: '',
            listId: -1
          }
        ]
      }]
    });
  }
}