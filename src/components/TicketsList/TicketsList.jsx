import { Spin } from "antd";
import React from 'react';
import { useSelector } from "react-redux";
import { SortType } from "../../store/sortSlice";
import TickersCard from "../TicketsCard/TicketsCard";
import classes from './TicketsList.module.scss';

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
  const countTickets = useSelector((state) => state.tickets.countTickets);
  const tickets = useTickets();
  const filters = useSelector((state) => state.filters);
  const loader = useSelector((state) => state.tickets.loading)
  const someOneTrue = filters.some((filter) => filter.isChecked === true);
  console.log(loader);
  const elements = tickets.slice(0, countTickets).map((ticket, index) => {
    return <TickersCard ticket={ticket} key={index} />
  })
  return (
    <div className={classes.tickets}>
      {loader ? <Spin size="large" className={classes.spin} /> : null}
      {someOneTrue ? null : <span className={classes.info}>По заданным фильтрам нет ни одного билета.</span>}
      {elements}
    </div>
  );
};

export default TicketsList;
