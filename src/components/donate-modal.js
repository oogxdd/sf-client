import { Dialog } from '@headlessui/react'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from 'context'
import { useMutation } from 'urql'
import gql from 'graphql-tag'

import Field from 'components/ui/field'
import Modal from 'components/ui/modal'

export default function AuthModal() {
  const { showDonateModal, setShowDonateModal } = useContext(AppContext)
  const [btn, setBtn] = useState(undefined)
  const [sum, setSum] = useState(undefined)

  useEffect(() => {
    var button = window.$ipsp.get('button')
    button.setMerchantId(1396424)
    button.setAmount('', 'USD')
    button.setHost('pay.fondy.eu')
    setBtn(button)
  }, [])

  const disabled = !sum

  return (
    <Modal
      show={showDonateModal}
      hide={() => setShowDonateModal(false)}
      // style={{ minHeight: 200 }}
    >
      <Dialog.Title
        as="h1"
        className="text-xl font-medium leading-6 text-gray-900 mb-6"
      >
        Donate
      </Dialog.Title>
      <Field
        type="number"
        label="Sum"
        placeholder=""
        value={sum}
        onChange={(e) => setSum(e.target.value)}
        leading="$"
        addon="USD"
      />
      <button
        disabled={disabled}
        className={`mt-6 mb-4 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-500 ${
          disabled
            ? 'bg-gray-500 hover:bg-gray-500 cursor-not-allowed focus:ring-offset-0 focus:ring-0'
            : ''
        }`}
        onClick={() => {
          if (!disabled) {
            const button = window.$ipsp.get('button')
            button.setMerchantId(1481397)
            button.setAmount(sum, 'USD', true)
            button.setHost('pay.fondy.eu')

            button.addField({
              label: 'Track name',
              name: 'description',
              value: `max - some song.mp3`,
              readonly: true,
            })

            button.addField({
              label: 'Email',
              name: 'email',
              required: false,
            })

            window.open(button.getUrl(), '_blank').focus()
          }
        }}
      >
        Pay {`${sum ? `${sum}$` : ''}`}
      </button>
    </Modal>
  )
}
