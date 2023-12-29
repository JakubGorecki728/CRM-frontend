import { ipcRenderer } from "electron";
import { DeleteResult, EntityTarget, FindManyOptions, InsertResult, ObjectId, ObjectLiteral, UpdateResult } from "typeorm";
import { Item } from "../../electron/local-database/entities/Item";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import _ from 'lodash';

export class DbService {

    constructor () {
        console.log('db Service created')
        this.manager = manager;
    }

    private manager;

    public async getItems(): Promise<Item[]> {
        return await this.manager.find(Item)
    };

    public async deleteItem(itemId: Item['id']): Promise<Item['id']> {
        await this.manager.delete(Item, { id: itemId })
        return itemId;
    }

    public async insertItem(item: Omit<Item, 'id'>): Promise<Item>  {
        const result = (await this.manager.insert(Item, item)).generatedMaps[0]
        return Object.assign(item, result) as Item
    } 

    public async updateItem(item: Item): Promise<Item | undefined | any> {
        const result = (await this.manager.update(Item, { id: item.id }, item)).generatedMaps[0]
        return Object.assign(item, result) as Item
    };

}

export const manager = {
    insert: async <Entity extends ObjectLiteral>(target: EntityTarget<Entity>, entity: QueryDeepPartialEntity<Entity> | QueryDeepPartialEntity<Entity>[]): Promise<InsertResult> =>
        { return await ipcRenderer.invoke('db-query', 'insert', (<any>target).name, JSON.stringify([entity])) },
    find: async <Entity extends ObjectLiteral>(entityClass: EntityTarget<Entity>, options?: FindManyOptions<Entity>): Promise<Entity[]> => 
        { return await ipcRenderer.invoke('db-query', 'find', (<any>entityClass).name, JSON.stringify([options])) },
    update: async <Entity extends ObjectLiteral>(target: EntityTarget<Entity>, criteria: string | string[] | number | number[] | Date | Date[] | ObjectId | ObjectId[] | any, partialEntity: QueryDeepPartialEntity<Entity>): Promise<UpdateResult> =>
        { return await ipcRenderer.invoke('db-query', 'update', (<any>target).name, JSON.stringify([criteria, partialEntity])) },
    delete: async <Entity extends ObjectLiteral>(targetOrEntity: EntityTarget<Entity>, criteria: string | string[] | number | number[] | Date | Date[] | ObjectId | ObjectId[] | any): Promise<DeleteResult> => 
        { return await ipcRenderer.invoke('db-query', 'delete', (<any>targetOrEntity).name, JSON.stringify([criteria])) }
}