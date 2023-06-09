export class Task {
    constructor(id, value, parentName){
        this.id = id;
        this.value = value;
        this.type = "Task";
        this.parentName = parentName;
    }

    createPElement(){
        const p = document.createElement("p");
        p.classList.add("task");
        p.dataset.id = `${this.parentName}_${this.id}`;
        p.textContent = this.value;

        return p;
    }

    getID(){
        return this.id;
    }

    getValue(){
        return this.value;
    }

    setID(newID){
        this.id = newID;
    }

    setValue(newValue){
        this.value = newValue;
    }
}