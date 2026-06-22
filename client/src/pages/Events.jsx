import React from 'react'
import Event from '../components/Event'
import '../css/Events.css'

const Events = ({ events }) => {
  return (
    <div className='events'>
      {events && events.length > 0 ? (
        events.map((event) => (
          <Event
            key={event.id}
            id={event.id}
            title={event.title}
            date={event.date}
            time={event.time}
            image={event.image}
          />
        ))
      ) : (
        <h2>
          <i className='fa-regular fa-calendar-xmark fa-shake'></i> {'No events scheduled yet!'}
        </h2>
      )}
    </div>
  )
}

export default Events
