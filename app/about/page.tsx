import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code}>
          <section>
            <h1>About Me</h1>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
              <img
                src="/path/to/your/profile-picture.jpg"
                alt="Rendani Tshivhangani"
                style={{
                  borderRadius: '50%',
                  width: '150px',
                  height: '150px',
                  marginRight: '2rem',
                }}
              />
              <div>
                <h2>Rendani Tshivhangani</h2>
                <h3>Cloud Computing Specialist & IT Consultant</h3>
              </div>
            </div>
            <p>
              Hi, I'm Rendani Tshivhangani, a passionate developer and IT consultant with experience
              in cloud computing, digital transformation, and solutions architecture. I specialize
              in AWS, GCP, Azure, and various other technologies to help businesses leverage the
              power of the cloud and modern IT solutions.
            </p>
            <p>
              With a background in Information Technology and a strong focus on continuous learning,
              I have worked with various organizations to implement cutting-edge solutions and drive
              technological advancements. I am dedicated to improving my skills and staying
              up-to-date with the latest industry trends.
            </p>
            <p>
              In addition to my technical expertise, I enjoy mentoring and teaching others, helping
              them to achieve their professional goals in the IT industry. Whether it's through
              cloud training bootcamps or one-on-one mentoring, I strive to make a positive impact
              on the community.
            </p>
            <p>Feel free to reach out if you would like to connect or collaborate on a project!</p>
          </section>
        </MDXLayoutRenderer>
      </AuthorLayout>
    </>
  )
}
