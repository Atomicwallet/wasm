#!/usr/bin/env bash
# Copyright 2019-2020 @polkadot/wasm authors & contributors
# This software may be modified and distributed under the terms
# of the Apache-2.0 license. See the LICENSE file for details.

set -e

cd packages/wasm-crypto

RUST_BACKTRACE=full cargo test --release -- --nocapture

cd ../..
