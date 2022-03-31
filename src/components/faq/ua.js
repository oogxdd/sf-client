export default ({ closeModal, lang, setLang }) => (
  <>
    <div className="mt-4">
      <h3 className="mb-2 font-medium">Для кого цей проект?</h3>
      <p className="text-sm text-gray-500">
        Це проект для музикантів, яким не вистачає ресурсів, щоб зарелізити свій
        незавершений матеріал. Музиканти заливають демки, виставляють необхідну
        суму та термін, який їм потрібен для завершення роботи над композицією.
        Після того як комьюніті задонатило встановлену суму, артисти працюють
        над завершенням своїх треків та релізять їх.
      </p>
    </div>

    <div className="mt-4">
      <h3 className="mb-2 font-medium">Що мені з цього?</h3>
      <p className="text-sm text-gray-500">
        Для тебе це можливість допомогти своїм улюбленим артистам і
        простимулювати їх до релізу нового матеріалу.
      </p>
    </div>

    <div className="mt-4">
      <h3 className="mb-2 font-medium">
        Яку мінімальну суму я можу пожертвувати?
      </h3>
      <p className="text-sm text-gray-500">Можна задонатити суму від 1$</p>
    </div>

    <div className="mt-4">
      <h3 className="mb-2 font-medium">Яку комісію збирає платформа?</h3>
      <p className="text-sm text-gray-500">
        На цьому етапі платформа не забирає комісію з донатів, всі гроші
        відправляються безпосередньо артистам (за винятком комісії нашого
        платіжного провайдера та вашого банку)
      </p>
    </div>

    <div className="mt-4">
      <h3 className="mb-2 font-medium">
        Як часто відбуваються платежі артистам?
      </h3>
      <p className="text-sm text-gray-500">
        Виплати здійснюються кожен тиждень
      </p>
    </div>

    <div className="mt-4">
      <h3 className="mb-2 font-medium">
        У мене є запитання/Я хотів би допомогти
      </h3>
      <p className="text-sm text-gray-500">
        {`Ви можете зв'язатися зі мною по емейлу `}
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
        Як я можу бути впевнений, що це не скам?
      </h3>
      <p className="text-sm text-gray-500">
        {`Проект знаходиться в опенсорсі на `}
        <a
          href="https://github.com/soundfuck"
          className="text-violet-600 cursor-pointer hover:text-violet-800"
          target="_blank"
        >
          Гітхабі
        </a>
        {`.  Як платіжний провайдер ми використовуємо `}
        <a
          href="https://fondy.io"
          className="text-violet-600 cursor-pointer hover:text-violet-800"
          target="_blank"
        >
          Фонді
        </a>
        . Ви можете переконатись самі в цьому самі
      </p>
    </div>

    <div className="mt-4">
      <h3 className="mb-2 font-medium">Які ваші майбутні плани?</h3>
      <p className="text-sm text-gray-500">
        <ul className="list-disc list-inside">
          <li>Приймати платежі криптовалютою</li>
          <li>
            {`Релізувати треки як `}
            <a
              href="https://slice.so"
              className="text-violet-600 cursor-pointer hover:text-violet-800"
              target="_blank"
            >
              NFT
            </a>
          </li>
          <li>
            Дати можливість збирати гроші на дистрибуцію матеріалу на
            касетах/вінілі/організацію заходів
          </li>
          <li>Мерч</li>
        </ul>
      </p>
    </div>

    <div className="mt-4">
      <h3 className="mb-2 font-medium">
        Я дизайнер/розробник/діяч музичної індустрії та хотів би допомогти
      </h3>
      <p className="text-sm text-gray-500">
        {`Зв'яжіться зі мною по емейлу `}
        <a
          href="mailto:hi@soundfuck.com"
          className="text-violet-600 cursor-pointer hover:text-violet-800"
        >
          hi@soundfuck.com
        </a>
        , буду радий поспілкуватися та обговорити будь-які варіанти співпраці
      </p>
    </div>

    <div className="mt-8 mb-2">
      <div className="flex justify-between items-center">
        <button
          type="button"
          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md hover:text-violet-700 hover:bg-violet-50"
          onClick={closeModal}
        >
          Зрозумів, дякую
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
