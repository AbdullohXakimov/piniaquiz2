import ru from '../lang/ru'
import uz from '../lang/uz'
import en from '../lang/en'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'uz',
  messages: {
    ru, uz, en
  }
})

export default i18n