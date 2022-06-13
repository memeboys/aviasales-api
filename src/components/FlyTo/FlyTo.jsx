
import classes from './../TicketsCard/TicketsCard.module.scss';
const FlyTo = ({info}) => {
  const getDate = (date, duration) => {
    let dateStart = new Date(date);
    let dateStartString =
      (String(dateStart.getHours()).length === 2 ? dateStart.getHours() : '0' + dateStart.getHours()) +
      ':' +
      (String(dateStart.getMinutes()).length === 2 ? dateStart.getMinutes() : '0' + dateStart.getMinutes());

    let dateEnd = new Date(duration * 60 * 1000 + dateStart.getTime());
    let dateEndString =
      (String(dateEnd.getHours()).length === 2 ? dateEnd.getHours() : '0' + dateEnd.getHours()) +
      ':' +
      (String(dateEnd.getMinutes()).length === 2 ? dateEnd.getMinutes() : '0' + dateEnd.getMinutes());
    return dateStartString + ' - ' + dateEndString;
  };

  const travelTimeStr = (time) => {
    let strTime = '';
    const hours = (time / 60) ^ 0;

    if (hours) {
      let minutes = time % 60;
      if (minutes < 10) minutes = `0${minutes}`;
      strTime = `${hours}ч ${minutes}м`;
    } else {
      strTime = `${time}м`;
    }
    return strTime;
  };
  const transferCount = (count) => {
    switch(count) {
      case 0: 
        return 'Без пересадок';
      case 1:
        return '1 пересадка';
      case 2:
        return '2 пересадки';
      case 3:
        return '3 пересадки';
      default: 
        return '';
    }
  }
  const transfers = transferCount(info.stops.length);

  const stops = info.stops.join(', ');

  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <span className={classes.title}>{info.destination} – {info.origin}</span>
        <span className={classes.text}>{getDate(info.date, info.duration)}</span>
      </div>
      <div className={classes.info}>
        <span className={classes.title}>В пути</span>
        <span className={classes.text}>{travelTimeStr(info.duration)}</span>
      </div>
      <div className={classes.info}>
        <span className={classes.title}>{transfers}</span>
        <span className={classes.text}>{stops}</span>
      </div>
    </div>
  )
}

export default FlyTo;