'use client';

import { Button } from './ui/button';

const cardData = [
  { color: 'bg-orange-400', title: 'Coding Clubs ', link: 'https://ui-layout.com/components/image-mousetrail', rotate: 'rotate-0',detail:"Student-led innovation hubs with weekly projects, hackathons, and peer learning.",button:"Start a Club"},
  { color: 'bg-orange-300', title: 'Live Online Classes ', link: 'https://ui-layout.com/components/progressive-carousel', rotate: '-rotate-3',detail:"Grade 1–12: From Scratch to Python & AI, with bilingual support.",button:"View Curriculum" },
  { color: 'bg-orange-200', title: 'Hackathons  ', link: 'https://ui-layout.com/components/drawer', rotate: 'rotate-3',detail:"Quarterly tech competitions with themes like Smart Cities & Health Tech.",button:"Host a Hackathon" },
  { color: 'bg-orange-100', title: 'Olympiad Prep  ', link: 'https://ui-layout.com/components/globe', rotate: '-rotate-6',detail:"Win national rankings with expert-led workshops and mock tests.",button:"Train Students" },
];

export default function Index() {


  return (
    <main>
      <section className='text-black w-full'>
        <div className='flex justify-between px-16'>
          <div className='grid gap-2'>
            {cardData.map((item, index) => (
              <figure key={index} className='sticky top-0 h-screen grid place-content-center'>
                <article className={`${item.color} h-72 w-[30rem] rounded-lg ${item.rotate} p-4 grid place-content-center gap-4 shadow-lg`}>
                  <h1 className='text-2xl font-semibold'>{item.title}</h1>
                  <p>
                    {item.detail}
                  </p>
                  <a
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Button>{item.button}</Button>
                  </a>
                </article>
              </figure>
            ))}
          </div>

          <div className='sticky top-0 h-screen grid place-content-center'>
            <h1 className='text-4xl px-8 mr-[100px] font-medium text-center tracking-tight leading-[120%]'>
            Our Programs Build <br /> <span className='text-orange-500 font-bold'>Future-Ready Students</span>
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}
