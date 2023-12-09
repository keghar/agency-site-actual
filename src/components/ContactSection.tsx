import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className=" sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="max-w-4x">
          <div className="mx-auto flex w-full max-w-2xl flex-col justify-center">
            <h2 className="mx-auto  font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl lg:text-6xl">
              Tell us about your project
            </h2>
            <div className="mx-auto mt-6 flex">
              <Button href="/contact" invert>
                Contact us
              </Button>
            </div>
            <div className="mx-auto mt-10 flex flex-col items-center justify-center border-t border-white/10 pt-10 text-center text-white">
              <h3 className="font-display text-base font-semibold text-white">
                Contact info
              </h3>
              <div className="flex flex-col justify-center">
                <svg
                  className="mx-auto h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="phone-svg" stroke-width="0"></g>
                  <g
                    id="phone-svg"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="phone-svg">
                    {' '}
                    <path
                      d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
                      stroke="#1C274C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{' '}
                  </g>
                </svg>
                <span>Phone 251-555-5555</span>
                <svg
                  className="mx-auto h-6 w-5"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="mail-svg" stroke-width="0"></g>
                  <g
                    id="mail-svg"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="mail-svg">
                    {' '}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20 4C21.6569 4 23 5.34315 23 7V17C23 18.6569 21.6569 20 20 20H4C2.34315 20 1 18.6569 1 17V7C1 5.34315 2.34315 4 4 4H20ZM19.2529 6H4.74718L11.3804 11.2367C11.7437 11.5236 12.2563 11.5236 12.6197 11.2367L19.2529 6ZM3 7.1688V17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V7.16882L13.8589 12.8065C12.769 13.667 11.231 13.667 10.1411 12.8065L3 7.1688Z"
                      fill="white"
                    ></path>
                  </g>
                </svg>
                <span>Email contact@rootedagency.dev</span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
