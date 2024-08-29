<template name="skeleton">
	<view class="sk-container">
		<view class="viewport viewport">
			<view class="search search">
				<view class="input input">
					<text
						class="icon-search sk-transparent sk-text-14-2857-410 sk-text sk-pseudo sk-pseudo-circle">女靴</text>
				</view>
			</view>
			<view class="categories categories">
				<scroll-view :scroll-y="true" class="primary primary">
					<view class="item active sk-pseudo sk-pseudo-circle">
						<text class="name sk-transparent sk-text-14-2857-43 sk-text">居家</text>
					</view>
					<view class="item sk-pseudo sk-pseudo-circle">
						<text class="name sk-transparent sk-text-14-2857-711 sk-text">美食</text>
					</view>
					<view class="item sk-pseudo sk-pseudo-circle">
						<text class="name sk-transparent sk-text-14-2857-162 sk-text">服饰</text>
					</view>
					<view class="item sk-pseudo sk-pseudo-circle">
						<text class="name sk-transparent sk-text-14-2857-875 sk-text">母婴</text>
					</view>
					<view class="item sk-pseudo sk-pseudo-circle">
						<text class="name sk-transparent sk-text-14-2857-761 sk-text">个护</text>
					</view>
					<view class="item sk-pseudo sk-pseudo-circle">
						<text class="name sk-transparent sk-text-14-2857-727 sk-text">严选</text>
					</view>
					<view class="item sk-pseudo sk-pseudo-circle">
						<text class="name sk-transparent sk-text-14-2857-64 sk-text">数码</text>
					</view>
					<view class="item sk-pseudo sk-pseudo-circle">
						<text class="name sk-transparent sk-text-14-2857-558 sk-text">运动</text>
					</view>
					<view class="item sk-pseudo sk-pseudo-circle">
						<text class="name sk-transparent sk-text-14-2857-952 sk-text">杂项</text>
					</view>
				</scroll-view>
				<scroll-view :scroll-y="true" class="secondary secondary">
					<view is="components/GlobalSwiper" class="banner banner">
						<view class="carousel GlobalSwiper--carousel">
							<swiper autoplay="false" circular="true" interval="3000" current="0">
								<swiper-item
									style="position: absolute; width: 100%; height: 100%; transform: translate(100%, 0px) translateZ(0px);">
									<navigator class="navigator GlobalSwiper--navigator" hover-class="none">
										<image class="image GlobalSwiper--image sk-image" mode="aspectFill"></image>
									</navigator>
								</swiper-item>
							</swiper>
							<view class="indicator GlobalSwiper--indicator">
								<text class="dot GlobalSwiper--dot"></text>
								<text class="dot GlobalSwiper--dot active GlobalSwiper--active"></text>
								<text class="dot GlobalSwiper--dot"></text>
								<text class="dot GlobalSwiper--dot"></text>
								<text class="dot GlobalSwiper--dot"></text>
							</view>
						</view>
					</view>
					<view class="panel panel">
						<view class="title title">
							<text class="name sk-transparent sk-text-27-9412-33 sk-text">居家生活用品</text>
							<navigator
								class="more sk-transparent sk-text-30-8824-717 sk-text sk-pseudo sk-pseudo-circle"
								hover-class="none">全部</navigator>
						</view>
						<view class="section section">
							<navigator class="goods goods" hover-class="none">
								<image class="image sk-image"></image>
								<view class="name ellipsis sk-transparent sk-text-14-2857-735 sk-text">钻石陶瓷涂层多用锅18cm 小奶锅
								</view>
								<view class="price price">
									<text class="symbol sk-transparent sk-opacity">¥</text>
									<text
										class="number sk-transparent sk-text-14-2857-814 sk-text">1369155859933827074</text>
								</view>
							</navigator>
							<navigator class="goods goods" hover-class="none">
								<image class="image sk-image"></image>
								<view class="name ellipsis sk-transparent sk-text-14-2857-564 sk-text">极光限定 珠光蓝珐琅锅
								</view>
								<view class="price price">
									<text class="symbol sk-transparent sk-opacity">¥</text>
									<text
										class="number sk-transparent sk-text-14-2857-469 sk-text">1379052170040578049</text>
								</view>
							</navigator>
						</view>
					</view>
					<view class="panel panel">
						<view class="title title">
							<text class="name sk-transparent sk-text-27-9412-942 sk-text">收纳</text>
							<navigator
								class="more sk-transparent sk-text-30-8824-626 sk-text sk-pseudo sk-pseudo-circle"
								hover-class="none">全部</navigator>
						</view>
						<view class="section section">
							<navigator class="goods goods" hover-class="none">
								<image class="image sk-image"></image>
								<view class="name ellipsis sk-transparent sk-text-14-2857-118 sk-text">给衣柜减减肥，真空防潮压缩袋
								</view>
								<view class="price price">
									<text class="symbol sk-transparent sk-opacity">¥</text>
									<text class="number sk-transparent sk-text-14-2857-265 sk-text">1183010</text>
								</view>
							</navigator>
							<navigator class="goods goods" hover-class="none">
								<image class="image sk-image"></image>
								<view class="name ellipsis sk-transparent sk-text-14-2857-90 sk-text">爆款明星好物，抽屉式透明储物柜
								</view>
								<view class="price price">
									<text class="symbol sk-transparent sk-opacity">¥</text>
									<text class="number sk-transparent sk-text-14-2857-955 sk-text">1108008</text>
								</view>
							</navigator>
							<navigator class="goods goods" hover-class="none">
								<image class="image sk-image"></image>
								<view class="name ellipsis sk-transparent sk-text-14-2857-998 sk-text">衣柜省空间神器，棉麻涤·收纳挂袋
								</view>
								<view class="price price">
									<text class="symbol sk-transparent sk-opacity">¥</text>
									<text class="number sk-transparent sk-text-14-2857-281 sk-text">1028004</text>
								</view>
							</navigator>
							<navigator class="goods goods" hover-class="none">
								<image class="image sk-image"></image>
								<view class="name ellipsis sk-transparent sk-text-14-2857-832 sk-text">换季好帮手，大容量防尘衣物收纳袋
								</view>
								<view class="price price">
									<text class="symbol sk-transparent sk-opacity">¥</text>
									<text class="number sk-transparent sk-text-14-2857-385 sk-text">1252031</text>
								</view>
							</navigator>
							<navigator class="goods goods" hover-class="none">
								<image class="image sk-image"></image>
								<view class="name ellipsis sk-transparent sk-text-14-2857-90 sk-text">可水洗的布艺收纳盒</view>
								<view class="price price">
									<text class="symbol sk-transparent sk-opacity">¥</text>
									<text class="number sk-transparent sk-text-14-2857-210 sk-text">1225018</text>
								</view>
							</navigator>
							<navigator class="goods goods" hover-class="none">
								<image class="image sk-image"></image>
								<view class="name ellipsis sk-transparent sk-text-14-2857-718 sk-text">开发员自留款，带滚轮双层脏衣篓
								</view>
								<view class="price price">
									<text class="symbol sk-transparent sk-opacity">¥</text>
									<text class="number sk-transparent sk-text-14-2857-863 sk-text">1131025</text>
								</view>
							</navigator>
							<navigator class="goods goods" hover-class="none">
								<image class="image sk-image"></image>
							</navigator>
							<navigator class="goods goods" hover-class="none">
								<image class="image sk-image"></image>
							</navigator>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>
<style>
	.sk-transparent {
		color: transparent !important;
	}

	.sk-text-14-2857-410 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 36.7991rpx;
		position: relative !important;
	}

	.sk-text {
		background-origin: content-box !important;
		background-clip: content-box !important;
		background-color: transparent !important;
		color: transparent !important;
		background-repeat: repeat-y !important;
	}

	.sk-text-14-2857-43 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.3458rpx;
		position: relative !important;
	}

	.sk-text-14-2857-711 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.3458rpx;
		position: relative !important;
	}

	.sk-text-14-2857-162 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.3458rpx;
		position: relative !important;
	}

	.sk-text-14-2857-875 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.3458rpx;
		position: relative !important;
	}

	.sk-text-14-2857-761 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.3458rpx;
		position: relative !important;
	}

	.sk-text-14-2857-727 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.3458rpx;
		position: relative !important;
	}

	.sk-text-14-2857-64 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.3458rpx;
		position: relative !important;
	}

	.sk-text-14-2857-558 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.3458rpx;
		position: relative !important;
	}

	.sk-text-14-2857-952 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.3458rpx;
		position: relative !important;
	}

	.sk-text-27-9412-33 {
		background-image: linear-gradient(transparent 27.9412%, #EEEEEE 0%, #EEEEEE 72.0588%, transparent 0%) !important;
		background-size: 100% 59.5794rpx;
		position: relative !important;
	}

	.sk-text-30-8824-717 {
		background-image: linear-gradient(transparent 30.8824%, #EEEEEE 0%, #EEEEEE 69.1176%, transparent 0%) !important;
		background-size: 100% 59.5794rpx;
		position: relative !important;
	}

	.sk-text-14-2857-735 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 29.4393rpx;
		position: relative !important;
	}

	.sk-opacity {
		opacity: 0 !important;
	}

	.sk-text-14-2857-814 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 31.8925rpx;
		position: relative !important;
	}

	.sk-text-14-2857-564 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 29.4393rpx;
		position: relative !important;
	}

	.sk-text-14-2857-469 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 31.8925rpx;
		position: relative !important;
	}

	.sk-text-27-9412-942 {
		background-image: linear-gradient(transparent 27.9412%, #EEEEEE 0%, #EEEEEE 72.0588%, transparent 0%) !important;
		background-size: 100% 59.5794rpx;
		position: relative !important;
	}

	.sk-text-30-8824-626 {
		background-image: linear-gradient(transparent 30.8824%, #EEEEEE 0%, #EEEEEE 69.1176%, transparent 0%) !important;
		background-size: 100% 59.5794rpx;
		position: relative !important;
	}

	.sk-text-14-2857-118 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 29.4393rpx;
		position: relative !important;
	}

	.sk-text-14-2857-265 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 31.8925rpx;
		position: relative !important;
	}

	.sk-text-14-2857-90 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 29.4393rpx;
		position: relative !important;
	}

	.sk-text-14-2857-955 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 31.8925rpx;
		position: relative !important;
	}

	.sk-text-14-2857-998 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 29.4393rpx;
		position: relative !important;
	}

	.sk-text-14-2857-281 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 31.8925rpx;
		position: relative !important;
	}

	.sk-text-14-2857-832 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 29.4393rpx;
		position: relative !important;
	}

	.sk-text-14-2857-385 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 31.8925rpx;
		position: relative !important;
	}

	.sk-text-14-2857-210 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 31.8925rpx;
		position: relative !important;
	}

	.sk-text-14-2857-718 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 29.4393rpx;
		position: relative !important;
	}

	.sk-text-14-2857-863 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 31.8925rpx;
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