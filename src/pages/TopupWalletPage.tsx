import React from 'react'
import Input from '../components/Input'

const TopupWalletPage = () => {



  return (
    <div className='panel'>
      <form>
        <div className='panel-title'>Пополнение кошелька</div>

        <div className='input-group'>
          <Input value='' onChange={() => { }} unit='+992' placeholder="Номер телефона" />
          <Input value='' onChange={() => { }} unit='TJS' placeholder='Сумма' />

        </div>

        <div className='input-group'>
          <input className='input' type={"text"} placeholder="ФИО получателя" />
          <Input value='' onChange={() => { }} placeholder="ИНН" description='Введите 9 цифр из оборотной стороны вашего паспорта' />
        </div>

        <textarea className='textarea' placeholder="Комментарий" />

        <div className="button-group">
          <button className='button-primary'>Пополнить</button>
          <button type='button' className='button-secondary'>Очистить</button>
        </div>

      </form>
    </div>
  )
}

export default TopupWalletPage