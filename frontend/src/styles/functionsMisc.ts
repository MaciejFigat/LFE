import { TextColor } from '../consts'

export const getColor = (color: TextColor): string => {
  switch (color) {
    case TextColor.SUCCESS:
      return 'var(--success1)'
    case TextColor.INFO:
      return 'var(--background-secondary1)'
    case TextColor.WARNING:
      return 'var(--warning1)'
    case TextColor.DANGER:
      return 'var(--danger1)'
    case TextColor.PRIMARY:
      return 'var(--background4-main)'
    case TextColor.SECONDARY:
      return 'var(--background2-main)'

    default:
      return 'inherit'
  }
}
export const getAccentColor = (color: TextColor): string => {
  switch (color) {
    case TextColor.SUCCESS:
      return 'var(--success2)'
    case TextColor.INFO:
      return 'var(--background-secondary2)'
    case TextColor.WARNING:
      return 'var(--warning2)'
    case TextColor.DANGER:
      return 'var(--danger2)'

    default:
      return 'inherit'
  }
}
