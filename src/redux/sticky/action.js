export const updateClick =
  (click = false) =>
  async (dispatch) =>
    dispatch({
      type: "clicked",
      payload: { click },
    });
