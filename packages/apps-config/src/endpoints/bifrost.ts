// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types.js';

import { nodesBifrostSVG } from '../ui/logos/nodes/index.js';

export * from './testingRelayRococo.js';
export * from './testingRelayWestend.js';

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const bifrostChains: EndpointOption[] = [
  {
    homepage: 'https://crowdloan.bifrost.app',
    info: 'bifrost',
    // paraId: 2030,
    providers: {
      Liebi: 'wss://hk.p.bifrost-rpc.liebi.com/ws',
      OnFinality: 'wss://bifrost-polkadot.api.onfinality.io/public-ws'
    },
    text: 'Bifrost (Polkadot)',
    ui: {
      color: '#5a25f0',
      logo: nodesBifrostSVG
    }
  },
  {
    homepage: 'https://ksm.vtoken.io/?ref=polkadotjs',
    info: 'bifrost',
    // paraId: 2001,
    providers: {
      Dwellir: 'wss://bifrost-rpc.dwellir.com',
      Liebi: 'wss://bifrost-rpc.liebi.com/ws',
      OnFinality: 'wss://bifrost-parachain.api.onfinality.io/public-ws'
    },
    text: 'Bifrost (Kusama)',
    ui: {
      color: '#5a25f0',
      logo: nodesBifrostSVG
    }
  }
];
