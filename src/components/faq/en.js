export default ({ closeModal, lang, setLang }) => (
  <>
    <div className="mt-4">
      <h3 className="mb-2 font-medium">What's the project about?</h3>
      <p className="text-sm text-gray-500">
        It's made for sound artists to collect money they need to finish their
        unreleased material. Artists set a sum they need to collect, set time
        they need to finish the composition. After community had fundraised the
        needed sum, artists take their time to release tracks and then upload
        it.
      </p>
    </div>

    <div className="mt-4">
      <h3 className="mb-2 font-medium">What's that good for me?</h3>
      <p className="text-sm text-gray-500">
        It's a way for you to directly support your favorite artists, encourage
        them to release more material.
      </p>
    </div>

    <div className="mt-4">
      <h3 className="mb-2 font-medium">What’s the minimum sum I can donate?</h3>
      <p className="text-sm text-gray-500">You can donate as little as 1$</p>
    </div>

    <div className="mt-4">
      <h3 className="mb-2 font-medium">
        How much fee does the platform charge?
      </h3>
      <p className="text-sm text-gray-500">
        As for now, platform doesn't charge any additional fees from donations.
        Only fees out there are our payment provider fees and your bank account
        fees.
      </p>
    </div>

    <div className="mt-4">
      <h3 className="mb-2 font-medium">
        How frequently payments to artists take place?
      </h3>
      <p className="text-sm text-gray-500">It takes place once a week</p>
    </div>

    <div className="mt-4">
      <h3 className="mb-2 font-medium">
        I have some questions/I'd like to help
      </h3>
      <p className="text-sm text-gray-500">
        {`Get in touch with me at `}
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
        How I can make sure I'm not getting scummed?
      </h3>
      <p className="text-sm text-gray-500">
        {`Project source code is publicly available at the `}
        <a
          href="https://github.com/oogxdd/soundfuck"
          className="text-violet-600 cursor-pointer hover:text-violet-800"
          target="_blank"
        >
          Github
        </a>
        {`. As a payment provider we are using `}
        <a
          href="https://fondy.io"
          className="text-violet-600 cursor-pointer hover:text-violet-800"
          target="_blank"
        >
          Fondy
        </a>
        . You can check it out yourself.
      </p>
    </div>

    <div className="mt-4">
      <h3 className="mb-2 font-medium">What's your future plans?</h3>
      <p className="text-sm text-gray-500">
        <ul className="list-disc list-inside">
          <li>Receive crypto payments</li>
          <li>
            {`Release tracks as an `}
            <a
              href="https://slice.so"
              className="text-violet-600 cursor-pointer hover:text-violet-800"
              target="_blank"
            >
              NFTs
            </a>
          </li>
          <li>
            Let people gather money to distribute their material on
            cassettes/vinyl or organize music events
          </li>
          <li>Merch</li>
        </ul>
      </p>
    </div>

    <div className="mt-4">
      <h3 className="mb-2 font-medium">
        I'm a designer/developer/music industry figure and I'd like to help
      </h3>
      <p className="text-sm text-gray-500">
        {`Again, reach me out at `}
        <a
          href="mailto:hi@soundfuck.com"
          className="text-violet-600 cursor-pointer hover:text-violet-800"
        >
          hi@soundfuck.com
        </a>
        . I'd be happy to talk
      </p>
    </div>

    <div className="mt-8 mb-2">
      <div className="flex justify-between items-center">
        <button
          type="button"
          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md hover:text-violet-700 hover:bg-violet-50"
          onClick={closeModal}
        >
          Got it, thanks!
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
