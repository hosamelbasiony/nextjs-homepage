import Layout from "../../components/layout";
import axios from '../../helpers/axios';
import MarkdownIt from "markdown-it";
import { marked } from 'marked';
import Link from 'next/link'

export default function Feature({feature}) {

    const md = new MarkdownIt({
        // html: true
    });
    const htmlContent1 = md.render(feature.attributes.body1);
    const htmlContent2 = md.render(feature.attributes.body2);

    return (
        <Layout>
            <div className="py-2 mt-12 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ direction: 'rtl' }}>
                <div className="max-w-max lg:max-w-7xl mx-auto">
                    <div className="relative z-10 mb-8 md:mb-2 md:px-6">
                        <div className="text-base max-w-prose lg:max-w-none">
                            <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">نظام يسير&trade; لإدارة المختبرات</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            { feature.attributes.title }
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        
                        <svg
                        className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                        aria-hidden="true"
                        >
                        <defs>
                            <pattern
                            id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                            >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
                        </svg>
                        <div className="relative md:p-6">

                        <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                            <section dangerouslySetInnerHTML={{ __html: marked.parse(feature.attributes.body1) }}></section>
                            <section dangerouslySetInnerHTML={{ __html: marked.parse(feature.attributes.body2) }}></section>
                        </div>

                        <div className="mt-8 inline-flex rounded-md shadow">
                            <Link href='/contact'>
                                <a  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                                تواصل معنا
                                </a>
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps({params}) {
    const res = await axios.get(`features/${params.id}`);
    
    return {
        props: {
            feature: res.data.data
        }
    }
}
  

export async function getStaticPaths() {

    const ret = await axios.get(`features`);

    return {
        paths: ret.data.data.map( item => ({
            params: {
                id: item.id.toString(),

            }
        })),
        fallback: false
    }

}
  