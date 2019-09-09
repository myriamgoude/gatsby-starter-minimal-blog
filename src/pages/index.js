import React from 'react'
// import cv from 'downloads/CV-MG-EN_v2.pdf'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'



import { Layout, Article, Wrapper, Button, SectionTitle } from '../components'

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 3rem 6rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  overflow: hidden;
`

const Hero = styled.div`
  grid-column: 2;
  padding: 3rem 2rem 6rem 2rem;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  color: ${props => props.theme.colors.grey.dark};

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1rem 4rem 1rem;
  }

  p {
    font-size: 1.68rem;
    margin-top: -1rem;
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 1.45rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1.25rem;
    }
  }
`

const IndexPage = ({
  data: {
    allMdx: { nodes: posts },
  },
}) => (
  <Layout>
    <Wrapper>
      <Hero>
        <h1>Hi.</h1>
        <p>
          I&apos;m Myriam Goude, a Senior UX and Product Manager. I get more than 5 years of experience in web products and startups.
        </p>
        <Link to="/contact">
          <Button big>
          <svg
        fill="none"
        height="25"
        viewBox="0 0 25 25"
        width="25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m4.48803 12.236-.807-3.07301 15.19697 3.32801-15.22297 3.355.832-3.096.069-.257z"
          fill="#ffffff66"
        />
        <path
          d="m23.084 11.1089-20.63719-9.02541c-.17378-.07482-.36527-.09864-.55208-.06869-.18682.02995-.36126.11245-.50294.23784-.14168.1254-.24475.28852-.29718.47031s-.05205.37475.0011.55634l2.4256 9.21071-2.4875 9.2573c-.048331.1808-.044781.3716.01024.5506.05502.1789.1593.3387.30089.4611.1416.1225.3148.2026.49979.2312s.3743.0046.54628-.0693l20.69299-9.0491c.2715-.1149.5031-.3071.6659-.5528s.2496-.5339.2496-.8287c0-.2947-.0868-.5829-.2496-.8286s-.3944-.438-.6659-.5528zm-18.59569 1.1267-.8073-3.07281 15.19739 3.32841-15.22319 3.3545.8319-3.0957.069-.2568zm18.19509.72-20.68339 9.0512 1.3632-5.0728 17.95369-3.9556c.1113-.0245.2108-.0863.2822-.1751s.1103-.1993.1103-.3132-.0389-.2244-.1103-.3132-.1709-.1506-.2822-.1751l-17.91999-3.92501-1.332-5.07 20.62959 9.02321c.0918.0363.1703.0999.2249.1821s.0827.1792.0806.2779c.0016.1008-.0279.1996-.0846.2829s-.1377.1471-.232.1827z"
          fill="#fff"
        />
      </svg>
            Contact
          </Button>
        </Link>
        &nbsp;
        {/*
        <Link to="/">
          <Button big>
          <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <g clip-path="url(#clip1)">
            <path
              d="M19 22.5C19 22.67 19.02 22.8343 19.0362 23H25V5H22V17.6052C20.9703 18.1326 20.1326 18.9703 19.6052 20H1V22H19.0252C19.01 22.1649 19 22.3312 19 22.5Z"
              fill="#ffffff66"
            />
            <path
              d="M15 15C14.6044 15 14.2178 15.1173 13.8889 15.3371C13.56 15.5568 13.3036 15.8692 13.1522 16.2346C13.0009 16.6001 12.9613 17.0022 13.0384 17.3902C13.1156 17.7781 13.3061 18.1345 13.5858 18.4142C13.8655 18.6939 14.2219 18.8844 14.6098 18.9616C14.9978 19.0387 15.3999 18.9991 15.7654 18.8478C16.1308 18.6964 16.4432 18.44 16.6629 18.1111C16.8827 17.7822 17 17.3956 17 17C17 16.4696 16.7893 15.9609 16.4142 15.5858C16.0391 15.2107 15.5304 15 15 15ZM15 18C14.8022 18 14.6089 17.9414 14.4444 17.8315C14.28 17.7216 14.1518 17.5654 14.0761 17.3827C14.0004 17.2 13.9806 16.9989 14.0192 16.8049C14.0578 16.6109 14.153 16.4327 14.2929 16.2929C14.4327 16.153 14.6109 16.0578 14.8049 16.0192C14.9989 15.9806 15.2 16.0004 15.3827 16.0761C15.5654 16.1518 15.7216 16.28 15.8315 16.4444C15.9414 16.6089 16 16.8022 16 17C15.9997 17.2651 15.8943 17.5193 15.7068 17.7068C15.5193 17.8943 15.2651 17.9997 15 18Z"
              fill="#fff"
            />
            <path
              d="M23.5 4H18V2.5C17.9992 1.83719 17.7356 1.20176 17.2669 0.733081C16.7982 0.264406 16.1628 0.00076752 15.5 0H9.5C8.83719 0.00076752 8.20176 0.264406 7.73308 0.733081C7.26441 1.20176 7.00077 1.83719 7 2.5V4H1.5C1.10231 4.00042 0.72102 4.15859 0.439808 4.43981C0.158595 4.72102 0.00042353 5.10231 0 5.5L0 21.5C0.00042353 21.8977 0.158595 22.279 0.439808 22.5602C0.72102 22.8414 1.10231 22.9996 1.5 23H23.5C23.8977 22.9996 24.279 22.8414 24.5602 22.5602C24.8414 22.279 24.9996 21.8977 25 21.5V5.5C24.9996 5.10231 24.8414 4.72102 24.5602 4.43981C24.279 4.15859 23.8977 4.00042 23.5 4ZM8 2.5C8.00042 2.10231 8.1586 1.72102 8.43981 1.43981C8.72102 1.15859 9.10231 1.00042 9.5 1H15.5C15.8977 1.00042 16.279 1.15859 16.5602 1.43981C16.8414 1.72102 16.9996 2.10231 17 2.5V4H8V2.5ZM1 5.5C1 5.36739 1.05268 5.24021 1.14645 5.14645C1.24021 5.05268 1.36739 5 1.5 5H4C3.99913 5.79538 3.68278 6.55794 3.12036 7.12036C2.55794 7.68278 1.79538 7.99913 1 8V5.5ZM1.5 22C1.36739 22 1.24021 21.9473 1.14645 21.8536C1.05268 21.7598 1 21.6326 1 21.5V19C1.79538 19.0009 2.55794 19.3172 3.12036 19.8796C3.68278 20.4421 3.99913 21.2046 4 22H1.5ZM24 21.5C24 21.6326 23.9473 21.7598 23.8536 21.8536C23.7598 21.9473 23.6326 22 23.5 22H21C21.0009 21.2046 21.3172 20.4421 21.8796 19.8796C22.4421 19.3172 23.2046 19.0009 24 19V21.5ZM24 18C22.9391 18 21.9217 18.4214 21.1716 19.1716C20.4214 19.9217 20 20.9391 20 22H5C5 20.9391 4.57857 19.9217 3.82843 19.1716C3.07828 18.4214 2.06087 18 1 18V9C2.06087 9 3.07828 8.57857 3.82843 7.82843C4.57857 7.07828 5 6.06087 5 5H20C20 6.06087 20.4214 7.07828 21.1716 7.82843C21.9217 8.57857 22.9391 9 24 9V18ZM21 5H23.5C23.6326 5 23.7598 5.05268 23.8536 5.14645C23.9473 5.24021 24 5.36739 24 5.5V8C23.2046 7.99913 22.4421 7.68278 21.8796 7.12036C21.3172 6.55794 21.0009 5.79538 21 5Z"
              fill="#fff"
            />
            <path
              d="M13 11.0313L19 13L20 10L14 8L13 11.0313ZM14.6354 9.2659L18.7354 10.6326L18.3664 11.7395L14.2637 10.3933L14.6354 9.2659Z"
              fill="#fff"
            />
            <path
              d="M5 16H11L8 11L5 16ZM6.7661 15L8 12.9436L9.2337 15H6.7661Z"
              fill="#fff"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="25" height="25" fill="white" />
          </clipPath>
          <clipPath id="clip1">
            <rect
              width="25"
              height="25"
              fill="white"
              transform="translate(0 -1)"
            />
          </clipPath>
        </defs>
      </svg>
            Resume
          </Button>
        </Link>
        */}
      </Hero>
      <Content>



        <SectionTitle>Latest articles</SectionTitle>
         {posts.map(post => (
          <Article
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            excerpt={post.excerpt}
            timeToRead={post.timeToRead}
            slug={post.fields.slug}
            categories={post.frontmatter.categories}
            key={post.fields.slug}
          />
        ))}
      </Content>
    </Wrapper>
  </Layout>
)

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const IndexQuery = graphql`
  query IndexQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MM/DD/YYYY")
          categories
        }
        excerpt(pruneLength: 200)
        timeToRead
      }
    }
  }
`
