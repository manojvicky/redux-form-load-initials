const LOAD = "LOAD";

export function load(data) {
  return {
    type: LOAD,
    data
  };
}

export default function initializeReducer(
  state = {
    data: {
      FirstName: "monika",
      LastName: "bakri",
      Age: "26"
    }
  },
  action
) {
  const { data = {} } = action;
  switch (action.type) {
    case LOAD:
      return { ...state, data };
    default:
      return state;
  }
}
