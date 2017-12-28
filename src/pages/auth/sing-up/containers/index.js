import React from 'react'
import Yup from 'yup'
import { withFormik } from 'formik/dist/formik'

import 'utils/equalTo'
import SignUp from './../components'
import { getCorrectRules } from './utils'

const rules = [
  'Pelo menos 6 caracteres',
  'Pelo menos uma letra maiúscula',
  'Pelo menos um número'
]

const SignUpContainer = (props) => (
  <SignUp
    {...props}
    rules={rules}
    getCorrectRules={getCorrectRules}
  />
)

const formikEnhancer = withFormik({
  validate: async (values) => {
    const schema = Yup.object().shape({
      completeName: Yup.string()
        .required('Nome completo é um campo obrigatório!'),
      email: Yup.string()
        .email('Endereço de email inválido.')
        .required('Email é um campo obrigatório!'),
      password: Yup.string()
        .matches(/\d/, rules[2])
        .matches(/[A-Z]/, rules[1])
        .min(6, rules[0])
        .required('Senha é um campo obrigatório'),
      confirmPassword: Yup.string()
        .equalTo(Yup.ref('password'), 'Deve ser a mesma senha digitada anteriormente.')
        .required('Confirmação de senha é um campo obrigatório')
    })

    return schema.validate(values, { abortEarly: false })
      .catch((err) => {
        throw err.inner.reduce((acc, cur) => ({
          ...acc,
          [cur.path]: acc[cur.path] ? cur.errors.concat(acc[cur.path]) : cur.errors.concat([])
        }), {})
      })
  },
  mapPropsToValues: () => ({
    completeName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }),
  handleSubmit: (payload, { setSubmitting }) => {
    console.log('Enviando...')
    setSubmitting(false)

    setTimeout(() => {
      console.log('Nome completo: ', payload.completeName)
      console.log('Email: ', payload.email)
      console.log('Senha: ', payload.password)
      console.log('Confirmar Senha: ', payload.confirmPassword)
    }, 2000)
  },
  displayName: 'SignUpContainerForm'
})

const SignUpContainerForm = formikEnhancer(SignUpContainer)

export default SignUpContainerForm
