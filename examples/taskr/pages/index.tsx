import { Fragment } from 'react';
import Head from 'next/head';
import { HelloWorld } from 'components/HelloWorld';

const IndexPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Next SaaS Starter</title>
      </Head>
      <HelloWorld />
    </Fragment>
  );
};

export default IndexPage;
