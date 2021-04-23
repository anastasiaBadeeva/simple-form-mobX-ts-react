import React from 'react';
import './App.scss';
import { observer } from 'mobx-react-lite';
import store from './store/store'
import {useInput} from './hooks/useInput'
import { Modal } from './components/Modal';

const App : React.FC  = observer(() => {
  const [active, setActive] = React.useState<boolean>(false)
  const nameInput :any = useInput('',{ isEmpty: true })
  const surnameInput :any = useInput('',{isEmpty: true })
 
  React.useEffect(() => {
    store.addName(nameInput.value)
  }, [nameInput.value])
  React.useEffect(() => {
    store.addSurname(surnameInput.value)
  }, [surnameInput.value])
 
  
  return (

    <div className="App">
      <div className="media">
      <div className="form">
      {(nameInput.isDirty && nameInput.isEmpty) && <div className="form-error"> Поле не может быть пустым</div> }  
      <input   placeholder="Имя" name="name"    type="text" onBlur={() => nameInput.onBlur()} value={nameInput.value} onChange={(e) =>{ nameInput.onChange(e)}}></input>
      {(surnameInput.isDirty && surnameInput.isEmpty) && <div className="form-error"> Поле не может быть пустым</div> }  
      <input  placeholder="Фамилия" value={surnameInput.value} onChange={(e) => { surnameInput.onChange(e) }} onBlur={ () => surnameInput.onBlur()}></input>
        <button disabled={!nameInput.inputValid || !surnameInput.inputValid} onClick={() => { setActive(true) }}>Готово</button>
        </div>
        </div>
        <Modal active={active} setActive={setActive}>
        <p>Здравствуйте {store.name + " " + store.surname}  </p>
        </Modal>
      </div>
      

  );
})

export default App;
