import React from 'react';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      // eslint-disable-next-line operator-linebreak
      "William Spector's personal website. New York based Stanford ICME graduate, " +
      'VP of Engineering at Smile Identity, co-founder of Arthena and Matroid, and YC Alumni.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>CERTIFICATION</h2>
          <p>AWS Certified DevOps Engineer – Professional</p>
          <p>Certified Kubernetes Administrator (CKA)</p>
          <p>HashiCorp Certified: Terraform Associate</p>{' '}
          <p>Docker Certified Associate</p>
        </div>
      </header>
      <div>
        <h2>PROFESSIONAL AFFILIATIONS</h2>
        <p>Member, DevOps Institute</p>
        <p>Contributor, CNCF (Cloud Native Computing Foundation)</p>
      </div>
    </article>
  </Main>
);

export default Index;
