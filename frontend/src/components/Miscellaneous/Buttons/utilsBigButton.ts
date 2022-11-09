interface StyleVariant {
    buttonColor: string
    buttonBackground: string
    buttonBackgroundHover: string
    buttonColorHover: string
    buttonBorder?: string
    buttonBorderHover?: string
    buttonColorActive?: string
    buttonBorderActive?: string
}



const primaryStyle: StyleVariant = {
    buttonColor: 'var(--background1-main)',
    buttonBackground: 'var(--background4-main)',
    buttonBackgroundHover: 'var(--background-blur2)',
    buttonColorHover: 'var(--background-secondary2)',
    buttonBorder: 'var(--background-secondary2)',
    buttonBorderHover: 'var(--background-blur1)',
    buttonColorActive: 'var(--background3-main)',
    buttonBorderActive: 'var(--background3-main)'
}




const secondaryStyle: StyleVariant = {
    buttonColor: 'var(--background4-main)',
    buttonBackground: 'var(--background-blur1)',
    buttonBackgroundHover: 'var(--background1-main)',
    buttonColorHover: 'var(--background-secondary1)',
    buttonBorder: 'var(--background4-main)',
    buttonBorderHover: 'var(--background-secondary1)',
    buttonColorActive: 'var(--background3-main)',
    buttonBorderActive: 'var(--background3-main)'
}

const successEmptyStyle: StyleVariant = {
    // buttonColor: 'var(--success1)',
    // buttonBackground: 'var(--background1-main)',
    // buttonBackgroundHover: 'transparent',
    // buttonColorHover: 'var(--background-secondary1)',
    // buttonBorder: 'var(--background4-main)',
    // buttonBorderHover: 'var(--background-secondary1)',
    // buttonColorActive: 'var(--background3-main)',
    // buttonBorderActive: 'var(--background3-main)'
    buttonColor: 'var(--success1);',
    buttonBackground: 'transparent;',
    buttonBorder: '2px solid var(--success1);',
    buttonBorderHover: '2px solid var(--success2);',
    buttonBackgroundHover: 'transparent;',
    buttonColorHover: 'var(--success2);',
    buttonColorActive: 'var(--success2);',
    buttonBorderActive: 'var(--success2);'

}

const successStyle: StyleVariant = {
    buttonColor: 'var(--background1-main);',
    buttonBackground: 'var(--success1);',
    buttonBorder: '2px solid var(--success1);',
    buttonBorderHover: '2px solid var(--success2);',
    buttonBackgroundHover: 'var(--success2);',
    buttonColorHover: 'var(--background1-main);',
    buttonColorActive: 'var(--background-secondary3);',
    buttonBorderActive: 'var(--success2);'
}
const infoStyle: StyleVariant = {
    buttonColor: 'var(--success1)',
    buttonBackground: 'var(--background1-main)',
    buttonBackgroundHover: 'transparent',
    buttonColorHover: 'var(--background-secondary1)',
    buttonBorder: 'var(--background4-main)',
    buttonBorderHover: 'var(--background-secondary1)',
    buttonColorActive: 'var(--background3-main)',
    buttonBorderActive: 'var(--background3-main)'
}


const dangerStyle: StyleVariant = {
    buttonColor: 'var(--background1-main);',
    buttonBackground: 'var(--warning1);',
    buttonBackgroundHover: 'var(--danger1);',
    buttonColorHover: 'var(--background1-main);'
}
const defaultStyle: StyleVariant = {
    buttonColor: 'var(--background-tertiary4);',
    buttonBackground: 'var(--background-tertiary5);',
    buttonBackgroundHover: 'var(--background-tertiary4);',
    buttonColorHover: 'var(--background-tertiary1);'
}


export const handleButtonColor: (props: any) => {} = (props: any) => {
    let style
    switch (props.variant) {
        case 'primary':
            style = primaryStyle
            break;

        case 'secondary':
            style = secondaryStyle
            break;

        case 'success':
            style = successStyle
            break;

        case 'successEmpty':
            style = successEmptyStyle
            break;

        case 'info':
            style = infoStyle
            break;



        case 'danger':
            style = dangerStyle
            break;



        default:
            style = defaultStyle
            break;

    }
    return {

        buttonColor: `${style.buttonColor}`,
        buttonBackground: `${style.buttonBackground}`,
        buttonBackgroundHover: `${style.buttonBackgroundHover}`,
        buttonColorHover: `${style.buttonColorHover}`,
        buttonBorder: `${style.buttonBorder}`,
        buttonBorderHover: `${style.buttonBorderHover}`,
        buttonColorActive: `${style.buttonColorActive}`,
        buttonBorderActive: `${style.buttonBorderActive}`
    }
}



