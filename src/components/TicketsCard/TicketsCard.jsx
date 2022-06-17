import S7Logo from './S7Logo.svg';
import classes from './TicketsCard.module.scss';
const TicketsCard = ({ ticket }) => {
  const priceStr = String(ticket.price).replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
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
    switch (count) {
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
  };
  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <div className={classes.price}>{priceStr} Р</div>
        <div className={classes.logo}>
          <img src={S7Logo} alt="logo aviacompanies" className={classes.img} />
        </div>
      </div>
      <div className={classes.body}>
        {ticket.segments.map((segment, index) => {
          return (
            <div className={classes.container} key={index}>
              <div className={classes.info}>
                <span className={classes.title}>
                  {segment.destination} – {segment.origin}
                </span>
                <span className={classes.text}>{getDate(segment.date, segment.duration)}</span>
              </div>
              <div className={classes.info}>
                <span className={classes.title}>В пути</span>
                <span className={classes.text}>{travelTimeStr(segment.duration)}</span>
              </div>
              <div className={classes.info}>
                <span className={classes.title}>{transferCount(segment.stops.length)}</span>
                <span className={classes.text}>{segment.stops.join(', ')}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TicketsCard;
