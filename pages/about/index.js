import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/outline'

import Layout from '../../components/layout'

const features = [
  {
    id: 0,
    name: 'Core LIS System',
    description: 'Core modules managing registeration, result reports management, sampling, financial aspects, host interfacing and more.',
  },
  {
    id: 1,
    name: 'Patient Results Portal',
    description: 'Easy to use patient results portal for results viewing and patient feedback.',
  },
  {
    id: 2,
    name: 'Lab to Lab Results Portal',
    description: 'Elegant lab to lab results portal for lab to lab results viewing printout and pdf reports generation.',
  },
  {
    id: 3,
    name: 'Integrated ERP system',
    description: 'The LIS system is in the heart of an integrated ERP system. The ERP system is used for financial aspects, inventory management, and more.',
  }
]

export default function Example() {
  return (
    <Layout> 
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">All-in-one platform</h2>
            <p className="mt-4 text-lg text-gray-500">
                Tarqeem LIS is a complete solution for managing your laboratory.
            </p>
            </div>
            <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-2 lg:gap-x-8">
            {features.map((feature) => (
                <Link href='/about/1' key={feature.name}>
                  <a  className="relative">
                    <dt>
                        <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                        <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                    </dt>
                    <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
                  </a>
                </Link>
            ))}
            </dl>
        </div>
    </Layout>
  )
}