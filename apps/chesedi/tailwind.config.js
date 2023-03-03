/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  exposeConfig: true,
  content: [
    `@/components/**/*.{vue,js,ts}`,
    `@/layouts/**/*.vue`,
    `@/pages/**/*.vue`,
    `@/composables/**/*.{js,ts}`,
    `@/plugins/**/*.{js,ts}`,
    `@/App.{js,ts,vue}`,
    `@/app.{js,ts,vue}`,
    `@/Error.{js,ts,vue}`,
    `@/error.{js,ts,vue}`,
  ],
  darkMode: 'class',
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active'],
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
