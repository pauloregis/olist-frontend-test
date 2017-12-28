import Yup from 'yup'

function equalTo (ref, msg) {
  return this.test({
    name: 'equalTo',
    exclusive: true,
    /* eslint-disable no-template-curly-in-string */
    message: msg || '${path} must be the same as ${reference}',
    params: {
      reference: ref.path
    },
    test: function (value) {
      return value === this.resolve(ref)
    }
  })
}

Yup.addMethod(Yup.string, 'equalTo', equalTo)
