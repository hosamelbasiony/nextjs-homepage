import Layout from '../components/layout'



export default function Example() {
  return (
    <Layout>
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-20">
          <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <div className="block xl:inline">نظام ترقيم&reg; لإدارة المختبرات الطبية</div>
              
              <div className="block text-indigo-600 xs-mt-3 mt-6">مُختبرك دائمًا بين يديك</div>
            </h1>
            <p className="mt-6 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-10 md:text-xl md:max-w-3xl">
              منظومة متكاملة من الأدوات والتطبيقات تساعدك على الوصول للبيانات بسهولة ويسر وكذلك التحكم في جميع جوانب استثمارك من الجانب الإداري والتقني
            </p>
            <p className="mt-2 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-3 md:text-xl md:max-w-3xl">
              تفاعل بسهولة مع عملائك من الأفراد وكذلك الأطباء والمعامل الخارجية والهيئات وأتح لهم حرية الوصول لبياناتهم بضوابط الأمان اللازمة
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="https://demo.yaseer-lis.net"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  إدارة المختبرات
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="https://erp.tarqim.info/login"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  إدارة المنشئات
                </a>
              </div>
            </div>
          </div>
        </main>
    </Layout>
  )
}
