
var x: string = "hola"
x = 2 // Error (puede corregir toString)
x = undefined // Ok (null y undefined son válidos para cualquier variable)

var y: number = "hola" // Error, tipo inválido
y = null // Ok
var z: any = "hola" 
z = 33 // Ok

// Arrays
var arrString: string[] = ['a', 'b', 'c', null, undefined]
var arrAny: any[] = ['a', 100, true, null, [], {}]

// Tuple: define un par de elementos, como un Array(2). Da error si asigno más.
var tplStrNum: [string, number] = ["x", 0]

// Otros tipos: void, undefined, null

// Parametros y/o retorno, de uno o más tipos. Sin retorno: void. 
// Parámetros opcionales 'var?' o simplemente "= <valor>"
function getSum(var1: number|string, var2?: number|string = 2):number|string {
    return parseInt(var1.toString()) + parseInt(var2.toString())
}

// Interfaces: es definir la estructura de un objeto
function showTodo(todo: {title:string; text:string}) {
    console.log(`${todo.title} ${todo.text}`)
}

interface ITodo { title: string, text: string }
function showTodoI(todo: ITodo) {
    console.log(`${todo.title} ${todo.text}`)
}
// Menos o más props da error. Tiene que ser exacto
let myTodo: ITodo = { title: 'Comer', text: 'La cena' } 

// Clases, con modificadores y herencia
class User {
    name: string;
    public email: string;
    private dob: string;
    constructor(name) {
        this.name = name
    }
    register() {
        console.log(this.name)
    }
    protected getDateOfBirth():string {
        return this.dob
    }
}
var john: User = new User("Dario")

class Member extends User {
    id: number;
    constructor(id:number, name:string) {
        super(name)
        this.id = id
    }
}


tsconfig.json >
{
    "compilerOptions": {
        "outDir": "./build",
        "sourceMap": true,
        "target": "es5",
        "module": "commonjs",
    },
    "include": [
        "./**/*"
    ]
    "exclude": [
        "node_modules/**/*",
        "./build/**/*",
    ]
}
package.json > 
    "build": "tsc", 
    "start": "nodemon ./build/server.js",

~ npm run build && npm start 