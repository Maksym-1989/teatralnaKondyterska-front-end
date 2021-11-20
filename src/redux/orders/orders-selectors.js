const getAllOfDay = (state) => state.order.ordersOfCurrentDay;
const getAllOfmonth = (state) => state.order.ordersOfMonth;
const getAllOrders = (state) => state.order.allorders;
const trackLoad = (state) => state.order.load;

export { getAllOfDay, getAllOfmonth, getAllOrders, trackLoad };
