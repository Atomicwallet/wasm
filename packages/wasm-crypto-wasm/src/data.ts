// Copyright 2019-2021 @polkadot/wasm-crypto-wasm authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { buffer, sizeUncompressed } from './buffer';
import { unzlibSync } from './fflate';

export const wasmBytes = unzlibSync(buffer, new Uint8Array(sizeUncompressed));
