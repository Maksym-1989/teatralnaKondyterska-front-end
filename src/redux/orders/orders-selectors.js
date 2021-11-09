const getAllOfDay = (state) => state.order.ordersOfCurrentDay;
const getAllOfmonth = (state) => state.order.ordersOfMonth;
const getAllOrders = (state) => state.order.allorders;

export { getAllOfDay, getAllOfmonth, getAllOrders };
