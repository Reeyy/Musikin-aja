import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Discover from './discover';
const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Discover />
    </Layout>
  );
};

export default Home;
