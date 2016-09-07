/* @flow */
/**
 * Some parts of this file are heavily inspired by the graphql/graphql-js source
 *
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the fb/PATENTS file in the same directory.
 */

// The primary entry point into fulfilling a PL/GRAPHQL request.
export {
  plGraphql,
  plGraphqlWatch,
} from './pl-graphql';

// Execute PL/GRAPHQL queries.
export {
  execute,
} from './execution';

