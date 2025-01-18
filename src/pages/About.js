import React from 'react';

import Main from '../layouts/Main';

const About = () => (
  <Main title="About" description="Learn about William Spector">
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2>About Me</h2>
        </div>
      </header>
      <p>
        I am a Senior DevOps Engineer with over nine years of experience
        specializing in managing and optimizing infrastructure for
        enterprise-scale applications at global organizations. My expertise lies
        in building and maintaining robust CI/CD pipelines, orchestrating
        containers, and designing scalable cloud infrastructure solutions using
        industry-leading tools like Kubernetes, Terraform, and Jenkins. <br />
        <br />
        Throughout my career, I&apos;ve been recognized for driving operational
        efficiencies, enabling faster and more reliable deployments, and
        ensuring system reliability and security. At Google Cloud, I
        successfully designed and deployed scalable CI/CD solutions that reduced
        deployment time by 50% while maintaining zero downtime. I also managed
        Kubernetes clusters across multiple regions, enhancing application
        scalability and reducing latency by 30%. <br />
        <br />
        Previously, at Amazon Web Services (AWS), I developed Jenkins-based
        CI/CD pipelines that achieved 95% automated deployment coverage and
        implemented high-availability Kubernetes orchestration. I also designed
        disaster recovery solutions and migrated high-volume e-commerce
        platforms to serverless architectures, significantly improving
        scalability and reducing costs. <br />
        <br />I hold certifications such as AWS Certified DevOps Engineer
        Professional, Certified Kubernetes Administrator, and HashiCorp
        Certified: Terraform Associate. I&apos;m an active member of the DevOps
        community, contributing to the CNCF (Cloud Native Computing Foundation),
        and I am committed to staying at the forefront of DevOps best practices
        and innovations.
      </p>
    </article>
  </Main>
);

export default About;
