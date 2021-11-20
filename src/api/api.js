import axios from "axios";

export const getOneOrder = async (id) => {
  try {
    const { data } = await axios.get(
      `https://teatralna.herokuapp.com/api/v1/orders/client/${id}`
    );
    return  data;
  } catch (error) {
    console.log(error.message);
  }
};
