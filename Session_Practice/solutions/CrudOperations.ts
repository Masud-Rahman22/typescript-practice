//5. Create a generic interface called Repository that represents a generic data repository. It should have methods like getAll, getById, create, update, and delete. Define the types for the methods and create a class that implements this interface.
{
    interface iRepository<T> {
        getAll(): T[];
        getById(id: number): T | undefined;
        create(item: T): void;
        update(item: T): void;
        delete(id: number): void;
    }

    class genericRepository<T extends { id: number }> implements iRepository<T> {
        private items: T[];
        constructor() {
            this.items = [];
        }
        create(item: T): void {
            this.items.push(item);
        }
        getAll(): T[] {
            return this.items;
        }
        getById(id: number): T | undefined {
            return this.items.find((item: T) => item.id === id);
        }
        update(item: T): void {
            const index = this.items.findIndex(
                (existingItem: T) => existingItem.id === item.id
            )
            if (index !== -1) {
                this.items[index] = item;
            }
        }
        delete(id: number): void {
            const index = this.items.findIndex((item: T) => item.id === id);
            if (index !== -1) {
                this.items.splice(index, 1)
            }
        }
    }

    interface UserInfo {
        id: number;
        name: string;
        email: string;
    }
    const user = new genericRepository<UserInfo>();

    user.create({
        id:1,
        name: 'masud',
        email: 'masud@gmail.com'
    })
    user.create({
        id:2,
        name: 'rahman',
        email: 'rhmn@gmail.com'
    })
    user.create({
        id:3,
        name: 'tahsina',
        email: 'tahsina@gmail.com'
    })
    user.create({
        id:4,
        name: 'nitol',
        email: 'nitol@gmail.com'
    })
    const oneUser = user.getById(2)
    console.log(oneUser)
    const updatedUser = user.update({
        id:2,
        name:'iqbal',
        email:'iqbal@milky.com'
    })
    const deletedUser = user.delete(2)
    const allUsers = user.getAll()
    console.log(allUsers)
}