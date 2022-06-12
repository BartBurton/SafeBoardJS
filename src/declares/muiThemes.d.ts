import '@mui/material/styles'

declare module '@mui/material/styles' {
    export interface Theme {
        header?: {
            background: string;
            text: {
                primary: string;
                secondary: string;
            },
            primary: string;
            secondary: string;
        };
    }
    export interface ThemeOptions {
        header?: {
            background: string;
            text: {
                primary: string;
                secondary: string;
            },
            primary: string;
            secondary: string;
        };
    }
}
