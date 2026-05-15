/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: ['./src/**/*.{astro,html,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FBF7F4',
        'bg-secondary': '#F4ECE5',
        fg: '#3D3530',
        muted: '#7A6A5E',
        accent: '#C8826B',
        accent2: '#A26A57',
        border: '#E8DCD2',
        hover: '#F0E4DA',
      },
      fontFamily: {
        heading: ["'Gowun Batang', serif", 'system-ui', 'sans-serif'],
        body: ["'Gowun Dodum', sans-serif", 'system-ui', 'sans-serif'],
        mono: ['ui-monospace, monospace', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '720px',
        wide: '1100px',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': '#3D3530',
            '--tw-prose-headings': '#3D3530',
            '--tw-prose-links': '#C8826B',
            '--tw-prose-bold': '#C8826B',
            '--tw-prose-quotes': '#7A6A5E',
            '--tw-prose-quote-borders': '#C8826B',
            '--tw-prose-code': '#C8826B',
            '--tw-prose-borders': '#E8DCD2',
            maxWidth: '720px',
            fontSize: '1.05rem',
            lineHeight: '1.85',
            'h1, h2, h3, h4': {
              fontFamily: 'var(--font-heading)',
              fontWeight: '700',
              letterSpacing: '-0.01em',
            },
            h2: {
              borderBottom: '1px solid #E8DCD2',
              paddingBottom: '0.5rem',
              marginTop: '3rem',
            },
            blockquote: {
              background: '#F0E4DA',
              borderRadius: '0 8px 8px 0',
              padding: '0.8rem 1.2rem',
              fontStyle: 'italic',
            },
            img: {
              borderRadius: '12px',
              boxShadow: '0 6px 24px rgba(0,0,0,0.12)',
              margin: '2rem auto',
            },
            code: {
              background: '#F0E4DA',
              padding: '0.15rem 0.45rem',
              borderRadius: '4px',
              border: '1px solid #E8DCD2',
              fontWeight: '500',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
