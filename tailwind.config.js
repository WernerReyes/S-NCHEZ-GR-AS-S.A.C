/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#001a43",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#facc15",
          foreground: "#000000",
        },
        tertiary: {
          DEFAULT: "#AC2828",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
}


// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     screens: {
//       'sm': '640px',
//       'md': '768px',
//       'lg': '1024px',
//       'xl': '1280px',
//       "2xl": "1536px",
//       "3xl": "1920px",
//     },
//     keyframes: {
//       'float': {
//         '0%, 100%': { transform: 'translateY(0)' },
//         '50%': { transform: 'translateY(-5%)' },
//       },

//       'bounce': {
//         '0%, 80%, 100%': {
//           transform: 'translateY(0)',
//           animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
//         },

//         '40%': {
//           transform: 'translateY(-10px)',
//           animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
//         }
//       }
//     },
//     animation: {
//       'float': 'float 3s ease-in-out infinite',
//       'bounce1': 'bounce 1.4s infinite ease-in-out both',
//       'bounce2': 'bounce 1.4s infinite ease-in-out both -0.16s',
//       'bounce3': 'bounce 1.4s infinite ease-in-out both -0.32s',

//     },
//     dropShadow: {
//       'secondary': '0 5px 150px #facc15',
//       // 'primary-dark': '0 5px 105px #FDCE71'
//     },
//     extend: {
//       colors: {
//         "primary": "#001a43",
//         "secondary": "#facc15",
//         blue: {
//           400: '#60A5FA',
//           600: '#2563EB',
//           700: '#1D4ED8',
//         },
//         orange: {
//           400: '#FB923C',
//           500: '#F97316',
//           600: '#EA580C',
//         },
//       },
//     },
//   },
//   plugins: [],
// };