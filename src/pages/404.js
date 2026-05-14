import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Section, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Hellstrom | scandinavian design
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
					<Override
						slot="Content"
						justify-content="flex-end"
						padding="0px 0px 0px 0px"
						background="none"
						md-top="40px"
					/>
					<Override
						slot="Button Text"
						md-text-transform="uppercase"
						md-color="--darkL2"
						md-letter-spacing="1px"
						md-font="--base"
					/>
					<Override slot="Button Icon" md-color="--darkL2" />
					<Override slot="Children" />
					<Box
						md-padding="20px 0px 20px 0px"
						display="flex"
						justify-content="flex-end"
						align-items="center"
						md-flex-direction="column"
						md-background="white"
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
		<Section
			padding="100px 40px 100px 40px"
			quarkly-title="HeroBlock"
			background="linear-gradient(0deg,rgba(249, 248, 243, 0.6) 0%,rgba(249, 248, 243, 0.9) 100%),rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1584&q=80) center/cover repeat scroll padding-box"
			sm-padding="100px 20px 100px 20px"
			min-height="100vh"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				grid-gap="40px"
				max-width="none"
				width="100%"
				sm-flex-direction="column"
				min-height="80vh"
				md-flex-direction="column"
			/>
			<Text
				margin="0px 0px 0px 0"
				color="--primary"
				font="--headline2"
				width="20%"
				lg-font="--headline2Lg"
				sm-font="--headline2Lg"
				sm-width="100%"
			>
				404
			</Text>
			<Box
				display="flex"
				grid-template-columns="1fr 1fr"
				grid-gap="8px"
				sm-grid-template-columns="1fr"
				flex-direction="column"
				width="80%"
			>
				<Text
					margin="0px 0px 0px 0"
					color="--darkL2"
					font="--headline1"
					width="60%"
					lg-font="--headline1Lg"
					sm-font="--headline2Lg"
					sm-width="100%"
					text-transform="uppercase"
				>
					Page not found
				</Text>
				<Text
					margin="0px 0px 24px 0"
					color="--darkL2"
					sm-text-align="left"
					font="--headline3"
					text-align="left"
					lg-font="--headline3Lg"
					sm-width="100%"
					text-transform="uppercase"
					width="60%"
				>
					Sorry, we couldn’t find the page you’re looking for.
				</Text>
				<Box display="flex" flex-direction="column" align-items="flex-start">
					<Link
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
						text-decoration-line="initial"
						hover-background="--color-darkL1"
					>
						Go back to home
					</Link>
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