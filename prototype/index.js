
console.log(document);

class Student {
    constructor(name) {
        this.name = name;
    }

     getName() {
        return this.name;
    }    
}

class Collage extends Student {
    static str = "newSr";
    #year;

    constructor(strname, rollno, year){
        super(strname);
        this.rollno = rollno;
        this.#year = year;
    }
    
    getShow(){
        console.log(this.getName(), this.#year);
    }
}

const collage = new Collage("Deepak", "0501cs171025", 2024);

collage.getShow();
console.log(collage.str);
