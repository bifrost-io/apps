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

export function createBifrost(t: TFunction, firstOnly?: boolean): LinkOption[] {
  return expandEndpoints(t, [
    {
      info: 'bifrost',
      homepage: 'https://ksm.vtoken.io/?ref=polkadotjs',
      paraId: 2001,
      text: t('rpc.kusama.bifrost', 'Bifrost', { ns: 'apps-config' }),
      providers: {
        Liebi: 'wss://bifrost-rpc.liebi.com/ws',
        OnFinality: 'wss://bifrost-parachain.api.onfinality.io/public-ws',
        'Patract Elara': 'wss://bifrost.kusama.elara.patract.io'
      }
    },

    {
      info: 'bifrost',
      text: t('rpc.test.bifrost', 'Bifrost Asgard', { ns: 'apps-config' }),
      providers: {
        Liebi: 'wss://asgard-rpc.liebi.com/ws'
      }
    }
  ], firstOnly);
}
