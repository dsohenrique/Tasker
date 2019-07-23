class Task {

    
    constructor(title, description){
        this._title = title;
        this._description = description;
        Object.freeze(this);
    }

    get title(){
        return this._title;
    }
    
    get description(){
        return this._description;
    }
}