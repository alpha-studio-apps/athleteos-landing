/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base:'#070707',secondary:'#0B0B0B',card:'#111111','card-alt':'#161616',
        border:'#262626','text-primary':'#F5F5F5','text-secondary':'#A3A3A3',
        'text-muted':'#737373',gold:'#C9A646',green:'#22C55E'
      },
      fontFamily:{sans:['Inter','sans-serif']},
    },
  },
  plugins:[],
}
