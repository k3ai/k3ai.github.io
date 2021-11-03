import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Step One',
    Svg: require('../../static/img/undraw_load_more_re_482p.svg').default,
    description: (
      <>
      First load up everything...<br></br>
      <code>k3ai up</code>
      </>
    ),
  },
  {
    title: 'Step Two',
    Svg: require('../../static/img/undraw_checking_boxes_re_9h8m.svg').default,
    description: (
      <> 
        ...then you want to build your AI infrastructure...  <br></br>
      <code>k3ai cluster deploy -t k3s -n mycluster</code>
      </>
    ),
  },
  {
    title: 'Step Three',
    Svg: require('../../static/img/undraw_control_panel_re_y3ar.svg').default,
    description: (
      <>
      ...add some AI tool...<br></br>
      <code>k3ai plugin deploy -n mlflow -t mycluster</code>
      </>
    ),
  },
];
const FinalFeature=[
  {
    title: 'Step Four',
    Svg: require('../../static/img/undraw_accept_terms_re_lj38.svg').default,
    description: (
      <>
      ...finally push your code and enjoy!<br></br>
      <code>k3ai plugin run -s https://github.com/k3ai/quickstart -b mlflow -t mycluster</code>
      </>
    ),
  },
]
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

          {FinalFeature.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
      </div>
    </section>
  );
}
