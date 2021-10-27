import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Step One',
    Svg: require('../../static/img/step1.svg').default,
    description: (
      <>
      First load up everything...<br></br>
      <code>k3ai up</code>
      </>
    ),
  },
  {
    title: 'Step Two',
    Svg: require('../../static/img/step2.svg').default,
    description: (
      <> 
        ...then you want to build infrastructure...  <br></br>
      <code>k3ai cluster deploy -t k3s -n mycluster</code>
      </>
    ),
  },
  {
    title: 'Step Three',
    Svg: require('../../static/img/step3.svg').default,
    description: (
      <>
      ...finally rock the party with AI <br></br>
        <code>k3ai plugin deploy -n mlflow -t mycluster</code>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt="Online illustrations by Storyset" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
