export class Entity {

    constructor() {
        let now = new Date();
        this.id = '';
        this.created = now.getTime();
        this.updated = now.getTime();
    }

    jsonToEntity(jsonData) {
        for(let propName in jsonData) {
            this[propName] = jsonData[propName];
        }
    }

    entityToJsonObject() {
        return JSON.parse(this.toString());;
    }

    entityToJsonString() {
        return JSON.stringify(this);
    }
}
