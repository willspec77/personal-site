/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Google Cloud',
    position: 'Senior DevOps Engineer',
    startDate: '2019-06-01',
    highlights: [
      'Designed and deployed scalable CI/CD solutions for global customers, reducing deployment time by 50% while ensuring zero downtime.',
      'Managed Kubernetes clusters on GKE across multiple regions, improving application scalability and reducing latency by 30%.',
      'Built infrastructure-as-code templates using Terraform for multi-region deployments, enabling rapid provisioning of complex environments.',
      'Streamlined development workflows by integrating Jenkins with automated testing frameworks and cloud-based artifact repositories.',
      'Implemented real-time monitoring and alerting using Prometheus and Grafana for high-traffic applications, reducing MTTR by 40%.',
      'Reduced cloud operational costs by 25% through resource optimization and automation.',
      "Led an initiative to migrate legacy systems to a containerized microservices' architecture, achieving 99.9% uptime for critical applications.",
    ],
  },
  {
    name: 'Amazon Web Services (AWS)',
    position: 'DevOps Engineer',
    startDate: '2016-07-01',
    endDate: '2019-05-01',
    highlights: [
      'Developed and optimized Jenkins-based CI/CD pipelines for deploying enterprise-grade services on AWS, achieving 95% automated deployment coverage.',
      'Orchestrated Docker containers on Kubernetes (EKS) for high-availability applications, reducing downtime by 30%.',
      'Automated infrastructure provisioning and configuration management using CloudFormation and Ansible.',
      'Enhanced monitoring and troubleshooting capabilities by deploying ELK stack, reducing incident resolution times by 50%.',
      'Designed and implemented a disaster recovery solution spanning multiple AWS regions, ensuring zero data loss during outages.',
      'Migrated a high-volume e-commerce platform to serverless architectures using AWS Lambda, improving scalability and reducing costs.',
    ],
  },
];

export default work;
