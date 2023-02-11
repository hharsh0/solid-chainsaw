import React from 'react'
import ContactLink from '@/components/ContactLink';

function contact() {
  return (
    <>
      <div className="mx-auto max-w-3xl overflow-hidden">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Contact
        </h1>
        <div className="pt-10 pb-8">
          <ul className="font-semi-bold flex flex-col space-y-4">
            <ContactLink
              href="mailto:harsh.v7681@gmail.com"
              title="gmail"
              icon="harsh.v7681"
            />
            <ContactLink
              href="https://github.com/hharsh0"
              title="github"
              icon="hharsh0"
            />
            <ContactLink
              href="https://www.linkedin.com/in/harsh-vardhan-222120228/"
              title="linkedin"
              icon="harshvardhan"
            />
          </ul>
        </div>
      </div>
    </>
  );
}

export default contact