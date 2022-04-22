import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import Layout from '../components/layout'

export default function Example() {
  return (
    <Layout>
        <div className="relative bg-white" style={{direction: "rtl"}}>
        <div className="absolute inset-0">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
            <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg mx-auto">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">تواصل معنا</h2>
                <p className="mt-3 text-lg leading-6 text-gray-500">
                لمزيد من المعلومات والعروض رجاء التواصل عبر إجحدى الوسائل التالية
                </p>
                <dl className="mt-8 text-base text-gray-500">
                <div>
                    <dt className="sr-only">Postal address</dt>
                    <dd>
                    <p>الإسماعيلية</p>
                    <p>حي ثالث</p>
                    </dd>
                </div>
                <div className="mt-6">
                    <dt className="sr-only">تليفون</dt>
                    <dd className="flex">
                    <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                    <span className="mr-3 text-right" style={{direction: "ltr"}}>+2010141249459</span>
                    </dd>
                </div>
                <div className="mt-4">
                    <dt className="sr-only">تليفون</dt>
                    <dd className="flex">
                    <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                    <span className="mr-3 text-right" style={{direction: "ltr"}}>+2010141249459</span>
                    </dd>
                </div>
                <div className="mt-4">
                    <dt className="sr-only">بريد إلكتروني</dt>
                    <dd className="flex">
                    <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                    <span className="mr-3">support@tarqeem.net</span>
                    </dd>
                </div>
                </dl>
                {/* <p className="mt-6 text-base text-gray-500">
                Looking for careers?{' '}
                <a href="#" className="font-medium text-gray-700 underline">
                    View all job openings
                </a>
                .
                </p> */}
            </div>
            </div>
            <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
                <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
                <div>
                    <label htmlFor="full-name" className="sr-only">
                    الاسم
                    </label>
                    <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="name"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="الاسم"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="sr-only">
                    البريد الإلكترونى
                    </label>
                    <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="البريد الإلكترونى"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="sr-only">
                    التليفون
                    </label>
                    <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="التليفون"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="sr-only">
                    الرسالة
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                    placeholder="الرسالة"
                    defaultValue={''}
                    />
                </div>
                <div>
                    <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    إرسال
                    </button>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>
    </Layout>
  )
}