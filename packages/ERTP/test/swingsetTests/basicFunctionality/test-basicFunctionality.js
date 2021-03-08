// @ts-check
import '@agoric/swingset-vat/tools/prepare-test-env';

import test from 'ava';
import { loadBasedir, buildVatController } from '@agoric/swingset-vat';
import path from 'path';

async function main(basedir, argv) {
  const dir = path.resolve(`${__dirname}/..`, basedir);
  const config = await loadBasedir(dir);
  const controller = await buildVatController(config, argv);
  await controller.run();
  return controller.dump();
}

const expected = [
  'start test basic functionality',
  'isLive: true',
  'getAmountOf: {"brand":{},"value":1000}',
  'newPayment amount: {"brand":{},"value":1000}',
  'burned amount: {"brand":{},"value":200}',
  'claimedPayment amount: {"brand":{},"value":200}',
  'combinedPayment amount: {"brand":{},"value":600}',
];

test('test splitPayments', async t => {
  const dump = await main('basicFunctionality', ['basicFunctionality']);
  t.deepEqual(dump.log, expected);
});
