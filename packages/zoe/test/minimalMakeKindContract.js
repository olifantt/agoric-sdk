const start = zcf => {
  makeKind();
  makeWeakStore();

  return harden({});
};
harden(start);
export { start };
