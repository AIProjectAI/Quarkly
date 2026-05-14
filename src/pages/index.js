import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Text, LinkBox, Box, Button, Section, Image, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { GiFairyWings } from "react-icons/gi";
import { FiMenu } from "react-icons/fi";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"New perspective on scandinavian design"} />
			<meta property={"og:title"} content={"Hellstrom | scandinavian design"} />
			<meta property={"og:description"} content={"New perspective on scandinavian design"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/6309b04d5e5c6e0021560652/images/hellstrom-ogimage.png?v=2023-03-29T19:52:24.158Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6309b04d5e5c6e0021560652/images/hellstrom-favicon-32.png?v=2023-03-29T20:04:58.334Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6309b04d5e5c6e0021560652/images/hellstrom-favicon-152.png?v=2023-03-29T20:05:05.735Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6309b04d5e5c6e0021560652/images/hellstrom-favicon-152.png?v=2023-03-29T20:05:05.735Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6309b04d5e5c6e0021560652/images/hellstrom-favicon-152.png?v=2023-03-29T20:05:05.735Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6309b04d5e5c6e0021560652/images/hellstrom-favicon-152.png?v=2023-03-29T20:05:05.735Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6309b04d5e5c6e0021560652/images/hellstrom-favicon-271.png?v=2023-03-29T20:05:13.498Z"} />
			<meta name={"msapplication-TileColor"} content={"#F2EFEA"} />
		</Helmet>
		<Section sm-padding="8px 0 8px 0" quarkly-title="Header-3">
			<Override slot="SectionContent" flex-direction="row" justify-content="space-between" />
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="flex-start"
				flex-direction="row"
				width="30%"
				sm-width="50%"
				sm-align-items="center"
				sm-flex-direction="row"
				sm-justify-content="flex-start"
				md-width="50%"
				lg-width="70%"
				md-justify-content="flex-start"
			>
				<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="12px">
					<Icon category="gi" icon={GiFairyWings} color="#6d32ec" size="37px" />
					<Text
						margin="0"
						md-margin="0px 0 0px 0"
						text-align="left"
						font="--lead"
						sm-margin="0px 0 0px 0"
						display="block"
					>
						Company
					</Text>
				</LinkBox>
			</Box>
			<Components.QuarklycommunityKitMobileSidePanel
				menuPosition="full"
				breakpoint="lg"
				width="70%"
				sm-width="50%"
				md-width="50%"
				lg-width="30%"
			>
				<Override slot="Children" md-display="flex" />
				<Override
					slot="Content"
					padding="0px 0px 0px 0px"
					background="rgba(255, 255, 255, 0)"
					lg-background="#ffffff"
					lg-margin="0px 0px 0px 0px"
				/>
				<Override
					slot="Button Text"
					font="normal 600 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					text-transform="uppercase"
					letter-spacing="1px"
					sm-font="normal 600 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					sm-margin="0px 2px 0px 0px"
					lg-margin="0px 0px 0px 0px"
				/>
				<Override
					slot="Button Icon :closed"
					category="fi"
					icon={FiMenu}
					size="32px"
					padding="5px 7px 5px 7px"
					border-radius="50px"
				/>
				<Override
					slot="Button Icon"
					width="28px"
					height="28px"
					category="fi"
					icon={FiMenu}
					color="--dark"
					size="24px"
					lg-width="32px"
					lg-height="32px"
				/>
				<Override
					slot="Cross"
					lg-width="32px"
					lg-height="32px"
					size="32px"
					top="24px"
					right="24px"
				/>
				<Box
					align-items="center"
					lg-justify-content="center"
					lg-align-items="flex-start"
					justify-content="flex-end"
					display="flex"
					lg-flex-direction="column"
					lg-margin="0px auto 0px auto"
					lg-min-width="300px"
					lg-max-width="1280px"
					lg-width="90%"
					lg-padding="24px 0px 48px 0px"
				>
					<Box
						display="none"
						lg-width="100%"
						lg-margin="0px 0px 24px 0px"
						lg-display="flex"
						lg-padding="12px 0px 12px 0px"
					>
						<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="12px">
							<Icon category="gi" icon={GiFairyWings} color="#6d32ec" size="37px" />
							<Text
								margin="0"
								md-margin="0px 0 0px 0"
								text-align="left"
								font="--lead"
								sm-margin="0px 0 0px 0"
								display="block"
							>
								Company
							</Text>
						</LinkBox>
					</Box>
					<Components.QuarklycommunityKitMenu
						display="flex"
						filterMode="exclude"
						filterPages="/index"
						grid-gap="8px"
						lg-flex-direction="column"
						lg-padding="6px 0px 6px 0px"
						lg-margin="0px 0px 24px 0px"
						align-items="center"
						flex-wrap="wrap"
						overflow-x="visible"
						overflow-y="visible"
						lg-align-items="flex-start"
					>
						<Override
							slot="link"
							color="--darkL2"
							hover-color="--primary"
							font="600 16px sans-serif"
							text-decoration-line="initial"
							transition="color 0.1s ease 0s"
							lg-font="--lead"
						/>
						<Override slot="item-active" border-width={0} />
						<Override slot="item" padding="6px 8px 6px 8px" />
						<Override slot="link-active" cursor="default" color="--primary" />
						<Override slot="link-about" />
					</Components.QuarklycommunityKitMenu>
					<Button box-shadow="0 0 0 0 #959494" border-radius="4px">
						Button
					</Button>
					<Box
						width="25%"
						display="none"
						lg-width="100%"
						lg-flex-direction="column"
						lg-align-items="flex-start"
						lg-display="flex"
						justify-content="space-around"
						align-items="center"
						flex-wrap="wrap"
						lg-margin="0px 0px 0px 0px"
					>
						<Link
							font="--lead"
							padding="10px 0px 10px 0px"
							margin="0px 0px 6px 0px"
							href="tel:12345678"
							text-decoration-line="initial"
							color="--dark"
							lg-margin="0px 0px 24px 0px"
						>
							+1(234)567-89-00
						</Link>
						<SocialMedia
							instagram="https://instagram.com/instagram"
							margin="0px 0px 0px 0px"
							facebook="https://www.facebook.com/quarklyapp/"
							youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
							lg-display="flex"
							lg-grid-gap="12px"
						>
							<Override slot="link-twitter" margin="0px 0px 0px 5px">
								<div />
							</Override>
							<Override
								slot="link"
								border-radius="50%"
								background="transparent"
								hover-color="--light"
								display="flex"
								margin="0 5px 0 5px"
								padding="5x 5px 5px 5px"
								width="32px"
								height="32px"
								align-items="center"
								justify-content="center"
							/>
							<Override slot="icon" size="32px" border-radius="50px" color="--darkL2" />
							<Override slot="link-facebook" margin="0px 5px 0px 0px">
								<div />
							</Override>
						</SocialMedia>
					</Box>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
		</Section>
		<Section padding="16px 40px 16px 40px" quarkly-title="Header" position="absolute" sm-padding="16px 20px 16px 20px">
			<Override
				slot="SectionContent"
				flex-direction="row"
				align-items="center"
				display="flex"
				justify-content="space-between"
				width="100%"
				max-width="none"
			/>
			<Box
				empty-border-color="LightGray"
				width="30%"
				align-items="center"
				lg-width="50%"
				empty-min-height="64px"
				empty-border-style="solid"
				display="flex"
				sm-width="70%"
				empty-min-width="64px"
				empty-border-width="1px"
			>
				<Image src="https://uploads.quarkly.io/6309b04d5e5c6e0021560652/images/HELLSTRO%CC%88M-logo.svg?v=2023-03-29T20:00:18.821Z" display="block" height="30px" />
			</Box>
			<Box
				sm-width="30%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-style="solid"
				display="flex"
				align-items="center"
				empty-border-width="1px"
				empty-border-color="LightGray"
				width="70%"
				lg-width="50%"
			>
				<Components.QuarklycommunityKitMobileSidePanel>
					<Override slot="Content" justify-content="flex-end" padding="0px 0px 0px 0px" background="none" />
					<Override
						slot="Button Text"
						md-text-transform="uppercase"
						md-color="--darkL2"
						md-letter-spacing="1px"
						md-font="--base"
					/>
					<Override slot="Button Icon" md-color="--darkL2" />
					<Box
						md-padding="20px 0px 20px 0px"
						display="flex"
						justify-content="flex-end"
						align-items="center"
						md-flex-direction="column"
					>
						<Link text-decoration-line="initial" color="--darkL2" font="--base" href="#">
							Facebook
						</Link>
						<Link
							md-margin="20px 0px 0px 0px"
							href="#"
							text-decoration-line="initial"
							color="--darkL2"
							font="--base"
							margin="0px 0px 0px 20px"
						>
							LinkedIn
						</Link>
						<Link
							color="--darkL2"
							font="--base"
							margin="0px 0px 0px 20px"
							md-margin="20px 0px 0px 0px"
							href="#"
							text-decoration-line="initial"
						>
							Twitter
						</Link>
					</Box>
				</Components.QuarklycommunityKitMobileSidePanel>
			</Box>
		</Section>
		<Section padding="100px 40px 100px 40px" quarkly-title="HeroBlock" background="linear-gradient(0deg,rgba(249, 248, 243, 0.2) 0%,rgba(249, 248, 243, 0.6) 100%),rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1584&q=80) center/cover repeat scroll padding-box" sm-padding="100px 20px 100px 20px">
			<Override
				slot="SectionContent"
				flex-direction="row"
				grid-gap="40px"
				max-width="none"
				width="100%"
				sm-flex-direction="column"
				min-height="80vh"
				sm-min-width="280px"
			/>
			<Text
				margin="0px 0px 0px 0"
				color="--darkL2"
				font="--headline1"
				width="60%"
				lg-font="--headline1Lg"
				sm-font="--headline2Lg"
				sm-width="100%"
			>
				NEW PERSPECTIVE ON SCANDINAVIAN DESIGN
			</Text>
			<Text
				sm-margin="0px 0px 0px 0px"
				margin="0px 0px 0px 0"
				color="--darkL2"
				sm-text-align="left"
				font="--headline3"
				width="40%"
				text-align="right"
				lg-font="--headline3Lg"
				sm-width="100%"
			>
				FURNITURE
				<br />
				LIGHTING
				<br />
				ACCESSORIES
				<br />
				PROFESSIONALS
				<br />
				STORIES
			</Text>
		</Section>
		<Section padding="100px 40px 100px 40px" background="--color-light" sm-padding="40px 20px 40px 20px">
			<Override
				slot="SectionContent"
				flex-direction="row"
				grid-gap="20px"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
				sm-flex-direction="column"
				sm-width="100%"
				md-width="100%"
				lg-width="100%"
				sm-min-width="280px"
			/>
			<Text
				color="--darkL2"
				font="--headline2"
				width="20%"
				text-align="right"
				lg-font="--headline2Lg"
				lg-width="100%"
				lg-text-align="left"
				sm-margin="16px 0px 0px 0px"
			>
				FALL 2023 NEWS
			</Text>
			<Image
				src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000"
				display="block"
				width="60%"
				sm-width="100%"
				sm-order="-1"
				srcSet="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=500 500w,https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=800 800w,https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=1080 1080w,https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=1600 1600w,https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=2000 2000w,https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=2600 2600w,https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 1240px) 100vw,100vw"
			/>
			<Box width="20%" md-width="100%" lg-width="35%">
				<Text
					color="--darkL2"
					margin="0px 0px 12px 0px"
					font="--lead"
					lg-width="100%"
					sm-width="100%"
					md-width="540px"
				>
					Experience the sleek and modern design of our new scandinavian furniture collection, perfect for elevating any living space.
				</Text>
				<Text
					color="--darkL2"
					margin="0px 0px 12px 0px"
					font="--lead"
					lg-width="100%"
					sm-width="100%"
					md-width="540px"
				>
					Transform your home into a stylish haven with our latest scandinavian furniture line, featuring minimalist yet functional pieces.
				</Text>
			</Box>
		</Section>
		<Section padding="100px 40px 100px 40px" background="--color-light" sm-padding="40px 20px 40px 20px">
			<Override
				slot="SectionContent"
				flex-direction="row"
				grid-gap="20px"
				width="100%"
				max-width="none"
				flex-wrap="wrap"
				sm-flex-direction="column"
				sm-min-width="280px"
			/>
			<Box
				width="100%"
				display="flex"
				grid-gap="20px"
				flex-direction="row"
				align-items="flex-end"
				flex-wrap="wrap"
				sm-flex-direction="column"
				sm-align-items="flex-start"
			>
				<Image
					src="https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&w=2000"
					display="block"
					width="60%"
					sm-width="100%"
					sm-order="-1"
					srcSet="https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&w=500 500w,https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&w=800 800w,https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&w=1080 1080w,https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&w=1600 1600w,https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&w=2000 2000w,https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&w=2600 2600w,https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 1240px) 100vw,100vw"
				/>
				<Box
					width="30%"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					height="100%"
					justify-content="space-between"
					lg-order="-1"
					sm-width="100%"
					sm-height="auto"
				>
					<Text
						color="--darkL2"
						margin="-100px 0px 50px 100px"
						font="--headline2"
						width="100%"
						text-align="left"
						position="relative"
						lg-margin="-100px 0px 50px 0px"
						lg-font="--headline2Lg"
						sm-margin="36px 0px 0px 0px"
					>
						DOZE LOUNGE CHAIR
					</Text>
					<Image
						src="https://images.unsplash.com/photo-1533757114113-3e1d3e9d766c?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000"
						display="block"
						width="100%"
						sm-order="-1"
						srcSet="https://images.unsplash.com/photo-1533757114113-3e1d3e9d766c?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=500 500w,https://images.unsplash.com/photo-1533757114113-3e1d3e9d766c?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=800 800w,https://images.unsplash.com/photo-1533757114113-3e1d3e9d766c?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=1080 1080w,https://images.unsplash.com/photo-1533757114113-3e1d3e9d766c?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=1600 1600w,https://images.unsplash.com/photo-1533757114113-3e1d3e9d766c?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=2000 2000w,https://images.unsplash.com/photo-1533757114113-3e1d3e9d766c?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=2600 2600w,https://images.unsplash.com/photo-1533757114113-3e1d3e9d766c?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 1240px) 100vw,100vw"
					/>
				</Box>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				width="60%"
				display="flex"
				justify-content="flex-end"
				lg-justify-content="flex-start"
				lg-width="100%"
			>
				<Text
					color="--darkL2"
					margin="20px 0px 0px 0px"
					font="--lead"
					max-width="360px"
					lg-max-width="540px"
					sm-margin="0px 0px 0px 0px"
				>
					Experience the ultimate comfort and elegance with our Scandinavian design chair, crafted with clean lines and premium materials to elevate any space.
				</Text>
			</Box>
		</Section>
		<Section padding="100px 40px 100px 40px" background="--color-light" sm-padding="40px 20px 40px 20px">
			<Override
				slot="SectionContent"
				flex-direction="row"
				grid-gap="20px"
				width="100%"
				max-width="none"
				lg-flex-direction="column"
				lg-align-items="flex-end"
				sm-min-width="280px"
			/>
			<Box
				min-width="100px"
				min-height="100px"
				width="60%"
				grid-gap="20px"
				display="flex"
				flex-direction="column"
				align-items="flex-end"
				sm-width="100%"
			>
				<Image
					src="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000"
					display="block"
					width="100%"
					srcSet="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=500 500w,https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=800 800w,https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=1080 1080w,https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=1600 1600w,https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=2000 2000w,https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=2600 2600w,https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 1240px) 100vw,100vw"
				/>
			</Box>
			<Box
				width="40%"
				lg-width="100%"
				lg-display="flex"
				lg-flex-direction="column"
				lg-align-items="flex-end"
			>
				<Text
					color="--darkL2"
					margin="-100px 0px 50px 100px"
					font="--headline2"
					text-align="left"
					lg-width="100%"
					lg-margin="0px 0px 20px 0px"
					lg-font="--headline2Lg"
					sm-margin="16px 0px 20px 0px"
				>
					LOFT CHAIR
					<br />
					—
					<br />
					STAINED DARK BROWN
				</Text>
				<Text
					color="--darkL2"
					margin="0px 0px 0px 0px"
					font="--lead"
					width="40%"
					lg-max-width="540px"
					lg-width="100%"
				>
					Experience the ultimate comfort and elegance with our Scandinavian design chair, crafted with clean lines and premium materials to elevate any space.
				</Text>
			</Box>
		</Section>
		<Section padding="100px 40px 100px 40px" background="--color-light" sm-padding="40px 20px 40px 20px">
			<Override
				slot="SectionContent"
				flex-direction="row"
				grid-gap="20px"
				max-width="none"
				width="100%"
				lg-flex-direction="column"
				lg-align-items="flex-end"
				sm-min-width="280px"
			/>
			<Text
				color="--darkL2"
				margin="0px 0px 0px 0px"
				font="--headline2"
				width="20%"
				text-align="right"
				lg-width="100%"
				lg-text-align="left"
				lg-font="--headline2Lg"
				sm-margin="16px 0px 0px 0px"
			>
				ARRANGE DESKTOP
			</Text>
			<Image
				src="https://images.unsplash.com/photo-1535381564165-78dd4937c545?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000"
				display="block"
				width="60%"
				lg-order="-1"
				sm-width="100%"
				srcSet="https://images.unsplash.com/photo-1535381564165-78dd4937c545?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=500 500w,https://images.unsplash.com/photo-1535381564165-78dd4937c545?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=800 800w,https://images.unsplash.com/photo-1535381564165-78dd4937c545?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=1080 1080w,https://images.unsplash.com/photo-1535381564165-78dd4937c545?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=1600 1600w,https://images.unsplash.com/photo-1535381564165-78dd4937c545?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=2000 2000w,https://images.unsplash.com/photo-1535381564165-78dd4937c545?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=2600 2600w,https://images.unsplash.com/photo-1535381564165-78dd4937c545?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 1240px) 100vw,100vw"
			/>
			<Text
				color="--darkL2"
				margin="0px 0px 0px 0px"
				font="--lead"
				width="20%"
				align-self="flex-end"
				lg-width="100%"
				lg-max-width="540px"
				lg-align-self="auto"
			>
				Transform your workspace into a sleek and sophisticated haven with our Scandinavian design desktop, featuring minimalist aesthetics and high-quality craftsmanship for a truly inspiring work environment.
			</Text>
		</Section>
		<Section padding="100px 40px 100px 40px" background="--color-light" sm-padding="40px 20px 40px 20px">
			<Override
				slot="SectionContent"
				flex-direction="row"
				grid-gap="20px"
				flex-wrap="wrap"
				max-height="1200px"
				max-width="1280px"
				align-content="flex-start"
				lg-flex-direction="column"
				lg-flex-wrap="no-wrap"
				lg-width="100%"
				lg-max-width="none"
				lg-align-items="flex-end"
				sm-min-width="280px"
			/>
			<Image
				src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000"
				display="block"
				width="50%"
				lg-order="-1"
				sm-width="100%"
				srcSet="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=500 500w,https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=800 800w,https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=1080 1080w,https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=1600 1600w,https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=2000 2000w,https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=2600 2600w,https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 1240px) 100vw,100vw"
			/>
			<Text
				color="--darkL2"
				margin="0px 0px 0px 0px"
				font="--headline2"
				width="20%"
				text-align="left"
				order="-1"
				lg-width="100%"
				lg-font="--headline2Lg"
				sm-margin="16px 0px 0px 0px"
			>
				FLOOR LAMPS
			</Text>
			<Text
				color="--darkL2"
				margin="0px 0px 0px 0px"
				font="--lead"
				width="20%"
				lg-width="100%"
				lg-max-width="540px"
			>
				Illuminate your workspace with our elegant Scandinavian design lamp, crafted with clean lines and premium materials to elevate your productivity and style.
			</Text>
		</Section>
		<Section padding="100px 40px 100px 40px" background="--color-light" sm-padding="40px 20px 40px 20px">
			<Override slot="SectionContent" width="100%" max-width="none" sm-min-width="280px" />
			<Text
				color="--darkL2"
				margin="0px 0px 0px 0px"
				font="--headline2"
				width="50%"
				text-align="left"
				lg-width="100%"
				lg-font="--headline2Lg"
			>
				A FEW OF OUR NEW DESIGNS
			</Text>
			<Text
				color="--darkL2"
				margin="20px 0px 0px 0px"
				font="--lead"
				width="40%"
				lg-width="100%"
				lg-max-width="540px"
			>
				Discover the beauty of Scandinavian design with our new furniture collection, crafted with high-quality materials and timeless aesthetics
			</Text>
			<Components.Tabs
				width="100%"
				margin="50px 0px 0px 0px"
				defaultTab="one"
				display="flex"
				flex-direction="row-reverse"
				lg-flex-direction="column-reverse"
			>
				<Override slot="Tab :active" opacity="1" md-color="--dark" transform="translateX(0px)" />
				<Override
					slot="Tab two"
					font="--headline3"
					cursor="pointer"
					lg-margin="0px 8px 0px 0px"
					md-font="--headline3Lg"
				>
					Lamp 2
				</Override>
				<Override
					slot="Tab three"
					font="--headline3"
					cursor="pointer"
					lg-margin="0px 8px 0px 0px"
					md-font="--headline3Lg"
				>
					Table 3
				</Override>
				<Override
					slot="Tab four"
					margin="0px 0px 20px 0px"
					font="--headline3"
					cursor="pointer"
					lg-margin="0px 8px 20px 0px"
					md-font="--headline3Lg"
				>
					Chair 2
				</Override>
				<Override
					slot="Tab one"
					font="--headline3"
					cursor="pointer"
					lg-margin="0px 8px 0px 0px"
					md-font="--headline3Lg"
				>
					Chair
				</Override>
				<Override
					slot="Tablist"
					flex-direction="column"
					width="25%"
					padding="16px 16px 0px 24px"
					lg-width="100%"
					justify-content="flex-end"
					lg-padding="16px 16px 0px 0px"
					lg-flex-direction="row"
					lg-justify-content="flex-start"
					sm-flex-direction="column"
				/>
				<Override
					slot="TabPanels"
					width="75%"
					lg-width="100%"
					md-width="100%"
					min-height="720px"
					lg-min-height="min-content"
					lg-height="460px"
					lg-display="flex"
					lg-flex-direction="column"
				/>
				<Override
					slot="Tab"
					padding="16px 6px 16px 6px"
					transition="transform 1s ease 0s"
					color="--darkL2"
					sm-width="50%"
					sm-text-align="left"
					md-width="50%"
					text-align="left"
					background="rgba(32, 108, 236, 0)"
					margin="0px 0px 0px 0px"
					font="--headline3"
					transform="translateX(0px)"
					opacity="0.5"
				>
					Cost-Effectiveas as
				</Override>
				<Components.Tab tabId="one" height="100%" lg-height="auto">
					<Override slot="Tab two">
						Animation
					</Override>
					<Image
						lg-height="460px"
						padding="0px 0px 0px 0px"
						src="https://images.unsplash.com/photo-1617364852223-75f57e78dc96?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000"
						max-width="100%"
						object-fit="cover"
						width="100%"
						height="1200px"
						srcSet="https://images.unsplash.com/photo-1617364852223-75f57e78dc96?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=500 500w,https://images.unsplash.com/photo-1617364852223-75f57e78dc96?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=800 800w,https://images.unsplash.com/photo-1617364852223-75f57e78dc96?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=1080 1080w,https://images.unsplash.com/photo-1617364852223-75f57e78dc96?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=1600 1600w,https://images.unsplash.com/photo-1617364852223-75f57e78dc96?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=2000 2000w,https://images.unsplash.com/photo-1617364852223-75f57e78dc96?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=2600 2600w,https://images.unsplash.com/photo-1617364852223-75f57e78dc96?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&h=2000&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 1240px) 100vw,100vw"
					/>
				</Components.Tab>
				<Components.Tab tabId="two">
					<Image
						max-width="100%"
						object-fit="cover"
						width="100%"
						lg-height="460px"
						src="https://images.unsplash.com/photo-1542728928-1413d1894ed1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
						height="1200px"
						srcSet="https://images.unsplash.com/photo-1542728928-1413d1894ed1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=500 500w,https://images.unsplash.com/photo-1542728928-1413d1894ed1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=800 800w,https://images.unsplash.com/photo-1542728928-1413d1894ed1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=1080 1080w,https://images.unsplash.com/photo-1542728928-1413d1894ed1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=1600 1600w,https://images.unsplash.com/photo-1542728928-1413d1894ed1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=2000 2000w,https://images.unsplash.com/photo-1542728928-1413d1894ed1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=2600 2600w,https://images.unsplash.com/photo-1542728928-1413d1894ed1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 1240px) 100vw,100vw"
					/>
				</Components.Tab>
				<Components.Tab tabId="three">
					<Image
						width="100%"
						lg-height="460px"
						src="https://images.unsplash.com/photo-1581428982868-e410dd047a90?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
						max-width="100%"
						object-fit="cover"
						height="1200px"
						srcSet="https://images.unsplash.com/photo-1581428982868-e410dd047a90?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=500 500w,https://images.unsplash.com/photo-1581428982868-e410dd047a90?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=800 800w,https://images.unsplash.com/photo-1581428982868-e410dd047a90?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=1080 1080w,https://images.unsplash.com/photo-1581428982868-e410dd047a90?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=1600 1600w,https://images.unsplash.com/photo-1581428982868-e410dd047a90?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=2000 2000w,https://images.unsplash.com/photo-1581428982868-e410dd047a90?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=2600 2600w,https://images.unsplash.com/photo-1581428982868-e410dd047a90?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 1240px) 100vw,100vw"
					/>
				</Components.Tab>
				<Components.Tab tabId="four">
					<Image
						src="https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
						object-fit="cover"
						width="100%"
						lg-height="460px"
						height="1200px"
						srcSet="https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=500 500w,https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=800 800w,https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=1080 1080w,https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=1600 1600w,https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=2000 2000w,https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=2600 2600w,https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 1240px) 100vw,100vw"
					/>
				</Components.Tab>
			</Components.Tabs>
		</Section>
		<Section padding="100px 0 100px 0" background="--color-green" sm-padding="40px 20px 40px 20px">
			<Override slot="SectionContent" sm-min-width="280px" />
			<Box
				flex-wrap="wrap"
				margin="0px 0px 46px 0px"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
			>
				<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px" width="30%">
					01
				</Text>
				<Text
					font="--headline2"
					color="--lightD1"
					margin="0px 0px 0px 0px"
					width="65%"
					md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
					sm-font="normal 700 24px/1.1 &quot;Inter&quot;, sans-serif"
					lg-font="--headline2Lg"
				>
					Fashion
				</Text>
			</Box>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				flex-wrap="wrap"
				margin="0px 0px 46px 0px"
			>
				<Text color="--light" margin="0px 0px 0px 0px" font="normal 600 18px/1.5 --fontFamily-googleInter" width="30%">
					02
				</Text>
				<Text
					color="--lightD1"
					margin="0px 0px 0px 0px"
					width="65%"
					md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
					sm-font="normal 700 24px/1.1 &quot;Inter&quot;, sans-serif"
					font="--headline2"
					lg-font="--headline2Lg"
				>
					Beauty
				</Text>
			</Box>
			<Box
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				flex-wrap="wrap"
				margin="0px 0px 46px 0px"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
			>
				<Text margin="0px 0px 0px 0px" font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" width="30%">
					03
				</Text>
				<Text
					font="--headline2"
					color="--lightD1"
					margin="0px 0px 0px 0px"
					width="65%"
					md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
					sm-font="normal 700 24px/1.1 &quot;Inter&quot;, sans-serif"
					lg-font="--headline2Lg"
				>
					Culture
				</Text>
			</Box>
			<Box
				empty-border-color="LightGray"
				display="flex"
				flex-wrap="wrap"
				margin="0px 0px 46px 0px"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px" width="30%">
					04
				</Text>
				<Text
					md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
					sm-font="normal 700 24px/1.1 &quot;Inter&quot;, sans-serif"
					font="--headline2"
					color="--lightD1"
					margin="0px 0px 0px 0px"
					width="65%"
					lg-font="--headline2Lg"
				>
					View on Magazine
				</Text>
			</Box>
			<Box
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				flex-wrap="wrap"
				margin="0px 0px 46px 0px"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
			>
				<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px" width="30%">
					05
				</Text>
				<Text
					sm-font="normal 700 24px/1.1 &quot;Inter&quot;, sans-serif"
					font="--headline2"
					color="--lightD1"
					margin="0px 0px 0px 0px"
					width="65%"
					md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
					lg-font="--headline2Lg"
				>
					Consultant
				</Text>
			</Box>
		</Section>
		<Section padding="100px 40px 100px 40px" sm-padding="40px 20px 40px 20px" quarkly-title="Footer" background="--color-green">
			<Override
				slot="SectionContent"
				md-align-items="center"
				flex-direction="row"
				md-flex-direction="column"
				flex-wrap="wrap"
				max-width="none"
				width="100%"
				sm-align-items="flex-start"
				sm-min-width="280px"
			/>
			<Box width="100%" margin="0px 0px 100px 0px">
				<Text
					margin="0px 0px 0px 0px"
					font="--headline3"
					color="--darkL2"
					sm-text-align="left"
					text-transform="uppercase"
				>
					Hellström
				</Text>
			</Box>
			<Box
				width="100%"
				display="grid"
				grid-template-columns="repeat(4, 1fr)"
				grid-gap="32px"
				align-items="start"
				lg-grid-template-columns="repeat(2, 1fr)"
				md-grid-template-columns="repeat(1, 1fr)"
			>
				<Box
					empty-min-width="64px"
					empty-min-height="64px"
					md-justify-content="center"
					md-align-items="center"
					md-padding="16px 16px 16px 16px"
					md-width="100%"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					justify-content="flex-end"
					sm-align-items="flex-start"
					sm-padding="16px 0px 16px 0px"
					margin="0px 24px 0px 0px"
				>
					<Text
						margin="0px 0px 12px 0px"
						font="--base"
						color="--darkL2"
						sm-text-align="center"
						text-transform="uppercase"
						letter-spacing="1px"
					>
						About us
					</Text>
					<Link
						href="#"
						color="--darkL2"
						font="--base"
						margin="0px 0px 0px 0px"
						sm-text-align="center"
						text-decoration-line="initial"
						hover-text-decoration-line="underline"
					>
						Our Story
					</Link>
					<Link
						href="#"
						color="--darkL2"
						margin="0px 0px 0px 0px"
						font="--base"
						sm-text-align="center"
						text-decoration-line="initial"
						hover-text-decoration-line="underline"
					>
						Career
					</Link>
					<Link
						href="#"
						color="--darkL2"
						margin="0px 0px 0px 0px"
						font="--base"
						sm-text-align="center"
						text-decoration-line="initial"
						hover-text-decoration-line="underline"
					>
						Privacy Policy
					</Link>
				</Box>
				<Box
					empty-min-width="64px"
					empty-min-height="64px"
					md-justify-content="center"
					md-align-items="center"
					md-padding="16px 16px 16px 16px"
					md-width="100%"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					justify-content="flex-end"
					sm-align-items="flex-start"
					sm-padding="16px 0px 16px 0px"
				>
					<Text
						margin="0px 0px 12px 0px"
						font="--base"
						color="--darkL2"
						sm-text-align="center"
						text-transform="uppercase"
						letter-spacing="1px"
					>
						CONTACTS
					</Text>
					<Link
						href="mailto:OlaHellstrom@ohellstrom.com"
						color="--darkL2"
						margin="0px 0px 0px 0px"
						font="--base"
						sm-text-align="left"
						text-decoration-line="initial"
						hover-text-decoration-line="underline"
					>
						OlaHellstrom@ohellstrom.com
					</Link>
					<Link
						href="tel:2087432000"
						color="--darkL2"
						margin="0px 0px 0px 0px"
						font="--base"
						sm-text-align="left"
						text-decoration-line="initial"
						hover-text-decoration-line="underline"
					>
						(208) 743-2000
					</Link>
					<Link
						href="#"
						color="--darkL2"
						margin="0px 0px 0px 0px"
						font="--base"
						sm-text-align="left"
						text-decoration-line="initial"
						hover-text-decoration-line="underline"
					>
						2002 Thain Grade, Lewiston, IL 83501
					</Link>
				</Box>
				<Box
					empty-min-width="64px"
					empty-min-height="64px"
					md-justify-content="center"
					md-align-items="center"
					md-padding="16px 16px 16px 16px"
					md-width="100%"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					justify-content="flex-end"
					sm-align-items="flex-start"
					sm-padding="16px 0px 16px 0px"
				>
					<Text
						margin="0px 0px 12px 0px"
						font="--base"
						color="--darkL2"
						sm-text-align="center"
						text-transform="uppercase"
						letter-spacing="1px"
					>
						FOLLOW US
					</Text>
					<Link
						href="#"
						color="--darkL2"
						margin="0px 0px 0px 0px"
						font="--base"
						sm-text-align="center"
						text-decoration-line="initial"
						hover-text-decoration-line="underline"
					>
						Facebook
					</Link>
					<Link
						href="#"
						color="--darkL2"
						margin="0px 0px 0px 0px"
						font="--base"
						sm-text-align="center"
						text-decoration-line="initial"
						hover-text-decoration-line="underline"
					>
						Twitter
					</Link>
					<Link
						href="#"
						color="--darkL2"
						margin="0px 0px 0px 0px"
						font="--base"
						sm-text-align="center"
						text-decoration-line="initial"
						hover-text-decoration-line="underline"
					>
						Instagram
					</Link>
				</Box>
				<Box
					empty-min-width="64px"
					empty-min-height="64px"
					md-justify-content="center"
					md-align-items="center"
					md-padding="16px 16px 16px 16px"
					md-width="100%"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					justify-content="flex-end"
					sm-align-items="flex-start"
					sm-padding="16px 0px 16px 0px"
				>
					<Components.QuarklycommunityKitNetlifyForm
						width="100%"
						md-width="360px"
						sm-width="100%"
						max-width="600px"
						lg-max-width="340px"
						display="flex"
						justify-content="flex-end"
					>
						<Override
							slot="Form"
							align-items="center"
							display="flex"
							justify-content="center"
							width="100%"
						/>
						<Box
							display="flex"
							align-items="center"
							justify-content="flex-end"
							width="100%"
							sm-flex-direction="column"
						>
							<Input
								type="email"
								border-color="--color-darkL2"
								border-style="solid"
								md-width="100%"
								placeholder="Put your email here..."
								name="Email"
								required
								padding="6px 12px 6px 12px"
								border-width="2px"
								width="100%"
								color="--darkL2"
								lg-min-width="auto"
								margin="0px 0px 0px 0px"
								font="--base"
								background="transparent"
								border-radius="0px"
								max-width="320px"
								sm-width="100%"
								sm-max-width="none"
							/>
							<Button
								font="--base"
								flex-direction="row-reverse"
								padding="8px 24px 8px 24px"
								background="--color-darkL2"
								color="--light"
								display="flex"
								text-align="right"
								align-items="center"
								justify-content="flex-end"
								text-transform="uppercase"
								letter-spacing="1px"
								border-radius="0px"
								sm-width="100%"
								sm-justify-content="center"
							>
								Subscribe
							</Button>
						</Box>
					</Components.QuarklycommunityKitNetlifyForm>
				</Box>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60da14fa3f4eb1001ea27687"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});