// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types';

import { POLKADOT_GENESIS } from '../api/constants';

/* eslint-disable sort-keys */

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const prodParasBifrost: EndpointOption[] = [
  {
    info: 'bifrost',
    homepage: 'https://bifrost.app',
    paraId: 2030,
    text: 'Bifrost (Polkadot)',
    providers: {
      Liebi: 'wss://hk.p.bifrost-rpc.liebi.com/ws'
    }
  },

  {
    info: 'bifrost',
    homepage: 'https://bifrost.app',
    paraId: 2001,
    text: 'Bifrost (Kusama)',
    providers: {
      Liebi: 'wss://bifrost-rpc.liebi.com/ws',
      OnFinality: 'wss://bifrost-parachain.api.onfinality.io/public-ws',
      Dwellir: 'wss://bifrost-rpc.dwellir.com'
    }
  }

  // {
  //   info: 'bifrost',
  //   text: 'Bifrost Stage Network',
  //   providers: {
  //     Liebi: 'wss://bifrost-rpc.testnet.liebi.com/ws'
  //   }
  // }
];
