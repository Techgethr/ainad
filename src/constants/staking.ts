export const aprMON_CONTRACT_ID = "0xb2f82D0f38dc453D596Ad40A37799446Cc89274A";
export const aprMON_ABI = [{"type":"receive","stateMutability":"payable"},{"type":"function","name":"MAX_BASIS_POINTS","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"MAX_PERCENTAGE","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"allowance","inputs":[{"name":"owner","type":"address","internalType":"address"},{"name":"spender","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"approve","inputs":[{"name":"spender","type":"address","internalType":"address"},{"name":"value","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"function","name":"asset","inputs":[],"outputs":[{"name":"assetTokenAddress","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"balanceOf","inputs":[{"name":"account","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"burnableShares","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"claimProtocolFees","inputs":[],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"claimRewards","inputs":[],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"claimableRedeemRequest","inputs":[{"name":"requestId","type":"uint256","internalType":"uint256"},{"name":"controller","type":"address","internalType":"address"}],"outputs":[{"name":"shares","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"convertToAssets","inputs":[{"name":"shares","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"assets","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"convertToShares","inputs":[{"name":"assets","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"shares","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"decimals","inputs":[],"outputs":[{"name":"","type":"uint8","internalType":"uint8"}],"stateMutability":"view"},{"type":"function","name":"deposit","inputs":[{"name":"assets","type":"uint256","internalType":"uint256"},{"name":"receiver","type":"address","internalType":"address"}],"outputs":[{"name":"shares","type":"uint256","internalType":"uint256"}],"stateMutability":"payable"},{"type":"function","name":"feeVault","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"getPendingWithdrawalAmounts","inputs":[],"outputs":[{"name":"_totalWithdrawalAmount","type":"uint256","internalType":"uint256"},{"name":"_totalBurnableShares","type":"uint256","internalType":"uint256"},{"name":"_nextRequestId","type":"uint256","internalType":"uint256"},{"name":"_pendingDeposit","type":"uint256","internalType":"uint256"},{"name":"_blockNumber","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"initialize","inputs":[{"name":"_stakePool","type":"address","internalType":"address payable"},{"name":"_feeVault","type":"address","internalType":"address"},{"name":"_owner","type":"address","internalType":"address"},{"name":"_minimumRedeem","type":"uint256","internalType":"uint256"},{"name":"_withdrawalFee","type":"uint256","internalType":"uint256"},{"name":"_rewardFee","type":"uint8","internalType":"uint8"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"isOperator","inputs":[{"name":"controller","type":"address","internalType":"address"},{"name":"operator","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"isSufficientBurnableShares","inputs":[],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"lastProcessedBlockNumber","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"lastProcessedRequestId","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"maxDeposit","inputs":[{"name":"receiver","type":"address","internalType":"address"}],"outputs":[{"name":"maxAssets","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"maxMint","inputs":[{"name":"receiver","type":"address","internalType":"address"}],"outputs":[{"name":"maxShares","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"maxRedeem","inputs":[{"name":"owner","type":"address","internalType":"address"}],"outputs":[{"name":"maxShares","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"maxWithdraw","inputs":[{"name":"owner","type":"address","internalType":"address"}],"outputs":[{"name":"maxAssets","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"minimumRedeem","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"mint","inputs":[{"name":"shares","type":"uint256","internalType":"uint256"},{"name":"receiver","type":"address","internalType":"address"}],"outputs":[{"name":"assets","type":"uint256","internalType":"uint256"}],"stateMutability":"payable"},{"type":"function","name":"name","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"nextRequestId","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"oracleOperator","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"owner","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"pause","inputs":[],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"paused","inputs":[],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"pendingRedeemRequest","inputs":[{"name":"requestId","type":"uint256","internalType":"uint256"},{"name":"controller","type":"address","internalType":"address"}],"outputs":[{"name":"shares","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"previewDeposit","inputs":[{"name":"assets","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"shares","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"previewMint","inputs":[{"name":"shares","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"assets","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"previewRedeem","inputs":[{"name":"shares","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"assets","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"previewWithdraw","inputs":[{"name":"assets","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"shares","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"redeem","inputs":[{"name":"requestIDs","type":"uint256[]","internalType":"uint256[]"},{"name":"receiver","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"redeem","inputs":[{"name":"requestId","type":"uint256","internalType":"uint256"},{"name":"receiver","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"redeemRequests","inputs":[{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"shares","type":"uint256","internalType":"uint256"},{"name":"controller","type":"address","internalType":"address"},{"name":"assets","type":"uint256","internalType":"uint256"},{"name":"claimed","type":"bool","internalType":"bool"},{"name":"timestamp","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"renounceOwnership","inputs":[],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"requestRedeem","inputs":[{"name":"shares","type":"uint256","internalType":"uint256"},{"name":"controller","type":"address","internalType":"address"},{"name":"owner","type":"address","internalType":"address"}],"outputs":[{"name":"requestId","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"rewardFee","inputs":[],"outputs":[{"name":"","type":"uint8","internalType":"uint8"}],"stateMutability":"view"},{"type":"function","name":"rewardFeesAccumulated","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"setBurnableShares","inputs":[{"name":"_burnableShares","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setFeeVault","inputs":[{"name":"_feeVault","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setLastProcessedBlockNumber","inputs":[{"name":"_lastProcessedBlockNumber","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setLastProcessedRequestId","inputs":[{"name":"_lastProcessedRequestId","type":"uint256","internalType":"uint256"}],
    "outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setMinimumRedeem","inputs":[{"name":"_minimumRedeem","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setNextRequestId","inputs":[{"name":"_nextRequestId","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setOperator","inputs":[{"name":"operator","type":"address","internalType":"address"},{"name":"approved","type":"bool","internalType":"bool"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"function","name":"setOracleOperator","inputs":[{"name":"_oracleOperator","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setRedeemRequest","inputs":[{"name":"requestId","type":"uint256","internalType":"uint256"},{"name":"redeemData","type":"tuple","internalType":"struct aprMON.RedeemData","components":[{"name":"shares","type":"uint256","internalType":"uint256"},{"name":"controller","type":"address","internalType":"address"},{"name":"assets","type":"uint256","internalType":"uint256"},{"name":"claimed","type":"bool","internalType":"bool"},{"name":"timestamp","type":"uint256","internalType":"uint256"}]}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setRewardFee","inputs":[{"name":"_rewardFee","type":"uint8","internalType":"uint8"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setRewardFeesAccumulated","inputs":[{"name":"_rewardFeesAccumulated","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setStakePool","inputs":[{"name":"_stakePool","type":"address","internalType":"address payable"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setTotalPendingDeposit","inputs":[{"name":"_totalPendingDeposit","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setTotalStaked","inputs":[{"name":"_totalStaked","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setWithdrawalFee","inputs":[{"name":"_withdrawalFee","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setWithdrawalFeesAccumulated","inputs":[{"name":"_withdrawalFeesAccumulated","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setWithdrawalWaitTime","inputs":[{"name":"_withdrawalWaitTime","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"stake","inputs":[{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"stakePool","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address payable"}],"stateMutability":"view"},{"type":"function","name":"sweep","inputs":[{"name":"recipient","type":"address","internalType":"address"},{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"symbol","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"totalAssets","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"totalPendingDeposit","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"totalStaked","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"totalSupply","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"transfer","inputs":[{"name":"to","type":"address","internalType":"address"},{"name":"value","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"function","name":"transferFrom","inputs":[{"name":"from","type":"address","internalType":"address"},{"name":"to","type":"address","internalType":"address"},{"name":"value","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"function","name":"transferOwnership","inputs":[{"name":"newOwner","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"unpause","inputs":[],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"unstake","inputs":[{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"updateOracleData","inputs":[{"name":"_blockNumber","type":"uint256","internalType":"uint256"},{"name":"_pendingDepositUtilisedForWithdrawals","type":"uint256","internalType":"uint256"},{"name":"_rewardsAfterProcessingWithdrawals","type":"uint256","internalType":"uint256"},{"name":"_totalStaked","type":"uint256","internalType":"uint256"},{"name":"_burnableShares","type":"uint256","internalType":"uint256"},{"name":"_lastProcessedRequestId","type":"uint256","internalType":"uint256"},{"name":"_rewardFees","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"withdrawalFee","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"withdrawalFeesAccumulated","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"withdrawalWaitTime","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"event","name":"Approval","inputs":[{"name":"owner","type":"address","indexed":true,"internalType":"address"},{"name":"spender","type":"address","indexed":true,"internalType":"address"},{"name":"value","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"BurnableSharesUpdated","inputs":[{"name":"burnableShares","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"Deposit","inputs":[{"name":"sender","type":"address","indexed":true,"internalType":"address"},{"name":"owner","type":"address","indexed":true,"internalType":"address"},{"name":"assets","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"shares","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"FeeVaultUpdated","inputs":[{"name":"protocolFeeVault","type":"address","indexed":false,"internalType":"address"}],"anonymous":false},{"type":"event","name":"Initialized","inputs":[{"name":"version","type":"uint64","indexed":false,"internalType":"uint64"}],"anonymous":false},{"type":"event","name":"LastProcessedBlockNumberUpdated","inputs":[{"name":"lastProcessedBlockNumber","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"LastProcessedRequestIdUpdated","inputs":[{"name":"lastProcessedRequestId","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"MinimumRedeemUpdated","inputs":[{"name":"minimumRedeem","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"NextRequestIdUpdated","inputs":[{"name":"nextRequestId","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"OperatorSet","inputs":[{"name":"controller","type":"address","indexed":true,"internalType":"address"},{"name":"operator","type":"address","indexed":true,"internalType":"address"},{"name":"approved","type":"bool","indexed":false,"internalType":"bool"}],"anonymous":false},{"type":"event","name":"OracleDataUpdate","inputs":[{"name":"blockNumber","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"totalPendingDeposit","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"totalStaked","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"burnableShares","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"lastProcessedRequestId","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"rewardFeesAccumulated","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"OracleOperatorUpdated","inputs":[{"name":"oracle","type":"address","indexed":false,"internalType":"address"}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"name":"previousOwner","type":"address","indexed":true,"internalType":"address"},{"name":"newOwner","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"Paused","inputs":[{"name":"account","type":"address","indexed":false,"internalType":"address"}],"anonymous":false},{"type":"event","name":"Redeem","inputs":[{"name":"controller","type":"address","indexed":true,"internalType":"address"},{"name":"receiver","type":"address","indexed":true,"internalType":"address"},{"name":"requestId","type":"uint256","indexed":true,"internalType":"uint256"},{"name":"shares","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"assets","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"fee","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"RedeemRequest","inputs":[{"name":"controller","type":"address","indexed":true,"internalType":"address"},{"name":"owner","type":"address","indexed":true,"internalType":"address"}
    ,{"name":"requestId","type":"uint256","indexed":true,"internalType":"uint256"},{"name":"sender","type":"address","indexed":false,"internalType":"address"},{"name":"shares","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"assets","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"RedeemRequestUpdated","inputs":[{"name":"requestId","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"redeemData","type":"tuple","indexed":false,"internalType":"struct aprMON.RedeemData","components":[{"name":"shares","type":"uint256","internalType":"uint256"},{"name":"controller","type":"address","internalType":"address"},{"name":"assets","type":"uint256","internalType":"uint256"},{"name":"claimed","type":"bool","internalType":"bool"},{"name":"timestamp","type":"uint256","internalType":"uint256"}]}],"anonymous":false},{"type":"event","name":"RewardFeeUpdated","inputs":[{"name":"rewardFee","type":"uint8","indexed":false,"internalType":"uint8"}],"anonymous":false},{"type":"event","name":"RewardFeesAccumulatedUpdated","inputs":[{"name":"rewardFeesAccumulated","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"StakePoolUpdated","inputs":[{"name":"stakePool","type":"address","indexed":false,"internalType":"address"}],"anonymous":false},{"type":"event","name":"Sweeped","inputs":[{"name":"recipient","type":"address","indexed":false,"internalType":"address"},{"name":"amount","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"TotalPendingDepositUpdated","inputs":[{"name":"totalPendingDeposit","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"TotalStakedUpdated","inputs":[{"name":"totalStaked","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"name":"from","type":"address","indexed":true,"internalType":"address"},{"name":"to","type":"address","indexed":true,"internalType":"address"},{"name":"value","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"Unpaused","inputs":[{"name":"account","type":"address","indexed":false,"internalType":"address"}],"anonymous":false},{"type":"event","name":"WithdrawalFeeUpdated","inputs":[{"name":"withdrawalFee","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"WithdrawalFeesAccumulatedUpdated","inputs":[{"name":"withdrawalFeesAccumulated","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"WithdrawalWaitTimeUpdated","inputs":[{"name":"withdrawalWaitTime","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"error","name":"AlreadyClaimed","inputs":[]},{"type":"error","name":"BelowMinimumRedeemAmount","inputs":[]},{"type":"error","name":"ERC20InsufficientAllowance","inputs":[{"name":"spender","type":"address","internalType":"address"},{"name":"allowance","type":"uint256","internalType":"uint256"},{"name":"needed","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"ERC20InsufficientBalance","inputs":[{"name":"sender","type":"address","internalType":"address"},{"name":"balance","type":"uint256","internalType":"uint256"},{"name":"needed","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"ERC20InvalidApprover","inputs":[{"name":"approver","type":"address","internalType":"address"}]},{"type":"error","name":"ERC20InvalidReceiver","inputs":[{"name":"receiver","type":"address","internalType":"address"}]},{"type":"error","name":"ERC20InvalidSender","inputs":[{"name":"sender","type":"address","internalType":"address"}]},{"type":"error","name":"ERC20InvalidSpender","inputs":[{"name":"spender","type":"address","internalType":"address"}]},{"type":"error","name":"EnforcedPause","inputs":[]},{"type":"error","name":"ExpectedPause","inputs":[]},{"type":"error","name":"InsufficientBalance","inputs":[]},{"type":"error","name":"InvalidAmount","inputs":[]},{"type":"error","name":"InvalidBlockNumber","inputs":[]},{"type":"error","name":"InvalidBurnableShares","inputs":[]},{"type":"error","name":"InvalidInitialization","inputs":[]},{"type":"error","name":"InvalidLastProcessedRequestId","inputs":[]},{"type":"error","name":"InvalidRange","inputs":[]},{"type":"error","name":"InvalidRequestId","inputs":[]},{"type":"error","name":"InvalidRewardFee","inputs":[]},{"type":"error","name":"InvalidRewards","inputs":[]},{"type":"error","name":"InvalidTotalStaked","inputs":[]},{"type":"error","name":"InvalidUtilisedPendingDeposit","inputs":[]},{"type":"error","name":"InvalidWithdrawalFee","inputs":[]},{"type":"error","name":"NoPendingWithdrawalRequests","inputs":[]},{"type":"error","name":"NotInitializing","inputs":[]},{"type":"error","name":"OnlyOracleOperatorAllowed","inputs":[]},{"type":"error","name":"OwnableInvalidOwner","inputs":[{"name":"owner","type":"address","internalType":"address"}]},{"type":"error","name":"OwnableUnauthorizedAccount","inputs":[{"name":"account","type":"address","internalType":"address"}]},{"type":"error","name":"TotalAssetsIsZero","inputs":[]},{"type":"error","name":"TransferFailed","inputs":[]},{"type":"error","name":"UnauthorizedOperator","inputs":[]},{"type":"error","name":"WaitMoreTime","inputs":[]}];

