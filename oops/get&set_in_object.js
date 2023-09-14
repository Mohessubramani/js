class temperature{
    constructor(temp){
        this._temp=temp;
    }
    get temp(){
        return this._temp
    }
    set temp(temp){
        if(temp<100){
            temp=100
            this._temp=temp;
        }
    }
}
let temp1= new temperature(25)
temp1.temp=150
console.log(temp1.temp)