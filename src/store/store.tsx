import { makeAutoObservable } from "mobx"

class Store{
    name : string  = ''
    surname : string  = ''
  constructor(){
    makeAutoObservable(this);  
  }
  addName(name :string) {
    this.name = name;
 }
 addSurname(surname : string) {
  this.surname = surname
};
};
export default new Store