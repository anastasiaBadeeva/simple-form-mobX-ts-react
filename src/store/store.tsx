import { makeAutoObservable } from "mobx"

class Store{
    name : string  = ''
    surname : string  = ''
  constructor(){
    makeAutoObservable(this);  
  }
  addName(name :string) {
    this.name = name;
    console.log(this.name)
 }
 addSurname(surname : string) {
  this.surname = surname
  console.log(this.surname)
};
};
export default new Store