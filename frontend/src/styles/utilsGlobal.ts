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
  danger3?: string
  info1?: string
  info2?: string
  info3?: string
  boxShadow1?: string
  boxShadow2?: string
  boxShadow3?: string
  boxShadow4?: string
  boxShadow5?: string
  boxShadowInset1?: string
  boxShadowInset2?: string
  boxShadowInset3?: string
  boxShadowInset4?: string
  boxShadowInset5?: string
  boxShadowNone?: string
  boxShadowClay1?: string
  boxShadowClay2?: string
  boxShadowClay3?: string
  boxShadowClay4?: string
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
  background5Tertiary: '#e63946;'
}
const primaryStyle: GlobalStyle = {
  background1Main: 'hsl(240, 2%, 12%);',
  background2Main: '#7D7C7F;',
  background3Main: '#6D6C70;',
  background4Main: '#A2A1A6;',
  background5Main: '#CBC9CF;',
  background1Secondary: '#2a9d8f;',
  background2Secondary: '#f4a261;',
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
  backgroundBlur2: 'rgba(60, 59, 61, 0.75);',
  success1: '#009670;',
  success2: '#00bc8c;',

  warning1: '#ca6702;',
  warning2: '#ee9b00;',
  danger1: '#B8001F;',
  danger2: '#D22730;',
  danger3: '#FC5970;',
  info1: '#CEF6FF;',
  info2: '#3AAEE9;',
  info3: '#00CBED;',
  boxShadow1:
    'inset 0px 0px 0px #161617, inset 0px 0px 0px #262627, -4px 4px 6px #151515, 0px -0px 0px #272729;',
  boxShadow2:
    'inset 0px 0px 0px #161617, inset 0px 0px 0px #262627, -5px 5px 10px #151515, 3px -3px 10px #272729;',

  boxShadow3:
    'inset 0px 0px 0px #161617, inset 0px 0px 0px #262627, -27px 27px 54px #151515, 1px -1px 2px #272729;',
  boxShadow4:
    'inset 0px 0px 0px #161617, inset 0px 0px 0px #262627, -41px 41px 82px #151515, 1px -1px 2px #272729;',
  boxShadow5:
    'inset 0px 0px 0px #161617, inset 0px 0px 0px #262627, -1px 1px 3px var(--background-blur1), 1px -1px 2px #272729;',

  boxShadowInset1:
    'inset -3px 3px 5px #161617, inset 3px -3px 5px #262627, 0px 0px 0px #272729, 0px 0px 0px #272729;',
  boxShadowInset2:
    'inset -5px 5px 10px #161617, inset 5px -5px 10px #262627, 0px 0px 0px #272729, 0px 0px 0px #272729;',

  boxShadowInset4: 'inset -1px 1px 2px #131314, inset 1px -1px 2px #29292a;',

  boxShadowInset3: 'inset -5px 5px 10px #161617, inset 5px -5px 10px #262627;',

  boxShadowInset5: 'inset -5px 5px 10px #8d8c8a, inset 5px -5px 10px #ffffff;',

  boxShadowNone:
    'inset 0px 0px 0px #161617, inset 0px 0px 0px #262627, 0px 0px 0px #262627, 0px 0px 0px #262627;',
  boxShadowClay1:
    'inset 0.3em -0.3em 0.6em #151515, inset -0.2em 0.3em 0.8em hsl(240, 2%, 22%), -0.2em 0.2em 0.3em #151515;',
  boxShadowClay2:
    'inset 0.3em -0.3em 0.6em #151515, inset -0.1em 0.2em 0.6em hsl(240, 2%, 22%), -0.9em 0.9em 0.4em #151515;',
  boxShadowClay3:
    'inset 0.15em -0.15em 0.3em #151515, inset -0.05em 0.08em 0.3em hsl(240, 2%, 22%), -0.051em 0.051em 0.2em #151515;',
  boxShadowClay4:
    'inset 0.25em -0.45em 1.9em #151515, inset 0.475em 0.475em 0.45em hsl(240, 2%, 22%), -0.43em 0.43em 4.95em #151515;'
}

const secondaryStyle: GlobalStyle = {
  background1Main: 'hsl(48, 24%, 96%);',
  background2Main: '#C0BFBC;',
  background3Main: '#758C89;',
  background4Main: '#3B5367;',
  background5Main: '#343a40;',
  background1Secondary: '#2188A9;',
  // background1Secondary: '#968AF9;',
  // background2Secondary: '#00a5cf;',
  background2Secondary: '#F17EE1;',
  background3Secondary: '#007560;',
  background4Secondary: '#02c39a;',
  background5Secondary: '#eb5e28;',
  background1Tertiary: '#3a86ff;',
  background2Tertiary: '#766D9C;',
  background3Tertiary: '#8F6FA0;',
  background4Tertiary: '#A871A0;',
  background5Tertiary: '#C0739C;',
  backgroundOpaque1: 'rgba(240, 229, 207, 0.15);',
  backgroundOpaque2: 'rgba(240, 229, 207, 0.75);',
  backgroundBlur1: 'rgba( 200, 198, 198, 0.25 );',
  backgroundBlur2: 'rgba( 200, 198, 198, 0.65 );',

  success1: '#02935e;',
  success2: '#02b875;',
  info1: '#3a86ff;',
  info2: '#00a5cf;',
  info3: '#12E5DD;',
  warning1: '#fca311;',
  danger1: '#FC5970;',
  danger2: '#E09990;',
  danger3: '#D22730;',

  boxShadow1:
    'inset 0px 0px 0px #d2d1ce, inset 0px 0px 0px #ffffff, -1px 2px 4px #a8a7a5, 1px -1px 1px #fffffe;',
  boxShadow2:
    'inset 0px 0px 0px #d2d1ce, inset 0px 0px 0px #ffffff, -3px 3px 7px #8d8c8a, 7px -7px 10px #ffffff;',
  boxShadow3: '-27px 27px 54px #a8a7a5, 27px -27px 54px #ffffff;',
  boxShadow4: '-41px 41px 82px #999996, -3px 3px 7px #8d8c8a;',

  boxShadow5:
    'inset 0px 0px 0px #161617, inset 0px 0px 0px #262627, -1px 1px 2px #d2d1ce, 1px -1px 1px #fffffe;',
  boxShadowInset1:
    'inset -2px 2px 4px #d2d1ce, inset 2px -2px 4px #ffffff, 0px 0px 0px #ebeae6, 0px 0px 0px #fffffe;',
  boxShadowInset2:
    'inset -5px 5px 10px #adaca9, inset 5px -5px 10px #ffffff, 0px 0px 0px #ebeae6, 0px 0px 0px #fffffe;',
  boxShadowInset3:
    'inset -11px 11px 22px #b7b6b3, inset 11px -11px 22px #ffffff, 0px 0px 0px #ebeae6, 0px 0px 0px #fffffe;',
  boxShadowInset4:
    'inset -1px 1px 2px #d2d1ce, inset 1px -1px 2px #ffffff, 0px 0px 0px #ebeae6, 0px 0px 0px #fffffe;',
  boxShadowInset5: 'inset -5px 5px 10px #d2d1ce, inset 5px -5px 10px #ffffff;',
  boxShadowNone:
    'inset 0px 0px 0px #b7b6b3, inset 0px 0px 0px #ffffff, 0px 0px 0px #ebeae6, 0px 0px 0px #fffffe;',

  boxShadowClay1:
    'inset 0.06em -0.06em 0.25em #a8a7a5, inset 0.2em 0.2em 0.4em hsl(228, 34%, 93%), -0.08em 0.08em 0.15em #8d8c8a;',
  boxShadowClay2:
    'inset 0.05em -0.05em 0.2em #a8a7a5, inset 0.15em 0.15em 0.3em hsl(228, 34%, 93%), -0.06em 0.06em 0.1em #8d8c8a;',
  boxShadowClay3:
    'inset 0.025em -0.05em 0.1em #a8a7a5, inset 0.075em 0.075em 0.15em hsl(228, 34%, 93%), -0.03em 0.03em 0.05em #8d8c8a;',
  boxShadowClay4:
    'inset 0.425em -0.45em 0.9em #a8a7a5, inset 0.475em 0.475em 0.45em hsl(228, 34%, 93%), -3.43em 3.43em 3.45em #8d8c8a;'
}
const tertiaryStyle: GlobalStyle = {
  background1Main: '#264653;',
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
  boxShadow1: '-5px 5px 10px #151515, 3px -3px 10px #272729;',
  boxShadow2: '-11px 11px 22px #151515, 4px -5px 22px #272729;',
  boxShadow3: '-27px 27px 54px #151515, 27px -27px 54px #272729;',
  boxShadow4: '-41px 41px 82px #151515, 41px -41px 82px #272729;',
  boxShadow5: ' -50px 50px 100px #151515, 50px -50px 100px #272729;',
  boxShadowInset1: 'inset -5px 5px 10px #19191a, inset 5px -5px 10px #232324;',

  boxShadowInset2:
    ' inset -10px 10px 20px #161617, inset 10px -10px 20px #262627;',
  boxShadowInset3: 'inset -5px 5px 10px #161617, inset 5px -5px 10px #262627;',
  boxShadowInset4: 'inset -5px 5px 10px #161617, inset 5px -5px 10px #262627;',
  boxShadowInset5: 'inset -5px 5px 10px #8d8c8a, inset 5px -5px 10px #ffffff;'
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
  boxShadowInset5: 'inset -5px 5px 10px #19191a, inset 5px -5px 10px #232324;',
  boxShadow1: '-5px 5px 10px #151515, 3px -3px 10px #272729;',
  boxShadow2: '-11px 11px 22px #151515, 4px -5px 22px #272729;',
  boxShadow3: '-27px 27px 54px #151515, 27px -27px 54px #272729;',
  boxShadow4: '-41px 41px 82px #151515, 41px -41px 82px #272729;',
  boxShadow5: '-50px 50px 100px #151515, 50px -50px 100px #272729;',
  boxShadowInset1: 'inset -5px 5px 10px #19191a, inset 5px -5px 10px #232324;',
  boxShadowInset2:
    'inset -10px 10px 20px #161617, inset 10px -10px 20px #262627;',
  boxShadowInset3: 'inset -5px 5px 10px #161617, inset 5px -5px 10px #262627;',
  boxShadowInset4: 'inset -5px 5px 10px #8d8c8a, inset 5px -5px 10px #ffffff;'
}
// boxShadowInset5: 'inset 20px 20px 60px #d9d9d9, inset -20px -20px 60px #ffffff;',
// boxShadowInset5: 'inset 20px 20px 60px #d9d9d9, inset -20px -20px 60px #ffffff;',
//?  senary, septenary, octonary, nonary, and denary
const quinaryStyle: GlobalStyle = {
  background1Main: '#344e41;',
  background2Main: '#3a5a40;',
  background3Main: '#588157;',
  background4Main: '#a3b18a;',
  background5Main: '#dad7cd;',
  background1Secondary: '#f4f1de;',
  background2Secondary: '#e07a5f;',

  background3Secondary: '#BB5A41;',
  background4Secondary: '#81b29a;',
  background5Secondary: '#F9F871;',
  background1Tertiary: '#1d3557;',
  background2Tertiary: '#457b9d;',
  background3Tertiary: '#a8dadc;',
  background4Tertiary: '#f1faee;',
  background5Tertiary: '#e63946;',
  boxShadow1: '-5px 5px 10px #151515, 3px -3px 10px #272729;',
  boxShadow2: '-11px 11px 22px #151515, 4px -5px 22px #272729;',
  boxShadow3: '-27px 27px 54px #151515, 27px -27px 54px #272729;',
  boxShadow4: '-41px 41px 82px #151515, 41px -41px 82px #272729;',
  boxShadow5: '-50px 50px 100px #151515, 50px -50px 100px #272729;',
  boxShadowInset1: 'inset -5px 5px 10px #19191a, inset 5px -5px 10px #232324;',

  boxShadowInset2:
    ' inset -10px 10px 20px #161617, inset 10px -10px 20px #262627;',
  boxShadowInset3: 'inset -5px 5px 10px #161617, inset 5px -5px 10px #262627;',
  boxShadowInset4: 'inset -5px 5px 10px #161617, inset 5px -5px 10px #262627;',
  boxShadowInset5: 'inset -5px 5px 10px #8d8c8a, inset 5px -5px 10px #ffffff;'
}
export const handleGlobalScheme: (props: any) => {} = (props: any) => {
  let style

  switch (props) {
    case 'primary':
      style = primaryStyle
      break
    case 'secondary':
      style = secondaryStyle
      break
    case 'tertiary':
      style = tertiaryStyle
      break
    case 'quaternary':
      style = quaternaryStyle
      break
    case 'quinary':
      style = quinaryStyle
      break

    default:
      style = defaultStyle
      break
  }
  return {
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
    info3: `${style.info3}`,

    warning1: `${style.warning1}`,
    warning2: `${style.warning2}`,

    danger1: `${style.danger1}`,
    danger2: `${style.danger2}`,
    danger3: `${style.danger3}`,

    boxShadow1: `${style.boxShadow1}`,
    boxShadow2: `${style.boxShadow2}`,
    boxShadow3: `${style.boxShadow3}`,
    boxShadow4: `${style.boxShadow4}`,
    boxShadow5: `${style.boxShadow5}`,
    boxShadowInset1: `${style.boxShadowInset1}`,
    boxShadowInset2: `${style.boxShadowInset2}`,
    boxShadowInset3: `${style.boxShadowInset3}`,
    boxShadowInset4: `${style.boxShadowInset4}`,
    boxShadowInset5: `${style.boxShadowInset5}`,
    boxShadowNone: `${style.boxShadowNone}`,
    boxShadowClay1: `${style.boxShadowClay1}`,
    boxShadowClay2: `${style.boxShadowClay2}`,
    boxShadowClay3: `${style.boxShadowClay3}`,
    boxShadowClay4: `${style.boxShadowClay4}`
  }
}
