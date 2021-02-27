// eslint-disable-next-line import/no-extraneous-dependencies
import { makeFakeVirtualObjectManager } from '@agoric/swingset-vat/tools/fakeVirtualObjectManager';

const { makeKind, makeWeakStore } = makeFakeVirtualObjectManager(3);

global.makeKind = makeKind;
global.makeWeakStore = makeWeakStore;
