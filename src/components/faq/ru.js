export default ({ closeModal, lang, setLang }) => (
  <>
    <div className="mt-4">
      <h3 className="mb-2 font-medium">Для кого этот проект?</h3>
      <p className="text-sm text-gray-500">
        Это проект для музыкантов которым не хватает ресурсов чтобы зарелизить
        свой незавершенный материал. Музыканты заливают демки, выставляют
        необходимую сумму и срок за который они закончат работу над композицией.
        После того как комьюнити задонатило наобходимую сумму, артисты работают
        над завершением своих треков и релизят их.
      </p>
    </div>
    <div className="mt-4">
      <h3 className="mb-2 font-medium">Что мне с этого?</h3>
      <p className="text-sm text-gray-500">
        Для тебя это возможность напрямую помочь своим любимым артистам и
        простимулировать их к релизу нового материала.
      </p>
    </div>
    <div className="mt-4">
      <h3 className="mb-2 font-medium">
        Какую минимальную сумму я могу задонатить?
      </h3>
      <p className="text-sm text-gray-500">Можно задонатить сумму от 1$</p>
    </div>
    <div className="mt-4">
      <h3 className="mb-2 font-medium">Какую комиссию забирает платформа?</h3>
      <p className="text-sm text-gray-500">
        На данный момент платформа не забирает комиссию с донатов, все деньги
        отправляются напрямую артистам (за исключительнием комиссии нашего
        платежного провайдера и вашего банка)
      </p>
    </div>
    <div className="mt-4">
      <h3 className="mb-2 font-medium">Как часто проходят платежи артистам?</h3>
      <p className="text-sm text-gray-500">
        Выплаты производятся каждую неделю
      </p>
    </div>
    <div className="mt-4">
      <h3 className="mb-2 font-medium">
        У меня есть вопросы/Я хотел бы помочь
      </h3>
      <p className="text-sm text-gray-500">
        {`Вы можете связаться со мной по емэйлу `}
        <a
          href="mailto:hi@soundfuck.com"
          className="text-violet-600 cursor-pointer hover:text-violet-800"
        >
          hi@soundfuck.com
        </a>
      </p>
    </div>
    <div className="mt-4">
      <h3 className="mb-2 font-medium">
        Как я могу быть уверен что это не скам?
      </h3>
      <p className="text-sm text-gray-500">
        {`Проект находится в опенсорсе на `}
        <a
          href="https://github.com/soundfuck"
          className="text-violet-600 cursor-pointer hover:text-violet-800"
          target="_blank"
        >
          Гитхабе
        </a>
        {`. В качестве платежного провайдера мы используем `}
        <a
          href="https://fondy.io"
          className="text-violet-600 cursor-pointer hover:text-violet-800"
          target="_blank"
        >
          Фонди
        </a>
        . Вы можете убедиться сами
      </p>
    </div>
    <div className="mt-4">
      <h3 className="mb-2 font-medium">Какие ваши дальнейшие планы?</h3>
      <p className="text-sm text-gray-500">
        <ul className="list-disc list-inside">
          <li>Принимать платежи криптовалютой</li>
          <li>
            {`Релизить треки как `}
            <a
              href="https://slice.so"
              className="text-violet-600 cursor-pointer hover:text-violet-800"
              target="_blank"
            >
              NFT
            </a>
          </li>
          <li>
            Дать возможность собирать деньги на дистрибьюцию материала на
            касетах/виниле/организацию мероприятий
          </li>
          <li>Мерч</li>
        </ul>
      </p>
    </div>
    <div className="mt-4">
      <h3 className="mb-2 font-medium">
        Я дизайнер/разработчик/деятель музыкальной индустрии и хотел бы помочь{' '}
      </h3>
      <p className="text-sm text-gray-500">
        {`Опять же, свяжитесь со мной по емэйлу `}
        <a
          href="mailto:hi@soundfuck.com"
          className="text-violet-600 cursor-pointer hover:text-violet-800"
        >
          hi@soundfuck.com
        </a>
        , я буду рад обсудить любые варианты сотрудничества
      </p>
    </div>

    <div className="mt-8 mb-2">
      <div className="flex justify-between items-center">
        <button
          type="button"
          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md hover:text-violet-700 hover:bg-violet-50"
          onClick={closeModal}
        >
          Ок, спасибо
        </button>
        <div className="flex space-x-4">
          <div
            onClick={() => {
              setLang('en')
              document.querySelectorAll('[role="dialog"]')[0].scroll(0, 0)
            }}
            className={`text-gray-500 cursor-pointer ${
              lang === 'en' ? 'text-gray-800' : ''
            }`}
          >
            EN
          </div>
          <div
            onClick={() => {
              setLang('ru')
              document.querySelectorAll('[role="dialog"]')[0].scroll(0, 0)
            }}
            className={`text-gray-500 cursor-pointer ${
              lang === 'ru' ? 'text-gray-800' : ''
            }`}
          >
            RU
          </div>
          <div
            onClick={() => {
              setLang('ua')
              document.querySelectorAll('[role="dialog"]')[0].scroll(0, 0)
            }}
            className={`text-gray-500 cursor-pointer ${
              lang === 'ua' ? 'text-gray-800' : ''
            }`}
          >
            UA
          </div>
        </div>
      </div>
    </div>
  </>
)
