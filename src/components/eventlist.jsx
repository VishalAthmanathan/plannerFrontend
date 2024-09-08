import React from 'react';
import styles from './eventList.module.css';
import { Link } from 'react-router-dom';

const EventList = ({ events }) => {
    return (
      <div className={styles.cardGrid}>
        {events.map(event => (
          <div key={event.id} className={styles.card}>
            <div className={styles.image}>
              <img src={event.image} alt={event.title} />
            </div>
            <div className={styles.content}>
              <div className={styles.title}>
                <a href="#">{event.title}</a>
              </div>
              <div className={styles.date}>
                <a href="#">{event.date}</a>
              </div>
              <div className={styles.location}>
                <a href="#">{event.location}</a>
              </div>
              <div className={styles.price}>
                <a href="#">{event.price}</a>
              </div>
              <div className={styles.button}>
                <Link to={`/event/${event.id}`}>Attend event</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default EventList;