import { useSelector } from "react-redux";
import { SortType } from "../../store/sortSlice";
import TickersCard from "../TicketsCard/TicketsCard";

/*
interface Ticket {
  // Цена в рублях
  price: number
  // Код авиакомпании (iata)
  carrier: string
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: [
    {
      // Код города (iata)
      origin: string
      // Код города (iata)
      destination: string
      // Дата и время вылета туда
      date: string
      // Массив кодов (iata) городов с пересадками
      stops: string[]
      // Общее время перелёта в минутах
      duration: number
    },
    {
      // Код города (iata)
      origin: string
      // Код города (iata)
      destination: string
      // Дата и время вылета обратно
      date: string
      // Массив кодов (iata) городов с пересадками
      stops: string[]
      // Общее время перелёта в минутах
      duration: number
    }
  ]
}*/

const useTickets = () =>
  useSelector((state) => {
    const filteredTickets = filterTickets(state.tickets.tickets, state.filters);
    const filtTickets = sortTickets(filteredTickets, state.sort);
    return filtTickets;
  });

function filterTickets(tickets, filters) {
  const preferredStopsCounts = filters // [0, 1, 2, 3]
    .filter((filter) => filter.isChecked)
    .map((filter) => filter.stopCount);
  return tickets.filter((ticket) => {
    return ticket.segments.every((segment) => {
      const stopCount = segment.stops.length; // 2
      return preferredStopsCounts.includes(stopCount);
    });
  });
}

function sortTickets(tickets, sortType) {
  function durationOf(ticket) {
    return ticket.segments.reduce(
      (total, segment) => total + segment.duration,
      0
    );
  }
  function sortByPrice(ticketA, ticketB) {
    return ticketA.price - ticketB.price;
  }
  function sortByDuration(ticketA, ticketB) {
    return durationOf(ticketA) - durationOf(ticketB);
  }
  function sortByOptimal(ticketA, ticketB) {
    const totalA = ticketA.segments[0].duration + ticketA.segments[1].duration + ticketA.price;
    const totalB = ticketB.segments[0].duration + ticketB.segments[1].duration + ticketB.price;
    return totalA - totalB;
  }
  switch (sortType) {
    case SortType.CHEAPEST:
      return tickets.sort(sortByPrice);
    case SortType.FASTEST:
      return tickets.sort(sortByDuration);
    case SortType.OPTIMAL:
      return tickets.sort(sortByOptimal);
    default:
  }
}

const TicketsList = () => {
  const tickets = useTickets();
  console.log(tickets);
  const elements = tickets.map((ticket, index) => {
    return <TickersCard ticket={ticket} key={index} />
  })
  return (
    <div>
     {elements}
    </div>
  );
};

export default TicketsList;
