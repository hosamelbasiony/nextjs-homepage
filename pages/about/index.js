import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/outline'
import axios from '../../helpers/axios';

import Layout from '../../components/layout'

export default function About({features}) {
  return (
    <Layout> 
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8" style={{direction: "rtl"}}>
            <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">منصة واحدة للإدارة المتكاملة</h2>
            <p className="mt-4 text-lg text-gray-500">
            منظومة يسير لإدارة المختبرات هي الحل الكامل لإدارة مختبرك بجميع فروعه
            </p>
            </div>
            <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-2 lg:gap-x-8">
            {features.map((feature) => (                
                  <div  className="inline-block" key={feature.id}>
                    <dt>
                        <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                        <p className="mr-9 text-lg leading-6 font-medium text-gray-900">{feature.attributes.title}</p>
                    </dt>
                    <dd className="mt-2 ml-9 text-base text-gray-500">{feature.attributes.description}</dd>
                    <Link href={`/about/${feature.id}`}>
                    <a className="text-blue-600 hover:text-blue-800 visited:text-purple-600">عرض المزيد</a>
                    </Link>
                  </div>
            ))}
            </dl>
        </div>
    </Layout>
  )
}

export async function getStaticProps(context) {

  const ret = await axios.get(`features`);

  return {
    props: {
      features: ret.data.data
    }
  }
}