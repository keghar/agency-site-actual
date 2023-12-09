import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { Button } from '@/components/Button'

const clients = [
  ['Bay To Beach Pools', logoPhobiaLight, 'https://baytobeachpools.com'],
  ['Modern Stoneworks', logoFamilyFund],
  ['Oconee Winds', logoUnseal],
  ['Your Company Here', logoMailSmirk],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container className="flex flex-col items-center justify-center">
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with some amazing companies
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo, url]: any) => (
              <li key={client}>
                <FadeIn>
                  <Link href={`${url}`}>
                    {/* <Image src={logo} alt={client} unoptimized /> */}
                    <p className="text-white">{client}</p>
                  </Link>
                </FadeIn>
              </li>
            ))}
          </ul>
          <div className="flex w-full justify-center">
            <Button className="mt-10 " invert>
              Our Work
            </Button>
          </div>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Helping businesses grow with an online presence"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe having a digital presence is important for every business.
          Having a website and social media presence is important for getting
          leads and gaining customers.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you take advantage of the opportunities that technology presents"
        className="mt-48 sm:mt-48 lg:mt-48"
      >
        <p>
          From a landing page to a full e-commerce site, we can help you get
          your business online and in front of your customers. We can also help
          you with your social media presence and marketing.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="pb-10 lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              We specialize in crafting beautiful, high quality marketing pages
              that will help you grow your business.
            </ListItem>
            <ListItem title="Social Media">
              It is hard to take the time to set up your business on Google and
              social media. We can help you set this up and create content and
              ads on these platforms, to help you reach your customers.
            </ListItem>
            <ListItem title="E-commerce">
              We can set up a custom online store-front for your business and
              get your products and creations online helping you expand your
              business all over the world.
            </ListItem>
            <ListItem title="Custom content management">
              If you have a content heavy website, we can help you set up a
              custom content management system to help you manage your content.
              From blogs to e-commerce, we have solutions that are user
              friendly, to add content to your website.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a web design and development company located on the Gulf Coast Alabama.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-56 sm:mt-72 md:mt-56">
        <FadeIn faster className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
            Digital Design and Marketing Agency located in Coastal Alabama
          </h1>
        </FadeIn>
        <FadeIn>
          <p className="mt-6 text-xl text-neutral-600">
            We are a design and development agency working at the intersection
            of design and technology. We here to help your buiness establish
            roots and grow digitally.{' '}
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial> */}

      <Services />

      <ContactSection />
    </>
  )
}
