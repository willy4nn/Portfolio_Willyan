/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        // Minor Second
        'h1-minor-second': ['1.382rem', { lineHeight: '22.08px' }],
        'h2-minor-second': ['1.295rem', { lineHeight: '20.08px' }],
        'h3-minor-second': ['1.214rem', { lineHeight: '19.36px' }],
        'h4-minor-second': ['1.138rem', { lineHeight: '18.24px' }],
        'h5-minor-second': ['1.067rem', { lineHeight: '17.12px' }],
        'small-minor-second': ['0.937rem', { lineHeight: '15.04px' }],

        // Major Second
        'h1-major-second': ['1.802rem', { lineHeight: '28.8px' }],
        'h2-major-second': ['1.602rem', { lineHeight: '25.6px' }],
        'h3-major-second': ['1.424rem', { lineHeight: '22.72px' }],
        'h4-major-second': ['1.266rem', { lineHeight: '20.32px' }],
        'h5-major-second': ['1.125rem', { lineHeight: '18.08px' }],
        'small-major-second': ['0.889rem', { lineHeight: '14.24px' }],

        // Minor Third
        'h1-minor-third': ['2.489rem', { lineHeight: '39.84px' }],
        'h2-minor-third': ['2.074rem', { lineHeight: '33.12px' }],
        'h3-minor-third': ['1.728rem', { lineHeight: '27.68px' }],
        'h4-minor-third': ['1.440rem', { lineHeight: '23.04px' }],
        'h5-minor-third': ['1.200rem', { lineHeight: '19.2px' }],
        'small-minor-third': ['0.833rem', { lineHeight: '13.28px' }],

        // Major Third
        'h1-major-third': ['3.053rem', { lineHeight: '48.8px' }],
        'h2-major-third': ['2.442rem', { lineHeight: '39.04px' }],
        'h3-major-third': ['1.954rem', { lineHeight: '31.2px' }],
        'h4-major-third': ['1.563rem', { lineHeight: '24.96px' }],
        'h5-major-third': ['1.250rem', { lineHeight: '20px' }],
        'small-major-third': ['0.800rem', { lineHeight: '12.8px' }],

        // Perfect Fourth
        'h1-perfect-fourth': ['4.210rem', { lineHeight: '67.36px' }],
        'h2-perfect-fourth': ['3.158rem', { lineHeight: '50.56px' }],
        'h3-perfect-fourth': ['2.369rem', { lineHeight: '37.92px' }],
        'h4-perfect-fourth': ['1.777rem', { lineHeight: '28.48px' }],
        'h5-perfect-fourth': ['1.333rem', { lineHeight: '21.28px' }],
        'small-perfect-fourth': ['0.750rem', { lineHeight: '12px' }],

        // Augmented Fourth
        'h1-augmented-fourth': ['5.652rem', { lineHeight: '90.4px' }],
        'h2-augmented-fourth': ['3.997rem', { lineHeight: '64px' }],
        'h3-augmented-fourth': ['2.827rem', { lineHeight: '45.28px' }],
        'h4-augmented-fourth': ['1.999rem', { lineHeight: '32px' }],
        'h5-augmented-fourth': ['1.414rem', { lineHeight: '22.56px' }],
        'small-augmented-fourth': ['0.707rem', { lineHeight: '11.36px' }],

        // Perfect Fifth
        'h1-perfect-fifth': ['7.595rem', { lineHeight: '121.44px' }],
        'h2-perfect-fifth': ['5.063rem', { lineHeight: '80.96px' }],
        'h3-perfect-fifth': ['3.375rem', { lineHeight: '54.08px' }],
        'h4-perfect-fifth': ['2.250rem', { lineHeight: '36px' }],
        'h5-perfect-fifth': ['1.500rem', { lineHeight: '24px' }],
        'small-perfect-fifth': ['0.667rem', { lineHeight: '10.72px' }],

        // Golden Ratio
        'h1-golden-ratio': ['11.090rem', { lineHeight: '177.44px' }],
        'h2-golden-ratio': ['6.854rem', { lineHeight: '109.6px' }],
        'h3-golden-ratio': ['4.236rem', { lineHeight: '67.84px' }],
        'h4-golden-ratio': ['2.618rem', { lineHeight: '41.92px' }],
        'h5-golden-ratio': ['1.618rem', { lineHeight: '25.92px' }],
        'small-golden-ratio': ['0.618rem', { lineHeight: '9.92px' }],

        // Button
        button: ['1rem', { lineHeight: '24px' }],

        // Body
        body: ['1rem', { lineHeight: '24px' }],
      },
    },
    colors: {
      background: {
        0: '#f2f2f2',
        10: '#e6e6e6',
        20: '#cccccc',
        30: '#b3b3b3',
        40: '#999999',
        50: '#808080',
        60: '#666666',
        70: '#4d4d4d',
        80: '#333333',
        90: '#1a1a1a',
        100: '#0d0d0d',
      },
      primary: {
        0: '#392328',
        10: '#F5EFF1',
        20: '#ECDFE2',
        30: '#E2D0D4',
        40: '#D8C0C5',
        50: '#CFB0B7',
        60: '#C5A0A9',
        70: '#BB909A',
        80: '#B1818C',
        90: '#A8717E',
        100: '#9E616F',
        110: '#8E5764',
        120: '#7E4E59',
        130: '#6F444E',
        140: '#5F3A43',
        150: '#4F3038',
        160: '#3F272C',
        170: '#2F1D21',
        180: '#201316',
        190: '#100A0B',
      },
      highlight: {
        0: '#C5C7B2',
        10: '#EEEEED',
        20: '#E9EAE1',
        30: '#DEDFD3',
        40: '#D3D4C4',
        50: '#C7C9B5',
        60: '#BCBFA6',
        70: '#B1B497',
        80: '#A6A989',
        90: '#9B9F7A',
        100: '#90946B',
        110: '#818560',
        120: '#737656',
        130: '#65684B',
        140: '#565940',
        150: '#484A36',
        160: '#3A3B2B',
        170: '#2B2C20',
        180: '#1D1E15',
        190: '#0E0F0B',
      },
      text: {
        0: '#030317',
        10: '#05052e',
        20: '#0b0b5b',
        30: '#101089',
        40: '#1515b7',
        50: '#1b1be4',
        60: '#4848ea',
        70: '#7676ef',
        80: '#a4a4f4',
        90: '#d1d1fa',
        100: '#e8e8fc',
      },
    },
    fontFamily: {
      body: ['Space Mono'],
      title: ['Yanone Kaffeesatz'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px',
    },
  },
  plugins: [],
};
