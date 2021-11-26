import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	body {
		font-size: 16px;
		font-family: sans-serif;
		color: ${({ theme }) => theme.colors.text};
		background-color: ${({ theme }) => theme.colors.background};
	}
	
	a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.link};

		&:hover {
			opacity: 0.75;
		}

	}

	// TODO: remove
	// BOILERPLATE CSS BELOW 
	.App {
		height: 100vh;
		background-color: #0d1116;
		overflow: scroll;
		text-align: center;
	}

	.container {
		height: 100%;
		background-color: #0d1116;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.header-container {
		padding-top: 30px;
	}

	.header {
		margin: 0;
		font-size: 50px;
		font-weight: bold;
		color: white;
	}

	.sub-text {
		font-size: 25px;
		color: white;
	}

	.content-container {
		background-color: #a200d6;
	}

	.cta-button {
		height: 45px;
		border: 0;
		width: auto;
		padding-left: 40px;
		padding-right: 40px;
		border-radius: 5px;
		cursor: pointer;
		font-size: 16px;
		font-weight: bold;
		color: white;
	}

	.connect-wallet-container {
		display: flex;
		flex-direction: column;
		margin: auto;
		max-width: 550px;
	}

	.connect-wallet-container img {
		padding-bottom: 20px;
	}

	.connect-wallet-button {
		background-image: linear-gradient(
			to right,
			#ff8177 0%,
			#ff867a 0%,
			#ff8c7f 21%,
			#f99185 52%,
			#cf556c 78%,
			#b12a5b 100%
		);
		background-size: 200% 200%;
		animation: gradient-animation 4s ease infinite;
	}

	.mint-button {
		background: -webkit-linear-gradient(left, #a200d6, #ff6fdf);
		background-size: 200% 200%;
		animation: gradient-animation 4s ease infinite;
		margin-right: 15px;
	}

	.opensea-button {
		background-color: rgb(32, 129, 226);
	}

	.mint-count {
		color: white;
		font-size: 18px;
		font-weight: bold;
	}

	.footer-container {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-bottom: 30px;
	}

	.footer-text {
		color: white;
		font-size: 16px;
		font-weight: bold;
	}

	/* KeyFrames */
	@-webkit-keyframes gradient-animation {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
	@-moz-keyframes gradient-animation {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
	@keyframes gradient-animation {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
	// /BOILERPLATE


`;

export default GlobalStyle;
