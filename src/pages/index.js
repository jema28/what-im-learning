import React from 'react'
import { Layout, Navbar } from '../components/layout'
import { Posts } from '../components/posts'
import { ReadingExcerpt } from '../components/reading'

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Posts />
    <ReadingExcerpt />
  </Layout>
)

export default IndexPage
