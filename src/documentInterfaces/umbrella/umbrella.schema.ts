"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
//import { Schema } from "mongoose";
const umbrella_statics_1 = require("./umbrella.statics");
const umbrella_methods_1 = require("./umbrella.methods");
const UmbrellaSchema = new mongoose_1.Schema({
    umbrellaHolderId: String,
    objectId: String,
    user_id: String,
    fiat: String,
    walletAddress: String,
    firstRewardDate: String,
    priceByDay: (Array),
    bakerCycles: (Array),
    rewardsByDay: (Array),
    bakerAddresses: Array,
    consensusRole: String,
    cyclesByDay: (Array),
    supplyByDay: (Array),
    unaccountedNetTransactions: (Array),
    transactionsUrl: String,
    delegatorRewardsUrl: String,
    balanceHistoryUrl: String,
    rawWalletTransactions: (Array),
    cyclesMappedToDays: (Map),
    isCustodial: Boolean,
    rewardsByCycle: (Array),
    balancesByDay: Array,
    pricesAndMarketCapsByDay: (Map),
    nativeRewardsFMVByCycle: (Array),
    investmentsScaledBVByDomain: (Array),
    nativeSupplyDepletion: (Array),
    nativeMarketDilutionRewards: (Array),
    nativeSupplyDepletionRewards: (Array),
    marketByDay: (Array),
    unrealizedNativeRewards: (Array),
    unrealizedNativeFMVRewards: (Array),
    unrealizedNativeMarketDilutionRewards: (Array),
    unrealizedNativeSupplyDepletionRewards: (Array),
    realizingNativeRewards: (Array),
    realizingNativeFMVRewards: (Array),
    realizingNativeMarketDilutionRewards: (Array),
    realizingNativeSupplyDepletionRewards: (Array),
    realizedNativeRewards: (Array),
    realizedNativeFMVRewards: (Array),
    realizedNativeMarketDilutionRewards: (Array),
    realizedNativeSupplyDepletionRewards: (Array),
    aggregateUnrealizedNativeReward25p: Number,
    aggregateUnrealizedNativeReward50p: Number,
    aggregateUnrealizedNativeReward75p: Number,
    aggregateUnrealizedNativeReward100p: Number,
    aggregateRealizedNativeReward100p: Number,
    aggregateRealizedNativeReward50p: Number,
    aggregateRealizedNativeFMVReward100p: Number,
    aggregateRealizedNativeFMVReward50p: Number,
    aggregateRealizedNativeMarketDilution100p: Number,
    aggregateRealizedNativeMarketDilution50p: Number,
    aggregateRealizedNativeSupplyDepletion100p: Number,
    aggregateRealizedNativeSupplyDepletion50p: Number,
    weightedAverageTotalDomainInvestmentCost: Number,
    nextTimeStamp: String,
    totalOperations: Array,
    noRewards: Boolean,
    TezosPriceOnDateObjectGenerated: Number,
    pointOfSaleAggValue: Number,
    netDiffFMV: Number,
    netDiffDilution: Number,
    netDiffSupplyDepletion: Number,
    investmentBasisCostArray: Array,
    realizingDomainStartDate: String,
    realizingDomainEndDate: String,
    dateOfEntry: { type: Date, default: new Date() },
    lastUpdated: { type: Date, default: new Date() }
});
UmbrellaSchema.statics.findOneOrCreate = umbrella_statics_1.findOneOrCreate;
UmbrellaSchema.statics.findByAge = umbrella_statics_1.findByAge;
UmbrellaSchema.methods.setLastUpdated = umbrella_methods_1.setLastUpdated;
exports.default = UmbrellaSchema;

// import { Schema } from "mongoose";
// import { findOneOrCreate, findByAge } from "./umbrella.statics";
// import { setLastUpdated } from "./umbrella.methods";

// const UmbrellaSchema = new Schema({
//     umbrellaHolderId: String,
//     objectId: String,
//     user_id: String,
//     fiat: String,
//     walletAddress: String,
//     firstRewardDate: String,
//     priceByDay: Array,
//     bakerCycles: Array,
//     rewardsByDay: Array,
//     bakerAddresses: Array,
//     consensusRole: String,
//     cyclesByDay: Array,
//     supplyByDay: Array,
//     unaccountedNetTransactions: Array,
//     transactionsUrl: String,
//     delegatorRewardsUrl: String,
//     balanceHistoryUrl: String,
//     rawWalletTransactions: Array,
//     cyclesMappedToDays: Map,
//     isCustodial: Boolean,
//     rewardsByCycle: Array,
//     balancesByDay: Array,
//     pricesAndMarketCapsByDay: Map,
//     nativeRewardsFMVByCycle: Array,
//     investmentsScaledBVByDomain: Array,
//     nativeSupplyDepletion: Array,
//     nativeMarketDilutionRewards: Array,
//     nativeSupplyDepletionRewards: Array,
//     marketByDay: Array,
//     unrealizedNativeRewards: Array,
//     unrealizedNativeFMVRewards: Array,
//     unrealizedNativeMarketDilutionRewards: Array,
//     unrealizedNativeSupplyDepletionRewards: Array,
//     realizingNativeRewards: Array,
//     realizingNativeFMVRewards: Array,
//     realizingNativeMarketDilutionRewards: Array,
//     realizingNativeSupplyDepletionRewards: Array,
//     realizedNativeRewards: Array,
//     realizedNativeFMVRewards: Array,
//     realizedNativeMarketDilutionRewards: Array,
//     realizedNativeSupplyDepletionRewards: Array,
//     aggregateUnrealizedNativeReward25p: Number,
//     aggregateUnrealizedNativeReward50p: Number,
//     aggregateUnrealizedNativeReward75p: Number,
//     aggregateUnrealizedNativeReward100p: Number,
//     aggregateRealizedNativeReward100p: Number,
//     aggregateRealizedNativeReward50p: Number,
//     aggregateRealizedNativeFMVReward100p: Number,
//     aggregateRealizedNativeFMVReward50p: Number,
//     aggregateRealizedNativeMarketDilution100p: Number,
//     aggregateRealizedNativeMarketDilution50p: Number,
//     aggregateRealizedNativeSupplyDepletion100p: Number,
//     aggregateRealizedNativeSupplyDepletion50p: Number,
//     weightedAverageTotalDomainInvestmentCost: Number,
//     nextTimeStamp: String,
//     totalOperations: Array,
//     noRewards: Boolean,
//     TezosPriceOnDateObjectGenerated: Number,
//     pointOfSaleAggValue: Number,
//     netDiffFMV: Number,
//     netDiffDilution: Number,
//     netDiffSupplyDepletion: Number,
//     investmentBasisCostArray: Array,
//     realizingDomainStartDate: String,
//     realizingDomainEndDate: String,
//     dateOfEntry: { type: Date, default: new Date() },
//     lastUpdated: { type: Date, default: new Date() }
// });

// UmbrellaSchema.statics.findOneOrCreate = findOneOrCreate;
// UmbrellaSchema.statics.findByAge = findByAge;
// UmbrellaSchema.methods.setLastUpdated = setLastUpdated;

// export default UmbrellaSchema;