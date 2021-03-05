const start = zcf => {
  console.log('makeKind in contract', makeKind());
  console.log('makeWeakStore in contract', makeWeakStore());

  makeKind();
  makeWeakStore();

  return harden({});
};
harden(start);
export { start };
