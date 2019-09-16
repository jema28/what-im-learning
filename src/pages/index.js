import React from 'react'
import { Layout, Navbar } from '../components/layout'
import { Posts } from '../components/posts'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Posts />
  </Layout>
)

export default IndexPage
