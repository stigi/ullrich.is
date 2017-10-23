// @flow
import React, {Component} from 'react'
import Link from 'nextein/link'
import withLayout from '../components/Layout'

export default withLayout(({}) => (
    <main>
      <style jsx>{`
        #hero {
          font-size: 1.4rem;
          font-weight: 400;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
        li {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }
        li h1 {
          font-size: 1rem;
          font-weight: 300;
        }
      `}</style>
      <div id="hero">
        Work with me
      </div>
      <p>
        Here are some of the things I can help you and your team with:
      </p>
      <ul>
        <li>
          <h1>Good old software engineering</h1>
          <p>
            Building a v1.0, getting an MVP out the door, adding new features to an existing app. I am a good colaborator when it comes to working with PMs and designers, as well as other engineers.<br />
            I'm focused on iOS software development in Swift and Objective-C. Lately I've gained more experience in Javascript and ReactNative, so don't hesitate pinging me about them as well.
          </p>
        </li>
        <li>
          <h1>Code and architecture review</h1>
          <p>
            Do you have an existing app an a team of developers working on it. I can help identify archetectural bottle necks that prevent your team from moving fast.<br/>
            I can also review your teams newly written code and give instant feedback. There's no better way for an engineer to grow than by providing them instant feedback on their work.
          </p>
        </li>
        <li>
          <h1>Workshops and Talks</h1>
          <p>
            Tap my <Link as="/experienced" href="/portfolio">years of experience</Link> in the field, working sucessfully in different settings from small startups to the scale of Facebook. Learn from the wins and failures I've seen me and others do over time.
            Let me suggest workflows and improvements to help your project excel.
          </p>
        </li>
      </ul>
      <p>
        Interested in talking? I'm always <Link href="mailto:hi@ullrich.is?subject=Let's chat&body=Hi Ullrich 👋%0D%0A%0D%0A[√] Let me buy you a coffe/beer.%0D%0A[ ] Do you have time for lunch?%0D%0A[ ] I want you to meet the team.%0D%0A[ ] Urgent! Call me right now!">up for a meeting</Link> or to jump on the <Link href="tel:+491706164411">phone</Link>.
      </p>
    </main>
  )
)
