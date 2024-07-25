import { Button } from '@/components/ui/button';
import {
ZapIcon,
ServerCogIcon,
BrainCogIcon,
EyeIcon,
GlobeIcon,
MonitorSmartphoneIcon
} from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';

const image = '/dashboard.png';



const features = [
  {
          name: 'Store your PDF Documents',
          description:
                'Upload your PDF documents to the cloud and access them from anywhere.',
          icon: GlobeIcon       
  },
  {
          name: 'Blazing fast Responses',
          description:
                        'Our servers are optimized for speed and performance.',
          icon: ZapIcon
  },
  {
          name: 'Chat Memorisation',
          description:
                        'Our AI memorizes your chat history and provides you with the best possible responses.',
           icon: BrainCogIcon
          
  },
  {
          name: 'Interactive PDF viewer',
          description:
                                'Our PDF viewer is interactive and provides a seamless experience.',
           icon: EyeIcon
  },
  { 
          name: 'Cloud Backup',
          description:
                                'Your data is backed up on the cloud and is safe from any data loss.',
          icon: ServerCogIcon
  },
  {
          name: 'Cross Platform',
          description:
                                'Our app is available on all platforms, be it Android, iOS or Web.',
          icon: MonitorSmartphoneIcon
  }
];

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600">
    <div className='bg-white py-24 sm:py-32 rounded-md drop-shadow-xl'>
    <div className='flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8'>
    <div className='mx-auto max-w-2xl sm:text-center'>
    <h2 className='text-base font-semibold leading-7 text-indigo-600'>PDF Chatbot, Your Interactive Document Companion</h2>
    <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl'>Transform your PDF documents into interactive chatbot conversations and access them from anywhere.</p>
    <p className='mt-6 text-lg leading-8 text-gray-600'>
    Introducing {' '}
    <span className='text-indigo-600 font-bold'>PDF Chatbot</span>
    <br />
    <br /> Upload your PDF documents to the cloud and access them from anywhere. Our AI chatbot will help you navigate through your documents and provide you with the best possible responses. <span className='text-indigo-600 font-bold'>PDF Chatbot</span>{" "} turns your static PDF documents into {" "} <span className=' font-bold'>interactive chatbot conversations</span> {" "} and provides you with a seamless experience.
    </p>
    </div>
    <Button asChild className='mt-10'>
    <Link href='/dashboard'>Get Started</Link>
    </Button>
    </div>
    <div className='relative overflow-hidden pt-16'>
    <div className='mx-auto max-w-7xl px-6 lg:px-8'>
    <Image src={image} alt='PDF Chatbot' width={2432} height={1442}
    className='mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10'/>
    <div aria-hidden='true' className='relative'>
    <div className='absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]'/>
    </div>
    </div>
    </div>
    
    <div className='mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8'>
    <dl className='mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-500 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16'>
    {features.map(feature => (
            <div key={feature.name} className='relative pl-9'>
            <dt className='inline font-semibold text-gray-900'>
            <feature.icon 
             aria-hidden='true'
                   className='absolute left-1 top-1 h-5 w-5 text-indigo-600'
            />
            </dt>
            <dd>
                            {feature.description}
            </dd>
            </div>
    ))}
    
    </dl>
    </div>
  
    </div>
    </main>
  );
}
