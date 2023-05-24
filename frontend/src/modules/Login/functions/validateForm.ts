export const validateEmail = (email: string): string => {
  const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i
  if (!email) {
    return 'Email jest wymagany'
  } else if (!emailPattern.test(email)) {
    return 'Email jest nieprawidłowy'
  } else {
    return ''
  }
}

export const validatePassword = (password: string): string => {
  if (!password) {
    return 'Hasło jest wymagane'
  } else if (password.length < 3) {
    return 'Hasło musi zawierać przynajmniej 3 znaki'
  } else {
    return ''
  }
}
export const validateUsername = (username: string): string => {
  if (!username) {
    return 'Imię jest wymagane'
  } else if (username.length < 3) {
    return 'Imię musi zawierać przynajmniej 3 znaki'
  } else {
    return ''
  }
}
