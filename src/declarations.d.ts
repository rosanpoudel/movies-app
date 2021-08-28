// for importing png and svg in typescript files
declare module '*.png'
declare module '*.svg' {
  const content: string
  export default content
}
declare module 'styled-components'
