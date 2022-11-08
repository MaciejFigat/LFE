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



const primaryStyle: StyleVariant = {
    sectionBackground: `var(--background-blur1);`,
    // sectionBackground: `var(--background-opaque1);`,
    color: `var(--background4-main);`,
    subtitleColor: 'var(--background4-main);',
    headingColor: 'var(--background4-main);',
    toplineColor: 'var(--background4-main);',
    buttonColor: 'var(--background-tertiary2);',
    buttonBackground: 'var(--background-secondary1);',
    buttonBackgroundHover: 'var(--background-secondary2);',
    buttonColorHover: 'var(--background-secondary2);'
}
// const primaryStyle: StyleVariant = {
//     sectionBackground: `var(--background-opaque6);`,
//     color: `var(--background5-main);`,
//     subtitleColor: 'var(--background5-main);',
//     headingColor: 'var(--background5-main);',
//     toplineColor: 'var(--background5-main);',
//     buttonColor: 'var(--background-neon2);',
//     buttonBackground: 'var(--background-neon1);',
//     buttonBackgroundHover: 'var(--background-neon2);',
//     buttonColorHover: 'var(--background-neon6);'
// }


const secondaryStyle: StyleVariant = {
    sectionBackground: `var(--background1-main);`,
    color: `var(--background4-main);`,
    subtitleColor: 'var(--background4-main);',
    headingColor: 'var(--background4-main);',
    toplineColor: 'var(--background4-main);',
    buttonColor: 'var(--background4-main);',
    buttonBackground: 'var(--background4-main);',
    buttonBackgroundHover: 'var(--background3-main);',
    buttonColorHover: 'var(--background-secondary1);'


}

const tertiaryStyle: StyleVariant = {

    sectionBackground: `var(--background-opaque3)`,
    color: `var(--background-tertiary2);`,
    subtitleColor: 'var(--background5-main)',
    headingColor: 'var(--bluegreen7);',
    toplineColor: 'var(--bluegreen6);',
    buttonColor: 'var(--background-tertiary4);',
    buttonBackground: 'var(--background-tertiary5);',
    buttonBackgroundHover: 'var(--background-tertiary4);',
    buttonColorHover: 'var(--background-neon6);'

}
const blueStyle: StyleVariant = {

    sectionBackground: `var(--background-opaque7);`,
    color: `var(--background-neon5);`,
    subtitleColor: 'var(--background-neon5);',
    headingColor: 'var(--background-neon5);',
    toplineColor: 'var(--background-neon5);',
    buttonColor: 'var(--background-neon3);',
    buttonBackground: 'var(--background-neon4);',
    buttonBackgroundHover: 'var(--background-neon1);',
    buttonColorHover: 'var(--background-neon4);'
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
    buttonColorHover: 'var(--background-neon5)'
}
const transparentStyle: StyleVariant = {

    sectionBackground: `transparent;`,
    // sectionBackgroundGradient: 'var(--gradient2-main);',
    color: `var(--background-neon1);`,
    subtitleColor: 'var(--background-neon5);',
    headingColor: 'var(--background-neon2);',
    toplineColor: 'var(--background-neon5);',
    buttonColor: 'var(--bluegreen5);',
    buttonBackground: 'var(--secondary2);',
    buttonBackgroundHover: 'var(--background-neon3);',
    buttonColorHover: 'var(--background-neon5);'
}
const defaultStyle: StyleVariant = {

    sectionBackground: `var(--background-opaque2);`,
    color: `var(--background-tertiary2);`,
    subtitleColor: 'var(--background-tertiary4);',
    headingColor: 'var(--background-tertiary5);',
    toplineColor: 'var(--background-tertiary3);',
    buttonColor: 'var(--background-tertiary4);',
    buttonBackground: 'var(--background-tertiary5);',
    buttonBackgroundHover: 'var(--background-tertiary4);',
    buttonColorHover: 'var(--background-neon5);'
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
        // buttonBackground: `background-color: ${style.buttonBackground}`,
        buttonBackground: `border-color: ${style.buttonBackground}`,
        buttonBackgroundHover: `border-color: ${style.buttonBackgroundHover}`,
        // buttonBackgroundHover: `background-color: ${style.buttonBackgroundHover}`,
        buttonColorHover: `color: ${style.buttonColorHover}`,
    }
}



