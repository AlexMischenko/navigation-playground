import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Is required')
    .matches(/^[a-z0-9_]+$/, 'Only lowercase letters, digits and underscores'),
  password: yup
    .string()
    .required('Is required')
    .matches(/^[a-zA-Z0-9_]+$/, 'Only letters, digits and underscores'),
})
