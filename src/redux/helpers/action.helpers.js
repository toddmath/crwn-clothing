// export const createAction = (actionType, actionPayload) => {
//   return actionPayload
//     ? actionPayload => ({
//         type: actionType,
//         payload: actionPayload,
//       })
//     : () => ({
//         type: actionType,
//       });
// };

export function createAction(type, prepartedAction) {
  function actionCreator(...args) {
    if (prepartedAction) {
      const prepared = prepartedAction(...args);
      if (!prepared) {
        throw new Error(`action did not return an object!`);
      }

      return {
        type,
        payload: prepared.payload,
        ...('meta' in prepared && { meta: prepared.meta }),
        ...('error' in prepared && { error: prepared.error }),
      };
    }
    return { type, payload: args[0] };
  }

  actionCreator.toString = () => `${type}`;
  actionCreator.type = type;
  actionCreator.match = action => action.type === type;

  return actionCreator;
}

export function getTyoe(actionCreator) {
  return `${actionCreator}`;
}
