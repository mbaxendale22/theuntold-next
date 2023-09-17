import { INSTAGRAM_URL, MEDIUM_URL, TWITTER_URL } from '@/app/utils/globals'
import styles from './socialLinks.module.css'

export default function SocialMediaLinks() {
    return (
        <div className={styles.container}>
            <a href={TWITTER_URL} target="_blank">
                <svg
                    version="1.1"
                    baseProfile="basic"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 48 48"
                    xmlSpace="preserve"
                    width="32px"
                    height="32px"
                >
                    <path
                        style={{
                            fillRule: 'evenodd',
                            clipRule: 'evenodd',
                            fill: '#212121',
                        }}
                        d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28
	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z"
                    />
                    <g>
                        <path
                            style={{ fill: '#FFFFFF' }}
                            d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563
                            L28.587,32.304z"
                        />
                        <polygon
                            style={{ fill: '#FFFFFF' }}
                            points="15.866,34 23.069,25.656 22.127,24.407 13.823,34 	"
                        />
                        <polygon
                            style={{ fill: '#FFFFFF' }}
                            points="24.45,21.721 25.355,23.01 33.136,14 31.136,14 	"
                        />
                    </g>
                </svg>
            </a>
            <a href={INSTAGRAM_URL} target="_blank">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 50 50"
                    width="32px"
                    height="32px"
                >
                    <path
                        style={{
                            fill: 'none',
                            stroke: '#000000',
                            strokeWidth: '2',
                            strokeMiterlimit: '10',
                        }}
                        d="M16,46h18c6.627,0,12-5.373,12-12V16c0-6.627-5.373-12-12-12H16C9.373,4,4,9.373,4,16v18C4,40.627,9.373,46,16,46z"
                    />
                    <circle
                        style={{
                            fill: 'none',
                            stroke: '#000000',
                            strokeWidth: '2',
                            strokeMiterlimit: '10',
                        }}
                        cx="25"
                        cy="25"
                        r="10"
                    />
                    <circle cx="37" cy="13" r="2" />
                </svg>
            </a>

            <a href={MEDIUM_URL} target="_blank">
                <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 48 48"
                    className={styles.medium}
                    xmlSpace="preserve"
                    width="32px"
                    height="32px"
                >
                    <circle
                        style={{ fill: '#424242' }}
                        cx="14"
                        cy="24"
                        r="12"
                    />
                    <ellipse
                        style={{ fill: '#424242' }}
                        cx="34"
                        cy="24"
                        rx="6"
                        ry="11"
                    />
                    <ellipse
                        style={{ fill: '#424242' }}
                        cx="44"
                        cy="24"
                        rx="2"
                        ry="10"
                    />
                </svg>
            </a>
        </div>
    )
}
