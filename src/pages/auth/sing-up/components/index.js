import React from 'react'

import { Divider } from 'components/Layout'
import Input from 'components/Input'
import Label from 'components/Label'
import PasswordStrength from './PasswordStrength'
import Button from 'components/Button'
import { greenPastel } from 'utils/colors'

const SignUp = props => {
  const {
    values,
    rules,
    getCorrectRules,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = props

  return (
    <form onSubmit={handleSubmit}>
      <Divider>
        <Label>Nome Completo:</Label>
        <Input
          name='completeName'
          display='block'
          type='text'
          value={values.completeName}
          borderColor={!errors.completeName && values.completeName.length > 0 ? greenPastel : null}
          errors={touched.completeName && errors.completeName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Divider>
      <Divider>
        <Label>Email:</Label>
        <Input
          name='email'
          type='text'
          display='block'
          borderColor={!errors.email && values.email.length > 0 ? greenPastel : null}
          errors={touched.email && errors.email}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Divider>
      <Divider margin='0 0 15px 0'>
        <PasswordStrength
          rules={rules}
          correctRules={getCorrectRules(errors.password, !!values.password, rules)}
          value={values.password}
          touched={touched.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Divider>
      <Divider margin='0 0 35px 0'>
        <Label>Confirmar senha:</Label>
        <Input
          name='confirmPassword'
          type='password'
          display='block'
          errors={touched.confirmPassword && errors.confirmPassword}
          value={values.confirmPassword}
          borderColor={!errors.confirmPassword && values.confirmPassword.length > 0 ? greenPastel : null}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Divider>
      <Button
        type='submit'
        disabled={isSubmitting}
        color={greenPastel}
        display='block'
      >
        Criar conta
      </Button>
    </form>
  )
}

export default SignUp
