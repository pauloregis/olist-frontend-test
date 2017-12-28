import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import 'utils/styledGlogal'

const req = require.context('../src', true, /\.story\.js$/)

setOptions({
  name: 'Olist Componentes',
  downPanelInRight: true,
  url: '#'
})

function loadStories () {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
