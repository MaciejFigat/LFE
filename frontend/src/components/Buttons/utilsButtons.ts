import { ButtonVariants } from '../../consts'

interface StyleVariant {
  buttonColor: string
  buttonBackground: string
  buttonBackgroundHover: string
  buttonBackgroundActive: string
  buttonColorHover: string
  buttonBorder?: string
  buttonBorderHover?: string
  buttonColorActive?: string
  buttonBorderActive?: string
}

const primaryStyle: StyleVariant = {
  buttonColor: 'var(--background4-main)',
  buttonBackground: 'var(--background1-main)',
  buttonBackgroundHover: 'var(--background1-main)',
  buttonBackgroundActive: 'var(--background1-main)',
  buttonColorHover: 'var(--background-secondary1)',
  buttonColorActive: 'var(--background-secondary2)',
  buttonBorderActive: 'var(--background-secondary1)'
}
const emptyPrimaryStyle: StyleVariant = {
  buttonColor: 'var(--background4-main)',
  buttonBackground: 'var(--background-gradient2)',
  buttonBackgroundHover: 'transparent',
  buttonBackgroundActive: 'transparent',
  buttonColorHover: 'var(--background5-main)',
  buttonColorActive: 'var(--background-secondary1)',
  buttonBorderActive: 'var(--background-secondary2)'
}

const secondaryStyle: StyleVariant = {
  buttonColor: 'var(--background1-main);',
  buttonBackground: 'var(--background2-main);',
  buttonBackgroundHover: 'var(--success1);',
  buttonBackgroundActive: 'var(--success2);',
  buttonColorHover: 'var(--background1-main);',
  buttonColorActive: 'var(--background5-main);',
  buttonBorderActive: 'var(--background3-main);'
}
const emptySecondaryStyle: StyleVariant = {
  buttonColor: 'var(--background4-main)',
  buttonBackground: 'var(--background-gradient2)',
  buttonBackgroundHover: 'transparent',
  buttonBackgroundActive: 'transparent',
  buttonColorHover: 'var(--background-secondary2)',
  buttonColorActive: 'var(--background-secondary3)',
  buttonBorderActive: 'var(--background3-main)'
}

const successEmptyStyle: StyleVariant = {
  buttonColor: 'var(--success1);',
  buttonBackground: 'var(--background-gradient4);',
  buttonBorder: 'var(--success1);',
  buttonBorderHover: 'var(--success2);',
  buttonBackgroundHover: 'var(--background-gradient4);',
  buttonBackgroundActive: 'var(--background-gradient4);',
  buttonColorHover: 'var(--success2);',
  buttonColorActive: 'var(--success3);',
  buttonBorderActive: 'var(--success3);'
}

const successStyle: StyleVariant = {
  buttonColor: 'var(--background1-main);',
  buttonBackground: 'var(--success1);',
  buttonBorder: 'var(--success1);',
  buttonBorderHover: 'var(--success2);',
  buttonBackgroundHover: 'var(--success2);',
  buttonBackgroundActive: 'var(--success3);',
  buttonColorHover: 'var(--background1-main);',
  buttonColorActive: 'var(--background1-main);',
  buttonBorderActive: 'var(--success1);'
}
const infoStyle: StyleVariant = {
  buttonColor: 'var(--background4-main);',
  buttonBackground: 'var(--info1);',
  buttonBackgroundHover: 'var(--info2);',
  buttonBackgroundActive: 'var(--info2);',
  buttonColorHover: 'var(--background4-main);',
  buttonBorder: 'var(--info2);',
  buttonBorderHover: 'var(--info2);',
  buttonColorActive: 'var(--background4-main);',
  buttonBorderActive: 'var(--info3);'
}
const infoEmptyStyle: StyleVariant = {
  buttonColor: 'var(--info2);',
  buttonBackground: 'transparent;',
  buttonBorder: 'var(--info2);',
  buttonBorderHover: 'var(--info2);',
  buttonBackgroundHover: 'transparent;',
  buttonBackgroundActive: 'transparent;',
  buttonColorHover: 'var(--info1);',
  buttonColorActive: 'var(--info3);',
  buttonBorderActive: 'var(--info3);'
}

const warningStyle: StyleVariant = {
  buttonColor: 'var(--warning1);',
  buttonBackground: 'transparent;',
  buttonBorder: 'var(--warning1);',
  buttonBorderHover: 'var(--warning2);',
  buttonBackgroundHover: 'var(--warning1);',
  buttonBackgroundActive: 'var(--warning1);',
  buttonColorHover: 'var(--background1-main);',
  buttonColorActive: 'var(--warning2);',
  buttonBorderActive: 'var(--warning2);'
}
const dangerStyle: StyleVariant = {
  buttonColor: 'var(--background5-main);',
  buttonBackground: 'var(--danger1);',
  buttonBorder: 'var(--danger1);',
  buttonBorderHover: 'var(--danger2);',
  buttonBackgroundHover: 'var(--danger2);',
  buttonBackgroundActive: 'var(--danger3);',
  buttonColorHover: 'var(--background5-main);',
  buttonColorActive: 'var(--background5-main);',
  buttonBorderActive: 'var(--danger2);'
}
const warningEmptyStyle: StyleVariant = {
  buttonColor: 'var(--warning1);',
  buttonBackground: 'var(--background-gradient4);',
  buttonBorder: 'var(--warning1);',
  buttonBorderHover: 'var(--warning2);',
  buttonBackgroundHover: 'var(--background-gradient4);',
  buttonBackgroundActive: 'var(--background-gradient4);',
  buttonColorHover: 'var(--warning2);',
  buttonColorActive: 'var(--warning1);',
  buttonBorderActive: 'var(--warning3);'
}
const dangerEmptyStyle: StyleVariant = {
  buttonColor: 'var(--danger1);',
  buttonBackground: 'var(--background-gradient4);',
  buttonBorder: 'var(--danger1);',
  buttonBorderHover: 'var(--danger2);',
  buttonBackgroundHover: 'var(--background-gradient4);',
  buttonBackgroundActive: 'var(--background-gradient4);',
  buttonColorHover: 'var(--danger2);',
  buttonColorActive: 'var(--danger3);',
  buttonBorderActive: 'var(--danger3);'
}
const disabledLightStyle: StyleVariant = {
  buttonColor: 'var(--background-blur1);',
  buttonBackground: 'transparent;',
  buttonBorder: 'var(--background-blur0);',
  buttonBorderHover: 'var(--background-blur1);',
  buttonBackgroundHover: 'transparent',
  buttonBackgroundActive: 'transparent;',
  buttonColorHover: 'var(--background-blur1);',
  buttonColorActive: 'var(--background-blur3);',
  buttonBorderActive: 'var(--background-blur2);'
}

const defaultStyle: StyleVariant = {
  buttonColor: 'var(--background4-main)',
  buttonBackground: 'transparent',
  buttonBackgroundHover: 'transparent',
  buttonBackgroundActive: 'transparent',
  buttonColorHover: 'var(--background5-main)',
  buttonColorActive: 'var(--background3-main)',
  buttonBorderActive: 'var(--background4-main)'
}

export const handleButtonColor: (
  props: ButtonVariants
) => StyleVariant = props => {
  let style
  switch (props) {
    case ButtonVariants.PRIMARY:
      style = primaryStyle
      break

    case ButtonVariants.PRIMARY_EMPTY:
      style = emptyPrimaryStyle
      break

    case ButtonVariants.SECONDARY:
      style = secondaryStyle
      break

    case ButtonVariants.SECONDARY_EMPTY:
      style = emptySecondaryStyle
      break

    case ButtonVariants.SUCCESS:
      style = successStyle
      break

    case ButtonVariants.SUCCESS_EMPTY:
      style = successEmptyStyle
      break

    case ButtonVariants.INFO:
      style = infoStyle
      break

    case ButtonVariants.INFO_EMPTY:
      style = infoEmptyStyle
      break

    case ButtonVariants.WARNING:
      style = warningStyle
      break
    case ButtonVariants.WARNING_EMPTY:
      style = warningEmptyStyle
      break
    case ButtonVariants.DANGER:
      style = dangerStyle
      break
    case ButtonVariants.DANGER_EMPTY:
      style = dangerEmptyStyle
      break
    case ButtonVariants.DISABLED:
      style = disabledLightStyle
      break

    default:
      style = defaultStyle
      break
  }
  return {
    buttonColor: `${style.buttonColor}`,
    buttonBackground: `${style.buttonBackground}`,
    buttonBackgroundHover: `${style.buttonBackgroundHover}`,
    buttonColorHover: `${style.buttonColorHover}`,
    buttonBorder: `${style.buttonBorder}`,
    buttonBorderHover: `${style.buttonBorderHover}`,
    buttonColorActive: `${style.buttonColorActive}`,
    buttonBorderActive: `${style.buttonBorderActive}`,
    buttonBackgroundActive: `${style.buttonBackgroundActive}`
  }
}
