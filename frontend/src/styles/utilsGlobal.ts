interface GlobalStyle {
    background1Main: string
    background2Main: string
    background3Main: string
    background4Main: string
    background5Main: string
    background1Secondary?: string
    background2Secondary?: string
    background3Secondary?: string
    background4Secondary?: string
    background5Secondary?: string
    background1Tertiary?: string
    background2Tertiary?: string
    background3Tertiary?: string
    background4Tertiary?: string
    background5Tertiary?: string
}


const defaultStyle: GlobalStyle = {
    background1Main: '#1E1E1F;',
    background2Main: '#3C3B3D;',
    background3Main: '#6D6C70;',
    background4Main: '#A2A1A6;',
    background5Main: '#CBC9CF;',
    background1Secondary: '#264653;',
    background2Secondary: '#2a9d8f;',
    background3Secondary: '#e9c46a;',
    background4Secondary: '#f4a261;',
    background5Secondary: '#e76f51;',
    background1Tertiary: '#1d3557;',
    background2Tertiary: '#457b9d;',
    background3Tertiary: '#a8dadc;',
    background4Tertiary: '#f1faee;',
    background5Tertiary: '#e63946;',
}
const primaryStyle: GlobalStyle = {
    background1Main: '#1E1E1F;',
    background2Main: '#3C3B3D;',
    background3Main: '#6D6C70;',
    background4Main: '#A2A1A6;',
    background5Main: '#CBC9CF;',
    background1Secondary: '#264653;',
    background2Secondary: '#2a9d8f;',
    background3Secondary: '#e9c46a;',
    background4Secondary: '#f4a261;',
    background5Secondary: '#e76f51;',
    background1Tertiary: '#1d3557;',
    background2Tertiary: '#457b9d;',
    background3Tertiary: '#a8dadc;',
    background4Tertiary: '#f1faee;',
    background5Tertiary: '#e63946;',
}


const secondaryStyle: GlobalStyle = {
    background1Main: '#f8f9fa;',
    background2Main: '#dee2e6;',
    background3Main: '#adb5bd;',
    background4Main: '#343a40;',
    background5Main: '#212529;',
    background1Secondary: '#F3CED0;',
    background2Secondary: '#23857A;',
    background3Secondary: '#8CAFCE',
    background4Secondary: '#7FD1AE;',
    background5Secondary: '#FFD381;',
    background1Tertiary: '#1d3557;',
    background2Tertiary: '#457b9d;',
    background3Tertiary: '#a8dadc;',
    background4Tertiary: '#f1faee;',
    background5Tertiary: '#e63946;',
}
const tertiaryStyle: GlobalStyle = {
    background1Main: '#264653;',
    // background2Main: '#2a9d8f;',
    background2Main: '#344B47;',
    background3Main: '#f4a261;',
    background4Main: '#e76f51;',
    background5Main: '#e9c46a;',
    background1Secondary: '#B37AAC;',
    background2Secondary: '#7D4977;',
    background3Secondary: '#96B1AC;',
    background4Secondary: '#00AA94;',
    background5Secondary: '#9A8E3A;',
    background1Tertiary: '#1d3557;',
    background2Tertiary: '#457b9d;',
    background3Tertiary: '#a8dadc;',
    background4Tertiary: '#f1faee;',
    background5Tertiary: '#e63946;',
}
const quaternaryStyle: GlobalStyle = {
    background1Main: '#540d6e;',
    background2Main: '#ee4266;',
    background3Main: '#3bceac;',
    background4Main: '#0ead69;',
    background5Main: '#ffd23f;',
    background1Secondary: '#A1136A;',
    background2Secondary: '#D7425D;',
    background3Secondary: '#F77C4F;',
    background4Secondary: '#FFBA4F;',
    background5Secondary: '#F9F871;',
    background1Tertiary: '#1d3557;',
    background2Tertiary: '#457b9d;',
    background3Tertiary: '#a8dadc;',
    background4Tertiary: '#f1faee;',
    background5Tertiary: '#e63946;',
}
//?  senary, septenary, octonary, nonary, and denary 
const quinaryStyle: GlobalStyle = {
    background1Main: '#344e41;',
    background2Main: '#3a5a40;',
    background3Main: '#588157;',
    background4Main: '#a3b18a;',
    background5Main: '#dad7cd;',
    background1Secondary: '#f4f1de;',
    background2Secondary: '#e07a5f;',
    // background3Secondary: '#3d405b;',
    background3Secondary: '#BB5A41;',
    background4Secondary: '#81b29a;',
    background5Secondary: '#F9F871;',
    background1Tertiary: '#1d3557;',
    background2Tertiary: '#457b9d;',
    background3Tertiary: '#a8dadc;',
    background4Tertiary: '#f1faee;',
    background5Tertiary: '#e63946;',
}
export const handleGlobalScheme: (props: any) => {} = (props: any) => {
    let style

    switch (props) {
        case 'primary':
            style = primaryStyle
            break;
        case 'secondary':
            style = secondaryStyle
            break;
        case 'tertiary':
            style = tertiaryStyle
            break;
        case 'quaternary':
            style = quaternaryStyle
            break;
        case 'quinary':
            style = quinaryStyle
            break;

        default:
            style = defaultStyle
            break;

    }
    return {

        // background1Main: `--background1-main: ${style.background1Main}`,
        background1Main: `${style.background1Main}`,
        background2Main: `${style.background2Main}`,
        background3Main: `${style.background3Main}`,
        background4Main: `${style.background4Main}`,
        background5Main: `${style.background5Main}`,
        background1Secondary: `${style.background1Secondary}`,
        background2Secondary: `${style.background2Secondary}`,
        background3Secondary: `${style.background3Secondary}`,
        background4Secondary: `${style.background4Secondary}`,
        background5Secondary: `${style.background5Secondary}`,
        background1Tertiary: `${style.background1Tertiary}`,
        background2Tertiary: `${style.background2Tertiary}`,
        background3Tertiary: `${style.background3Tertiary}`,
        background4Tertiary: `${style.background4Tertiary}`,
        background5Tertiary: `${style.background5Tertiary}`,


    }
}



