module.exports = {
    theme: {
        extend: {
            screens: {
                'sm': '640px',
                // => @media (min-width: 640px) { ... }

                'md': '768px',
                // => @media (min-width: 768px) { ... }

                'lg': '1024px',
                // => @media (min-width: 1024px) { ... }

                'xl': '1280px',
                // => @media (min-width: 1280px) { ... }

                '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }
            },
            colors: {
                about: {
                    nft: '#000000'
                },
                home: {
                    logo: '#ffff'
                },
                button: {
                    btn: '#DEFF06'
                },
                border: {
                    bd: 'linear-gradient(161.49deg, #FFD200 14.55%)'
                },
                button2: {
                    btn2: '#F5A623'
                },
                footer: {
                    ft: '#342C2C'
                },
                btn: {
                    sign: '#C4E538'
                },
                link: {
                    text: '#A3CB38'
                  },
                backgroundImage: {
                    'home-bg': "linear-gradient(161.49deg, #FFD200 14.55%, rgba(247, 151, 30, 0.983214) 91.73%)",
                    'btn-img': "url('./images/footer1.png')",
                    'img-bg': "url('./images/footer2.png')",
                    'img': "url('./images/footer.png')",
                }
            }
        },
        plugins: [],
    }
}