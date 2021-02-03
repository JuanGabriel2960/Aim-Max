import React from 'react'

const PopupCard = () => {

    const handleCancel = (event)=>{
        event.preventDefault()
        document.querySelector('.popup').classList.remove('on')
        document.querySelector('#overlay').classList.remove('on')
    }

    return (
        <div className='popup'>
            <form>
                <input type="text" placeholder='Name' autoComplete='off'/>
                <div className='line-bt wrap-r'>
                    <button onClick={handleCancel} className='bt'>Cancel</button>
                    <input className='bt' type="submit" value="Submit"></input>
                </div>
            </form>
        </div>
    )
}

export default PopupCard
