/*variables for styling */
interface StyleVariant {
    background?: string
    boxShadow?: string
    boxShadowHover?: string
    color: string
    containerBackground: string
    linearGradient: string
}

const primaryStyle: StyleVariant = {
    color: `var(--redblue1);`,
    containerBackground: `var(--redblue5);`,
    linearGradient: `
    var(--redblue1),
    var(--redblue2),
    var(--redblue5)
     `,

}

/* for color #CBC9CF */
const secondaryStyle: StyleVariant = {
    color: `var(--background1-main);`,
    containerBackground: `var(--secondary2);`,
    linearGradient: `
        var(--secondary1),
        var(--secondary2),
        var(--secondary3)
      `,
}
const tertiaryStyle: StyleVariant = {
    color: `var(--background1-main);`,
    containerBackground: `var(--secondary5);`,
    linearGradient: `
        var(--secondary5),
        var(--secondary4),
        var(--secondary3)
      `,
}
/* for color #A2A1A6 */
const lightStyle: StyleVariant = {

    linearGradient: `
        var(--background-blue3),
        var(--background-blue2),
        var(--background-blue4)
     `,
    color: `var(--background-blue1);`,
    containerBackground: `var(--background-blue5);`,
}
const blueStyle: StyleVariant = {

    linearGradient: `
        var(--background-blue3),
        var(--background-blue2),
        var(--background-blue4)
     `,
    color: `var(--background2-main);`,
    containerBackground: `none;`,
}
/* for color #1E1E1F */
const darkStyle: StyleVariant = {

    color: `var(--background4-main);`,
    containerBackground: `var(--background1-main);`,
    linearGradient: `
        var(--orange1),
        var(--orange2),
        var(--orange3)
    `,
}
const defaultStyle: StyleVariant = {

    color: `var(--background5-main);`,
    containerBackground: `var(--background1-main);`,
    linearGradient: `     
        var(--secondary1),
        var(--secondary4),
        var(--secondary5)`
    ,
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

        case 'dark':
            style = darkStyle
            break;

        case 'light':
            style = lightStyle
            break;
        case 'blue':
            style = blueStyle
            break;

        default:
            style = defaultStyle
            break;

    }


    return {
        containerBackground: `background-color: ${style.containerBackground}`,
        boxShadow: `box-shadow: ${style.boxShadow}`,
        boxShadowHover: `box-shadow: ${style.boxShadowHover}`,
        color: `color: ${style.color}`,
        cardBackground: `background-color: ${style.background}`,
        gradient: `border-image: linear-gradient(
            45deg,
            ${style.linearGradient}
          )
          1;`,
    }


}
