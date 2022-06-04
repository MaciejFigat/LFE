interface StyleVariant {
    sectionBackground?: string
    sectionBackgroundGradient?: string
    color: string
    subtitleColor: string
    headingColor: string
    toplineColor: string
    buttonColor: string
    buttonBackground: string
    buttonBackgroundHover: string
    buttonColorHover: string
}


// --background - secondary1:
// --background - tertiary1:
// --background - quaternary1:
// --background - blue1:
// --background - blue7:

const primaryStyle: StyleVariant = {

    sectionBackground: `var(--background1-main);`,
    color: `var(--background5-main);`,
    subtitleColor: 'var(--background5-main);',
    headingColor: 'var(--background4-main);',
    toplineColor: 'var(--background3-main);',
    buttonColor: 'var(--background2-main);',
    buttonBackground: 'var(--background5-main);',
    buttonBackgroundHover: 'var(--background4-main);',
    buttonColorHover: 'var(--background1-main);'
}


const secondaryStyle: StyleVariant = {

    sectionBackground: `var(--bluegreen4);`,
    color: `var(--bluegreen9);`,
    subtitleColor: 'var(--background1-main);',
    headingColor: 'var(--bluegreen6);',
    toplineColor: 'var(--bluegreen3);',
    buttonColor: 'var(--secondary4);',
    buttonBackground: 'var(--secondary1);',
    buttonBackgroundHover: 'var(--secondary2);',
    buttonColorHover: 'var(--secondary1);'


}

const tertiaryStyle: StyleVariant = {

    sectionBackground: `var(--bluegreen8);`,
    color: `var(--background-tertiary2);`,
    subtitleColor: 'var(--bluegreen6);',
    headingColor: 'var(--bluegreen7);',
    toplineColor: 'var(--bluegreen6);',
    buttonColor: 'var(--background-tertiary4);',
    buttonBackground: 'var(--background-tertiary5);',
    buttonBackgroundHover: 'var(--background-tertiary4);',
    buttonColorHover: 'var(--background-tertiary1);'
    // sectionBackground: `var(--background-tertiary1);`,
    // color: `var(--background-tertiary2);`,
    // subtitleColor: 'var(--background-tertiary4);',
    // headingColor: 'var(--background-tertiary5);',
    // toplineColor: 'var(--background-tertiary3);',
    // buttonColor: 'var(--background-tertiary4);',
    // buttonBackground: 'var(--background-tertiary5);',
    // buttonBackgroundHover: 'var(--background-tertiary4);',
    // buttonColorHover: 'var(--background-tertiary1);'
}
const blueStyle: StyleVariant = {

    sectionBackground: `var(--background-blue1);`,
    color: `var(--background-blue2);`,
    subtitleColor: 'var(--background-blue5);',
    headingColor: 'var(--background-blue6);',
    toplineColor: 'var(--background-blue4);',
    buttonColor: 'var(--background-blue1);',
    buttonBackground: 'var(--background-blue6);',
    buttonBackgroundHover: 'var(--background-blue7);',
    buttonColorHover: 'var(--background-blue5);'
}
const bluegreenStyle: StyleVariant = {

    sectionBackground: `transparent;`,
    sectionBackgroundGradient: 'var(--gradient2-main);',
    color: `var(--bluegreen4);`,
    subtitleColor: 'var(--bluegreen5);',
    headingColor: 'var(--bluegreen10);',
    toplineColor: 'var(--bluegreen4);',
    buttonColor: 'var(--bluegreen5);',
    buttonBackground: 'var(--secondary2);',
    buttonBackgroundHover: 'var(--bluegreen8);',
    buttonColorHover: 'var(--background2-main);'
}
const transparentStyle: StyleVariant = {

    sectionBackground: `transparent;`,
    // sectionBackgroundGradient: 'var(--gradient2-main);',
    color: `var(--bluegreen4);`,
    subtitleColor: 'var(--bluegreen5);',
    headingColor: 'var(--bluegreen5);',
    toplineColor: 'var(--bluegreen4);',
    buttonColor: 'var(--bluegreen5);',
    buttonBackground: 'var(--secondary2);',
    buttonBackgroundHover: 'var(--bluegreen8);',
    buttonColorHover: 'var(--background2-main);'
}
const defaultStyle: StyleVariant = {

    sectionBackground: `var(--background-tertiary1);`,
    color: `var(--background-tertiary2);`,
    subtitleColor: 'var(--background-tertiary4);',
    headingColor: 'var(--background-tertiary5);',
    toplineColor: 'var(--background-tertiary3);',
    buttonColor: 'var(--background-tertiary4);',
    buttonBackground: 'var(--background-tertiary5);',
    buttonBackgroundHover: 'var(--background-tertiary4);',
    buttonColorHover: 'var(--background-tertiary1);'
}


export const handleSectionColor: (props: any) => {} = (props: any) => {
    let style
    switch (props.variant) {
        case 'primary':
            style = primaryStyle
            break;

        case 'secondary':
            style = secondaryStyle
            break;

        case 'tertiary':
            style = tertiaryStyle
            break;

        case 'blue':
            style = blueStyle
            break;
        case 'bluegreen':
            style = bluegreenStyle
            break;
        case 'transparent':
            style = transparentStyle
            break;

        default:
            style = defaultStyle
            break;

    }
    return {

        color: `color: ${style.color}`,
        sectionBackgroundGradient: `background-image: ${style.sectionBackgroundGradient}`,
        sectionBackground: `background-color: ${style.sectionBackground}`,
        subtitleColor: `color: ${style.subtitleColor}`,
        headingColor: `color: ${style.headingColor}`,
        toplineColor: `color: ${style.toplineColor}`,
        buttonColor: `color: ${style.buttonColor}`,
        buttonBackground: `background-color: ${style.buttonBackground}`,
        buttonBackgroundHover: `background-color: ${style.buttonBackgroundHover}`,
        buttonColorHover: `color: ${style.buttonColorHover}`,
    }
}



