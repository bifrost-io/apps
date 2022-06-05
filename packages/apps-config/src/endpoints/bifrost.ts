// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from 'i18next';
import type { LinkOption } from './types';

import { expandEndpoints } from './util';

/* eslint-disable sort-keys */

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   value: The actual hosted secure websocket endpoint

export function createBifrost(t: TFunction, firstOnly: boolean, withSort: boolean): LinkOption[] {
  return expandEndpoints(t, [
    {
      info: 'bifrost',
      homepage: 'https://ksm.vtoken.io/?ref=polkadotjs',
      paraId: 2001,
      text: t('rpc.kusama.bifrost', 'Bifrost (Kusama)', { ns: 'apps-config' }),
      providers: {
        'Liebi 0': 'wss://bifrost-rpc.liebi.com/ws',
        'Liebi 1': 'wss://us.bifrost-rpc.liebi.com/ws',
        'Liebi 2': 'wss://eu.bifrost-rpc.liebi.com/ws',
        OnFinality: 'wss://bifrost-parachain.api.onfinality.io/public-ws'
      }
    },
    {
      info: 'bifrost',
      homepage: 'https://bifrost.app',
      paraId: 2030,
      text: t('rpc.kusama.bifrost', 'Bifrost (Polkadot)', { ns: 'apps-config' }),
      providers: {
        Liebi: 'wss://hk.p.bifrost-rpc.liebi.com/ws'
      }
    },

    {
      info: 'bifrost',
      text: t('rpc.test.bifrost', 'Bifrost Stage Network', { ns: 'apps-config' }),
      providers: {
        Liebi: 'wss://bifrost-rpc.testnet.liebi.com/ws'
      }
    }
  ], firstOnly, withSort);
}
