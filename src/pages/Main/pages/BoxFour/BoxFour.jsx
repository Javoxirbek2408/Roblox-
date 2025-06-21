import React from 'react'
import { NavLink } from 'react-router-dom'

export const BoxFour = () => {
    return (
        <div className='mb-5 mt-5 '>
            <div  style={{ position: 'relative', overflow: 'hidden' }}>
                <NavLink href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: 12, position: 'absolute', top: 0 }}>Ташкент</NavLink>
                <NavLink href="https://yandex.uz/maps/10335/tashkent/?ll=69.279737%2C41.311151&utm_medium=mapframe&utm_source=maps&z=12" style={{ color: '#eee', fontSize: 12, position: 'absolute', top: 14 }}>Яндекс&nbsp;Карты — транспорт, навигация, поиск мест</NavLink>
                <iframe src="https://yandex.uz/map-widget/v1/?ll=69.279737%2C41.311151&z=12" className='lg:w-full lg:h-[594px] w-[430px] h-[487px]' frameBorder={1} style={{ position: 'relative' }} /></div>
        </div>
    )
}
