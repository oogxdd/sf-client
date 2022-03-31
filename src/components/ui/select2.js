import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const people = [
  { id: 0, name: 'Global', flag: '🌏' },
  { id: 1, name: 'Ukraine', flag: '🇺🇦' },
  { id: 3, name: 'Russia', flag: '🇷🇺' },
  { id: 2, name: 'Sound mafia', flag: '🏴‍☠️' },
  // { id: 4, name: 'Tom Cook' },
  // { id: 5, name: 'Tanya Fox' },
  // { id: 6, name: 'Hellen Schmidt' },
  // { id: 7, name: 'Caroline Schultz' },
  // { id: 8, name: 'Mason Heaney' },
  // { id: 9, name: 'Claudie Smitham' },
  // { id: 10, name: 'Emil Schaefer' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selected, setSelected] = useState(people[0])

  return (
    <Listbox value={selected} onChange={setSelected} horizontal>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700">
            Country
          </Listbox.Label>
          <div className="mt-1 relative">
            <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="block truncate">{`${selected.flag} ${selected.name}`}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <p className="mt-2 text-sm text-gray-500" id="email-description">
              Let the world know where you're coming from
            </p>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-8 pr-4',
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? 'font-semibold' : 'font-normal',
                            'block truncate',
                          )}
                        >
                          {person.name}
                        </span>

                        <span
                          className={classNames(
                            '',
                            'absolute inset-y-0 left-1 flex items-center pl-1.5',
                          )}
                        >
                          {person.flag}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
