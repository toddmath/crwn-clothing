export const setter = set => e => {
  const { target: value } = e;
  // const { value } = target;
  set(value);
};
