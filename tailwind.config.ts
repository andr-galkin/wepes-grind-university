import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'wgu-grey': '#BDBBBB',
            },
            gridTemplateColumns: {
                '25/100/25': '25% 1fr 25%',
            },
            fontSize: {
                // H1 (XS, SM-MD (from small to medium), LG, XL, UL)
                'h1-xs': ['clamp(2rem, 1vw + 2rem, 2.5rem)', '125%'],
                'h1-sm-md': ['clamp(2.5rem, 2.35vw + 1.6rem, 3.5rem)', '125%'],
                'h1-lg': ['clamp(3.5rem, 5vw - 0.5rem, 4rem)', '112.5%'],
                'h1-xl': ['clamp(4rem, 4.4vw, 8rem)', '112.5%'],
                'h1-ul': ['8rem', '112.5%'],
                // H2 (XS, SM, MD, LG, XL, UL)
                'h2-xs': ['clamp(2rem, 1vw + 2rem, 2.5rem)', '125%'],
                'h2-sm': ['clamp(2.5rem, 2.35vw + 1.6rem, 3.5rem)', '125%'],
                'h2-md': ['clamp(2.25rem, 3.20vw + 0.45rem, 3rem)', '125%'],
                'h2-lg': [
                    'clamp(2.625rem, 3.75vw - 0.375rem, 3rem)',
                    '116.667%',
                ],
                'h2-xl': ['clamp(3rem, 3.34vw, 6rem)', '116.667%'],
                'h2-ul': ['6rem', '116.667%'],
                // H3 (XS, SM, MD, LG, XL, UL)
                'h3-xs': [
                    'clamp(1.5rem, 0.66vw + 1.5rem, 1.75rem)',
                    '133.333%',
                ],
                'h3-sm': ['clamp(1.75rem, 1.3vw + 1.25rem, 2rem)', '133.333%'],
                'h3-md': ['clamp(1.5rem, 1vw + 0.8rem, 1.75rem)', '133.333%'],
                'h3-lg': ['clamp(1.75rem, 2.5vw - 0.25rem, 2rem)', '125%'],
                'h3-xl': ['clamp(2rem, 2.22vw, 4rem)', '125%'],
                'h3-ul': ['4rem', '125%'],
                // H4 (XS, SM, MD, LG, XL, UL)
                'h4-xs': ['1.25rem', '140%'],
                'h4-sm': ['clamp(1.25rem, 1.3vw + 0.75rem, 1.5rem)', '140%'],
                'h4-md': ['clamp(1.25rem, 1vw + 0.64rem, 1.5rem)', '140%'],
                'h4-lg': ['1.5rem', '140%'],
                'h4-xl': ['clamp(1.5rem, 1.66vw, 3rem)', '133.333%'],
                'h4-ul': ['3rem', '133.333%'],
                // H5 (XS, SM, MD, LG, XL, UL)
                'h5-xs': ['1rem', '150%'],
                'h5-sm': ['clamp(1rem, 1.3vw + 0.5rem, 1.25rem)', '150%'],
                'h5-md': ['1rem', '150%'],
                'h5-lg': ['1.25rem', '157.143%'],
                'h5-xl': ['clamp(1.25rem, 1.38vw, 2.5rem)', '157.143%'],
                'h5-ul': ['2.5rem', '157.143%'],
                // H6 (XS, SM, MD, LG, XL, UL)
                'h6-xs': ['0.875rem', '157.143%'],
                'h6-sm': [
                    'clamp(0.875rem, 0.65vw + 0.62rem, 1rem)',
                    '157.143%',
                ],
                'h6-md': ['0.875rem', '157.143%'],
                'h6-lg': ['1rem', '150%'],
                'h6-xl': ['clamp(1rem, 1.11vw, 2rem)', '150%'],
                'h6-ul': ['2rem', '150%'],
            },
            screens: {
                xs: { max: '599px' },
                sm: { min: '600px', max: '904px' },
                md: { min: '905px', max: '1279px' },
                lg: { min: '1280px', max: '1440px' },
                xl: { min: '1441px', max: '2879px' },
                ul: { min: '2880px' },
            },
            fontFamily: {
                ballet: ['"Ballet"', 'cursive'],
            },
        },
    },
    plugins: [],
}
export default config
