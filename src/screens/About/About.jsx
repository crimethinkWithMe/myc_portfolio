import React from 'react'
import useStyles from './About.js'

import Layout from '../../components/shared/Layout/Layout.jsx'
import Printmag from "../../Assets/press_printmag.png"
import HuffingtonPost from "../../Assets/press_huffingtonpost.png"
import Adbusters103 from '../../Assets/press_adbusters_103.png'
import Breitbart from "../../Assets/press_breitbart.png"
import WSJ from "../../Assets/press_wsj.png"
import TranslatingAnarchy from "../../Assets/press_translating-anarchy.png"

export default function About() {
  const classes = useStyles();

  return (
    <>
      <Layout>
        <div className={classes.aboutContainer}>
          <h1 className={classes.aboutTitle}>About Rami Zackary Shamir</h1>
          <section className={classes.aboutBio}>
            A founding member of the Occupy Wall Street movement, I'm a
            front-end developer with expertise in design and 10 years of New
            York City agency experience managing teams to execute innovative
            solutions. As demonstrated in my portfolio project pieces, I'm
            proficient in React and Javascript, comfortably leveraging my
            command of back-end technologies such as Ruby-on-Rails, MongoDB,
            Express.js, and Node.js to deploy full stack applications with full CRUD functionality. My previous roles as an editor, designer, activist, and project manager afford me a unique
            understanding of user and participant experience, which I now
            leverage to program intuitive, client-oriented applications in my
            role as a software engineer. In addition to the projects highlighted in my portfolio, my ability to fully meet any set of deliverables is well-documented in
            a wide-ranging set of online resources, which include successful
            fundraising campaigns and press coverage spanning a decade.
          </section>
          <div className={classes.press}>
            <h2 className={classes.aboutTitleSection}>Press</h2>
            <div className={classes.pressBox}>
              <a href="https://www.printmag.com/post/the-spirit-of-barney-rosset-lives-on-the-train-to-pokipse">
                <img
                  src={Printmag}
                  className={classes.image}
                  alt="Print Magazine article layout"
                />
              </a>
            </div>
            <div className={classes.pressBox}>
              <a href="https://www.huffpost.com/entry/rami-shamir-interview_b_3710947">
                <img
                  src={HuffingtonPost}
                  className={classes.image}
                  alt="Huffington Post interview layout"
                />
              </a>
            </div>
            <div className={classes.pressBox}>
              <a href="https://www.wsj.com/articles/BL-METROB-14093">
                <img
                  src={WSJ}
                  className={classes.image}
                  alt="Wall Street Journal article layout"
                />
              </a>
            </div>
            <div className={classes.pressBox}>
              <a href="https://www.breitbart.com/politics/2011/10/24/fl-bankers-wife-abandons-children-for-very-important-occupywallstreet-cleaning-duties/">
                <img
                  src={Breitbart}
                  className={classes.image}
                  alt="Breitbart Magazine article layout"
                />
              </a>
            </div>
            <div className={classes.pressBox}>
              <img
                src={Adbusters103}
                className={classes.image}
                alt="Adbusters Magazine article layout"
              />
            </div>
            <div className={classes.pressBox}>
              <img
                src={TranslatingAnarchy}
                className={classes.image}
                alt="Translating Anarchy book layout"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )

}