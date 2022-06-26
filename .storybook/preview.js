import GlobalStyles from "../src/styles/global"

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     // expanded: true,
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/
//     }
//   }
// }
