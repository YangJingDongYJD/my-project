<template name="skeleton">
	<view is="components/GlobalSwiper">
		<view class="carousel GlobalSwiper--carousel">
			<swiper :autoplay="false" :circular="true" :interval="3000" :current="0"></swiper>
			<view class="indicator GlobalSwiper--indicator"></view>
		</view>
	</view>
	<view is="pages/index/components/CategoryPanel">
		<view class="category CategoryPanel--category">
			<navigator class="category-item CategoryPanel--category-item" hover-class="none">
				<image class="icon CategoryPanel--icon sk-image"></image>
				<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-483 sk-text">居家</text>
			</navigator>
			<navigator class="category-item CategoryPanel--category-item" hover-class="none">
				<image class="icon CategoryPanel--icon sk-image"></image>
				<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-903 sk-text">锦鲤</text>
			</navigator>
			<navigator class="category-item CategoryPanel--category-item" hover-class="none">
				<image class="icon CategoryPanel--icon sk-image"></image>
				<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-996 sk-text">服饰</text>
			</navigator>
			<navigator class="category-item CategoryPanel--category-item" hover-class="none">
				<image class="icon CategoryPanel--icon sk-image"></image>
				<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-325 sk-text">母婴</text>
			</navigator>
			<navigator class="category-item CategoryPanel--category-item" hover-class="none">
				<image class="icon CategoryPanel--icon sk-image"></image>
				<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-14 sk-text">个护</text>
			</navigator>
			<navigator class="category-item CategoryPanel--category-item" hover-class="none">
				<image class="icon CategoryPanel--icon sk-image"></image>
				<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-182 sk-text">严选</text>
			</navigator>
			<navigator class="category-item CategoryPanel--category-item" hover-class="none">
				<image class="icon CategoryPanel--icon sk-image"></image>
				<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-840 sk-text">数码</text>
			</navigator>
			<navigator class="category-item CategoryPanel--category-item" hover-class="none">
				<image class="icon CategoryPanel--icon sk-image"></image>
				<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-825 sk-text">运动</text>
			</navigator>
			<navigator class="category-item CategoryPanel--category-item" hover-class="none">
				<image class="icon CategoryPanel--icon sk-image"></image>
				<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-644 sk-text">杂项</text>
			</navigator>
			<navigator class="category-item CategoryPanel--category-item" hover-class="none">
				<image class="icon CategoryPanel--icon sk-image"></image>
				<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-193 sk-text">品牌</text>
			</navigator>
		</view>
	</view>
	<view is="pages/index/components/HotPanel">
		<view class="panel HotPanel--panel hot HotPanel--hot">
			<view class="item HotPanel--item">
				<view class="title HotPanel--title">
					<text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-243 sk-text">特惠推荐</text>
					<text
						class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-873 sk-text">精选全攻略</text>
				</view>
				<navigator class="cards HotPanel--cards" hover-class="none">
					<image class="image HotPanel--image sk-image" mode="aspectFit"></image>
					<image class="image HotPanel--image sk-image" mode="aspectFit"></image>
				</navigator>
			</view>
			<view class="item HotPanel--item">
				<view class="title HotPanel--title">
					<text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-584 sk-text">爆款推荐</text>
					<text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-65 sk-text">最受欢迎</text>
				</view>
				<navigator class="cards HotPanel--cards" hover-class="none">
					<image class="image HotPanel--image sk-image" mode="aspectFit"></image>
					<image class="image HotPanel--image sk-image" mode="aspectFit"></image>
				</navigator>
			</view>
			<view class="item HotPanel--item">
				<view class="title HotPanel--title">
					<text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-359 sk-text">一站买全</text>
					<text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-109 sk-text">精心优选</text>
				</view>
				<navigator class="cards HotPanel--cards" hover-class="none">
					<image class="image HotPanel--image sk-image" mode="aspectFit"></image>
					<image class="image HotPanel--image sk-image" mode="aspectFit"></image>
				</navigator>
			</view>
			<view class="item HotPanel--item">
				<view class="title HotPanel--title">
					<text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-242 sk-text">新鲜好物</text>
					<text
						class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-827 sk-text">生活加分项</text>
				</view>
				<navigator class="cards HotPanel--cards" hover-class="none">
					<image class="image HotPanel--image sk-image" mode="aspectFit"></image>
					<image class="image HotPanel--image sk-image" mode="aspectFit"></image>
				</navigator>
			</view>
		</view>
	</view>
	<view is="components/GlobalGuess" class="r r">
		<view class="caption GlobalGuess--caption">
			<text
				class="text GlobalGuess--text sk-transparent sk-text-0-0000-811 sk-text sk-pseudo sk-pseudo-circle">猜你喜欢</text>
		</view>
	</view>
</template>

<style>
	.sk-transparent {
		color: transparent !important;
	}

	.sk-text-3-3333-431 {
		background-image: linear-gradient(transparent 3.3333%, #EEEEEE 0%, #EEEEEE 96.6667%, transparent 0%) !important;
		background-size: 100% 26.2850rpx;
		position: relative !important;
	}

	.sk-text {
		background-origin: content-box !important;
		background-clip: content-box !important;
		background-color: transparent !important;
		color: transparent !important;
		background-repeat: repeat-y !important;
	}

	.sk-text-14-2857-436 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 36.7991rpx;
		position: relative !important;
	}

	.sk-text-14-2857-483 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.3458rpx;
		position: relative !important;
	}

	.sk-text-14-2857-903 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.3458rpx;
		position: relative !important;
	}

	.sk-text-14-2857-996 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.3458rpx;
		position: relative !important;
	}

	.sk-text-14-2857-325 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.3458rpx;
		position: relative !important;
	}

	.sk-text-14-2857-14 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.3458rpx;
		position: relative !important;
	}

	.sk-text-14-2857-182 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.3458rpx;
		position: relative !important;
	}

	.sk-text-14-2857-840 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.3458rpx;
		position: relative !important;
	}

	.sk-text-14-2857-825 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.3458rpx;
		position: relative !important;
	}

	.sk-text-14-2857-644 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.3458rpx;
		position: relative !important;
	}

	.sk-text-14-2857-193 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.3458rpx;
		position: relative !important;
	}

	.sk-text-14-2857-243 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 44.1589rpx;
		position: relative !important;
	}

	.sk-text-14-2857-873 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 31.8925rpx;
		position: relative !important;
	}

	.sk-text-14-2857-584 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 44.1589rpx;
		position: relative !important;
	}

	.sk-text-14-2857-65 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 31.8925rpx;
		position: relative !important;
	}

	.sk-text-14-2857-359 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 44.1589rpx;
		position: relative !important;
	}

	.sk-text-14-2857-109 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 31.8925rpx;
		position: relative !important;
	}

	.sk-text-14-2857-242 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 44.1589rpx;
		position: relative !important;
	}

	.sk-text-14-2857-827 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 31.8925rpx;
		position: relative !important;
	}

	.sk-text-0-0000-811 {
		background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
		background-size: 100% 31.5421rpx;
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