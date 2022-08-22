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
    background6Tertiary?: string
    background7Tertiary?: string
    backgroundOpaque1?: string
    backgroundOpaque2?: string
    backgroundBlur1?: string
    backgroundBlur2?: string
    success1?: string
    success2?: string
    warning1?: string
    warning2?: string
    danger1?: string
    danger2?: string
    info1?: string
    info2?: string
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
    background1Secondary: '#f4a261;',
    background2Secondary: '#2a9d8f;',
    background3Secondary: '#e9c46a;',
    background4Secondary: '#264653;',
    background5Secondary: '#e76f51;',
    background1Tertiary: '#54bea8;',
    background2Tertiary: '#DB3EB1;',
    background3Tertiary: '#4634b9;',
    background4Tertiary: '#e5d758;',
    background5Tertiary: '#FFAD00;',
    background6Tertiary: '#E0E722;',
    background7Tertiary: '#C724B1;',
    backgroundOpaque1: 'rgba( 109, 108, 112, 0.1 );',
    backgroundOpaque2: 'rgba( 29, 53, 87, 0.4 );',
    backgroundBlur1: 'rgba(60, 59, 61, 0.65);',
    backgroundBlur2: 'rgba( 29, 53, 87, 0.4 );',
    success1: '#A1F8B4;',
    success2: '#C8FB91;',
    warning1: '#ca6702;',
    warning2: '#ee9b00;',
    // warning2:
    // info1:
    // info2:
    danger1: '#D22730;'
    // danger2:

}
// backgroundNeon5: '#54bea8;', 1
// backgroundNeon6: '#DB3EB1;   2
// backgroundNeon1: '#4634b9;', 3
// backgroundNeon4: '#e5d758;', 4
// backgroundNeon8: '#FFAD00;', 5
// backgroundNeon9: '#E0E722;', 6
// backgroundNeon11: '#C724B1;', 7

// blue: #3a86ff;
// grey: #d3d3d3;
// green: #02c39a;
// lightBlue: #00a5cf;
// orange: #eb5e28;
// red: #e63946;

const secondaryStyle: GlobalStyle = {
    background1Main: '#F7F6F2;',
    background2Main: '#EBFBFF;',
    background3Main: '#009DF8;',
    background4Main: '#3B5367;',
    background5Main: '#343a40;',
    // background1Main: '#F7F6F2;',
    // background2Main: '#C8C6C6;',
    // background3Main: '#F0E5CF;',
    // background4Main: '#212529;',
    // background5Main: '#343a40;',
    // background4Main: '#4B6587;',
    // background1Main: '#f8f9fa;',
    // background2Main: '#dee2e6;',
    // background3Main: '#adb5bd;',
    // background4Main: '#343a40;',
    // background5Main: '#212529;',
    background1Secondary: '#00a5cf;',
    // background2Secondary: '#2188A9;',
    background2Secondary: '#2188A9;',
    // background3Secondary: '#d3d3d3;',
    background3Secondary: '#d3d3d3;',
    background4Secondary: '#02c39a;',
    background5Secondary: '#eb5e28;',
    background1Tertiary: '#3a86ff;',
    background2Tertiary: '#766D9C;',
    background3Tertiary: '#8F6FA0;',
    background4Tertiary: '#A871A0;',
    background5Tertiary: '#C0739C;',
    backgroundOpaque1: 'rgba(240, 229, 207, 0.75);',
    backgroundOpaque2: 'rgba(240, 229, 207, 0.75);',
    backgroundBlur1: 'rgba( 200, 198, 198, 0.25 );',
    // backgroundBlur1: 'rgba( 0, 157, 248, 0.25 );',
    backgroundBlur2: 'rgba( 0, 157, 248, 0.55 );',
    // success1: '#02c39a;',
    success1: '#226f54;',
    // success2: '#02b875;',
    success2: '#058c42;',
    info1: '#3a86ff;',
    info2: '#00a5cf;',
    // warning1: '#eb5e28;',
    warning1: '#fca311;',
    danger1: '#e63946;',

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
        background6Tertiary: `${style.background6Tertiary}`,
        background7Tertiary: `${style.background7Tertiary}`,

        backgroundOpaque1: `${style.backgroundOpaque1}`,
        backgroundOpaque2: `${style.backgroundOpaque2}`,

        backgroundBlur1: `${style.backgroundBlur1}`,
        backgroundBlur2: `${style.backgroundBlur2}`,
        success1: `${style.success1}`,
        success2: `${style.success2}`,
        info1: `${style.info1}`,
        info2: `${style.info2}`,
        warning1: `${style.warning1}`,
        warning2: `${style.warning2}`,
        danger1: `${style.danger1}`,
        danger2: `${style.danger2}`,

    }
}



