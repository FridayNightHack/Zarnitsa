import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*, *::before, *::after {
    box-sizing: border-box;
    margin:0;
    padding: 0;
} 

:root {
    --container-medium: 1500px;
    --container-padding: 16px;
}

html,
body {
        color: #333;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        height:100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
        sc
         @media (max-width:30em) {
        overflow-x: auto;
    }
    
    }
   

    #root {
        height: 100%;
        position: relative;
    }

    .container-medium {
        max-width: calc(var(--container-medium) - var(--container-padding) * 2);
        margin-inline: auto;
        position: relative;
    }

    li {
        list-style: none;
    }
    button {
        cursor: pointer;
    }

    .visually-hidden {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    margin: -1px !important;
    border: 0 !important;
    padding: 0 !important;
    white-space: nowrap !important;
    clip-path: inset(100%) !important;
    clip: rect(0 0 0 0) !important;
    overflow: hidden !important;
}


`;
