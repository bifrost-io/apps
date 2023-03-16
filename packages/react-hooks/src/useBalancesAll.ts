// Copyright 2017-2023 @polkadot/react-hooks authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DeriveBalancesAll } from '@polkadot/api-derive/types';

import BN from 'bn.js';

import { useBestNumber } from '@polkadot/react-hooks';

import { createNamedHook } from './createNamedHook.js';
import { useApi } from './useApi.js';
import { useCall } from './useCall.js';

/**
 * Gets the account full balance information
 *
 * @param accountAddress The account address of which balance is to be returned
 * @returns full information about account's balances
 */
function useBalancesAllImpl(accountAddress: string): DeriveBalancesAll | undefined {
  const { api } = useApi();
  const bestNumber = useBestNumber();

  const vesting = api.registry.createType(
    'VestingInfo',
    useCall(api.query.vesting?.vesting, [accountAddress])?.toJSON()
  );
  const vestingStartAt = useCall(api.query.vesting?.vestingStartAt);

  const emptyVest = api?.registry?.createType('VestingInfo');
  const result = useCall<DeriveBalancesAll>(api.derive.balances?.all, [accountAddress]);

  if (result) {
    if (result.vestingLocked.isEmpty) {
      return result;
    }

    const { locked: vestingTotal, perBlock, startingBlock: theStartingBlock } = vesting.isEmpty ? emptyVest : vesting;
    let startingBlock = theStartingBlock;

    startingBlock = theStartingBlock.add(api.registry.createType('BlockNumber', new BN(100000000)));

    if (vestingStartAt && !vestingStartAt?.isEmpty) {
      startingBlock = theStartingBlock.add(api.registry.createType('BlockNumber', vestingStartAt.toString()));
    }

    const isStarted = bestNumber?.gt(startingBlock);
    const vestedNow = isStarted ? perBlock.mul(bestNumber.sub(startingBlock)) : new BN(0);
    const vestedBalance = vestedNow.gt(vestingTotal)
      ? vestingTotal
      : api.registry.createType('Balance', vestedNow);
    const isVesting = isStarted && !result?.vestingLocked.isZero();

    result.isVesting = isVesting;
    result.vestedBalance = vestedBalance;
    result.vestedClaimable = api.registry.createType(
      'Balance',
      isVesting ? result?.vestingLocked.sub(vestingTotal.sub(vestedBalance)) : 0
    );
    result.vestingEndBlock = api.registry.createType(
      'BlockNumber',
      isVesting ? vestingTotal.div(perBlock).add(startingBlock) : 0
    );
    result.vestingPerBlock = perBlock;
    result.vestingTotal = vestingTotal;

    return result;
  }

  return result;
}

export const useBalancesAll = createNamedHook('useBalancesAll', useBalancesAllImpl);
