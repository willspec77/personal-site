import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <header>
        <h2>William Spector</h2>
        <p>
          <a href="mailto:williamspector77@gmail.com">
            williamspector77@gmail.com
          </a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Senior DevOps Engineer with 9 years of experience managing and
        optimizing infrastructure for enterprise-scale applications at global
        organizations. Expertise in building robust CI/CD pipelines, container
        orchestration, and cloud infrastructure using tools like Kubernetes,
        Terraform, and Jenkins. Known for driving operational efficiencies and
        enabling faster deployments while ensuring system reliability and
        security.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; William Spector</p>
    </section>
  </section>
);

export default SideBar;
