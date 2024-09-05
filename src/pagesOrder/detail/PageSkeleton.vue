<template name="skeleton">
	<view class="sk-container">
		<view class="navbar navbar" style="padding-top:47px">
			<view class="wrap wrap">
				<navigator class="back icon-left sk-pseudo sk-pseudo-circle" open-type="navigateBack"></navigator>
				<view class="title sk-transparent sk-text-14-2857-181 sk-text">订单详情</view>
			</view>
		</view>
		<scroll-view scroll-y="true" class="viewport viewport" id="scroller" enable-back-to-top="true">
			<view class="overview sk-image" style="padding-top:67px">
				<view class="status icon-clock sk-transparent sk-text-0-0000-423 sk-text sk-pseudo sk-pseudo-circle">
					等待付款</view>
				<view class="tips tips">
					<text class="money sk-transparent sk-text-0-0000-593 sk-text">应付金额: ¥ 99.00</text>
					<text class="time sk-transparent sk-text-0-0000-799 sk-text">支付剩余</text>
					<view is="node-modules/@dcloudio/uni-ui/lib/uni-countdown/uni-countdown">
						<view class="uni-countdown countdown--uni-countdown data-v-342c352a countdown--data-v-342c352a">
							<text
								class="uni-countdown__number countdown--uni-countdown__number data-v-342c352a countdown--data-v-342c352a sk-transparent sk-text-15-0000-424 sk-text"
								style="color: rgb(255, 255, 255); font-size: 14px; width: 22px; line-height: 20px; border-radius: 3px; background-position-x: 50%;">00</text>
							<text
								class="uni-countdown__splitor countdown--uni-countdown__splitor data-v-342c352a countdown--data-v-342c352a sk-transparent sk-opacity"
								style="color:#fff;font-size:12px;margin:;">时</text>
							<text
								class="uni-countdown__number countdown--uni-countdown__number data-v-342c352a countdown--data-v-342c352a sk-transparent sk-text-15-0000-879 sk-text"
								style="color: rgb(255, 255, 255); font-size: 14px; width: 22px; line-height: 20px; border-radius: 3px; background-position-x: 50%;">29</text>
							<text
								class="uni-countdown__splitor countdown--uni-countdown__splitor data-v-342c352a countdown--data-v-342c352a sk-transparent sk-opacity"
								style="color:#fff;font-size:12px;margin:;">分</text>
							<text
								class="uni-countdown__number countdown--uni-countdown__number data-v-342c352a countdown--data-v-342c352a sk-transparent sk-text-15-0000-320 sk-text"
								style="color: rgb(255, 255, 255); font-size: 14px; width: 22px; line-height: 20px; border-radius: 3px; background-position-x: 50%;">47</text>
							<text
								class="uni-countdown__splitor countdown--uni-countdown__splitor data-v-342c352a countdown--data-v-342c352a sk-transparent sk-opacity"
								style="color:#fff;font-size:12px;margin:;">秒</text>
						</view>
					</view>
				</view>
				<view class="button sk-transparent sk-text-29-1667-597 sk-text" style="background-position-x: 50%;">去支付
				</view>
			</view>
			<view class="shipment shipment">
				<view class="item sk-image">
					<view class="message sk-transparent sk-text-14-2857-617 sk-text">
						您已在广州市天河区黑马程序员完成取件，感谢使用菜鸟驿站，期待再次为您服务。 </view>
					<view class="date sk-transparent sk-text-14-2857-496 sk-text"> 2023-04-14 13:14:20 </view>
				</view>
				<view class="locate sk-image">
					<view class="user sk-transparent sk-text-14-2857-287 sk-text">杨先生 杨先生</view>
					<view class="address sk-transparent sk-text-14-2857-280 sk-text">北京市 北京市 东城区中国城10单元601</view>
				</view>
			</view>
			<view class="goods goods">
				<view class="item item">
					<navigator class="navigator navigator" hover-class="none">
						<image class="cover sk-image"></image>
						<view class="meta meta">
							<view class="name ellipsis sk-transparent sk-text-14-2857-588 sk-text">
								田园复古木耳边格纹全棉A字衬衫110-160cm</view>
							<view class="type sk-transparent sk-text-22-2222-115 sk-text">红白格， 150cm</view>
							<view class="price price">
								<view class="actual actual">
									<text class="symbol sk-transparent sk-opacity">¥</text>
									<text class="sk-transparent sk-text-14-2857-498 sk-text">109</text>
								</view>
							</view>
							<view class="quantity sk-transparent sk-text-14-2857-107 sk-text">x1</view>
						</view>
					</navigator>
					<view class="action action">
						<view class="button primary sk-transparent sk-text-29-4118-261 sk-text"
							style="background-position-x: 50%;">申请售后</view>
						<navigator class="button sk-transparent sk-text-29-4118-71 sk-text"
							style="background-position-x: 50%;"> 去评价 </navigator>
					</view>
				</view>
				<view class="total total">
					<view class="row row">
						<view class="text sk-transparent sk-text-0-0000-303 sk-text">商品总价: </view>
						<view class="symbol sk-transparent sk-text-0-0000-992 sk-text sk-pseudo sk-pseudo-circle">109
						</view>
					</view>
					<view class="row row">
						<view class="text sk-transparent sk-text-0-0000-418 sk-text">运费: </view>
						<view class="symbol sk-transparent sk-text-0-0000-527 sk-text sk-pseudo sk-pseudo-circle">7
						</view>
					</view>
					<view class="row row">
						<view class="text sk-transparent sk-text-0-0000-634 sk-text">应付金额: </view>
						<view
							class="symbol primary sk-transparent sk-text-0-0000-623 sk-text sk-pseudo sk-pseudo-circle">
							116</view>
					</view>
				</view>
			</view>
			<view class="detail detail">
				<view class="title sk-transparent sk-text-0-0000-841 sk-text">订单信息</view>
				<view class="row row">
					<view class="item sk-transparent"> 订单编号: 1831519490542669826
						<text class="copy sk-transparent sk-text-0-0000-900 sk-text">复制</text>
					</view>
					<view class="item sk-transparent sk-text-0-0000-93 sk-text">下单时间: 2024-09-05 10:57:29</view>
				</view>
			</view>
			<view is="components/GlobalGuess" class="r r">
				<view class="caption GlobalGuess--caption">
					<text
						class="text GlobalGuess--text sk-transparent sk-text-0-0000-401 sk-text sk-pseudo sk-pseudo-circle">猜你喜欢</text>
				</view>
				<view class="guess GlobalGuess--guess">
					<navigator class="guess-item GlobalGuess--guess-item">
						<image class="image GlobalGuess--image sk-image" mode="aspectFill"></image>
					</navigator>
					<navigator class="guess-item GlobalGuess--guess-item">
						<image class="image GlobalGuess--image sk-image" mode="aspectFill"></image>
					</navigator>
				</view>
			</view>
			<view class="toolbar toolbar" style="padding-bottom:34px">
				<view class="button primary sk-transparent sk-text-14-2857-420 sk-text"> 去支付 </view>
				<view class="button sk-transparent sk-text-14-2857-632 sk-text"> 取消订单 </view>
			</view>
		</scroll-view>
	</view>
</template>
<style>
	.sk-transparent {
		color: transparent !important;
	}

	.sk-text-14-2857-181 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 44.1589rpx;
		position: relative !important;
	}

	.sk-text {
		background-origin: content-box !important;
		background-clip: content-box !important;
		background-color: transparent !important;
		color: transparent !important;
		background-repeat: repeat-y !important;
	}

	.sk-text-0-0000-423 {
		background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
		background-size: 100% 35.0467rpx;
		position: relative !important;
	}

	.sk-text-0-0000-593 {
		background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
		background-size: 100% 24.5327rpx;
		position: relative !important;
	}

	.sk-text-0-0000-799 {
		background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
		background-size: 100% 24.5327rpx;
		position: relative !important;
	}

	.sk-text-15-0000-424 {
		background-image: linear-gradient(transparent 15.0000%, #EEEEEE 0%, #EEEEEE 85.0000%, transparent 0%) !important;
		background-size: 100% 35.0467rpx;
		position: relative !important;
	}

	.sk-opacity {
		opacity: 0 !important;
	}

	.sk-text-15-0000-879 {
		background-image: linear-gradient(transparent 15.0000%, #EEEEEE 0%, #EEEEEE 85.0000%, transparent 0%) !important;
		background-size: 100% 35.0467rpx;
		position: relative !important;
	}

	.sk-text-15-0000-320 {
		background-image: linear-gradient(transparent 15.0000%, #EEEEEE 0%, #EEEEEE 85.0000%, transparent 0%) !important;
		background-size: 100% 35.0467rpx;
		position: relative !important;
	}

	.sk-text-29-1667-597 {
		background-image: linear-gradient(transparent 29.1667%, #EEEEEE 0%, #EEEEEE 70.8333%, transparent 0%) !important;
		background-size: 100% 63.0841rpx;
		position: relative !important;
	}

	.sk-text-14-2857-617 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.3458rpx;
		position: relative !important;
	}

	.sk-text-14-2857-496 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 31.8925rpx;
		position: relative !important;
	}

	.sk-text-14-2857-287 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.3458rpx;
		position: relative !important;
	}

	.sk-text-14-2857-280 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 31.8925rpx;
		position: relative !important;
	}

	.sk-text-14-2857-588 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.3458rpx;
		position: relative !important;
	}

	.sk-text-22-2222-115 {
		background-image: linear-gradient(transparent 22.2222%, #EEEEEE 0%, #EEEEEE 77.7778%, transparent 0%) !important;
		background-size: 100% 41.0047rpx;
		position: relative !important;
	}

	.sk-text-14-2857-498 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 31.8925rpx;
		position: relative !important;
	}

	.sk-text-14-2857-107 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 31.8925rpx;
		position: absolute !important;
	}

	.sk-text-29-4118-261 {
		background-image: linear-gradient(transparent 29.4118%, #EEEEEE 0%, #EEEEEE 70.5882%, transparent 0%) !important;
		background-size: 100% 59.5794rpx;
		position: relative !important;
	}

	.sk-text-29-4118-71 {
		background-image: linear-gradient(transparent 29.4118%, #EEEEEE 0%, #EEEEEE 70.5882%, transparent 0%) !important;
		background-size: 100% 59.5794rpx;
		position: relative !important;
	}

	.sk-text-0-0000-303 {
		background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
		background-size: 100% 24.5327rpx;
		position: relative !important;
	}

	.sk-text-0-0000-992 {
		background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
		background-size: 100% 24.5327rpx;
		position: relative !important;
	}

	.sk-text-0-0000-418 {
		background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
		background-size: 100% 24.5327rpx;
		position: relative !important;
	}

	.sk-text-0-0000-527 {
		background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
		background-size: 100% 24.5327rpx;
		position: relative !important;
	}

	.sk-text-0-0000-634 {
		background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
		background-size: 100% 24.5327rpx;
		position: relative !important;
	}

	.sk-text-0-0000-623 {
		background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
		background-size: 100% 35.0467rpx;
		position: relative !important;
	}

	.sk-text-0-0000-841 {
		background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
		background-size: 100% 29.7897rpx;
		position: relative !important;
	}

	.sk-text-0-0000-900 {
		background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
		background-size: 100% 19.2757rpx;
		position: relative !important;
	}

	.sk-text-0-0000-93 {
		background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
		background-size: 100% 24.5327rpx;
		position: relative !important;
	}

	.sk-text-0-0000-401 {
		background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
		background-size: 100% 31.5421rpx;
		position: relative !important;
	}

	.sk-text-14-2857-420 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.3458rpx;
		position: relative !important;
	}

	.sk-text-14-2857-632 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.3458rpx;
		position: relative !important;
	}

	.sk-image {
		background: #EFEFEF !important;
	}

	.sk-pseudo::before,
	.sk-pseudo::after {
		background: #EFEFEF !important;
		background-image: none !important;
		color: transparent !important;
		border-color: transparent !important;
	}

	.sk-pseudo-rect::before,
	.sk-pseudo-rect::after {
		border-radius: 0 !important;
	}

	.sk-pseudo-circle::before,
	.sk-pseudo-circle::after {
		border-radius: 50% !important;
	}

	.sk-container {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-color: transparent;
	}
</style>