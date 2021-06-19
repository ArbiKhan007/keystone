/** @jsx jsx  */
import { jsx } from '@emotion/react';
import Link from 'next/link';

import { getServerSideProps } from '../../components/Markdown';
import { Alert } from '../../components/primitives/Alert';
import { Emoji } from '../../components/primitives/Emoji';
import { Type } from '../../components/primitives/Type';
import { DocsPage } from '../../components/Page';

export default function WhatsNew(props) {
  return (
    <DocsPage noRightNav noProse {...props}>
      <Type as="h1" look="heading48">
        What's new in Keystone 6
      </Type>

      <Type as="p" look="body18" margin="1rem 0">
        In this major update, we've focused on improving Keystone's <strong>interfaces</strong>,
        including the way you configure and run Keystone projects, and a whole new Admin UI.
      </Type>
      <Type as="p" look="body18" margin="1rem 0">
        We're also adding powerful new features to make Keystone the best headless content
        management system around, especially when you're using a component-based front-end like
        React and Vue.
      </Type>

      <Type as="h2" look="heading24" margin="1rem 0">
        Milestones
      </Type>

      <Alert look="neutral" css={{ margin: '1rem 0' }}>
        There’s much more to come too! Check out our{' '}
        <Link href="/updates/roadmap">
          <a>roadmap</a>
        </Link>
      </Alert>

      <div
        css={{
          display: 'grid',
          gridTemplateColumns: 'minmax(13.125rem, 8.125rem) auto',
          gap: 0,
        }}
      >
        <div>15th June 2021</div>
        <div>
          Keystone Next now has a new core <Emoji symbol="🤖" alt="Robot" />, unblocking many of the
          features you’ve been waiting for! -
          <Link href="/releases/2021-06-15">
            <a>read more</a>
          </Link>
        </div>
        <div>2nd June 2021</div>
        <div>
          We have a new JSON field <Emoji symbol="✨" alt="Sparkle" />, a bunch of new learning
          resources, and plenty of under the hood optimisations in this big release.{' '}
          <Emoji symbol="💪" alt="Strong" /> —
          <Link href="/releases/2021-06-02">
            <a>read more</a>
          </Link>
        </div>
        <div>19th May 2021</div>
        <div>
          Node updates and Admin UI has moved! <Emoji symbol="🚚" alt="Truck" /> —
          <Link href="/releases/2021-05-19">
            <a>read more</a>
          </Link>
        </div>
        <div>17th May 2021</div>
        <div>
          Apollo caching can now be configured for performance <Emoji symbol="🔥" alt="Fire" /> and
          a basic authentication example to get your started <Emoji symbol="🔒" alt="Lock" /> —
          <Link href="/releases/2021-05-17">
            <a>read more</a>
          </Link>
        </div>
        <div>11th May 2021</div>
        <div>
          A bunch of admin UI tweaks in this release <Emoji symbol="🖥️" alt="Monitor" />, among
          other minor fixes —
          <Link href="/releases/2021-05-11">
            <a>read more</a>
          </Link>
        </div>
        <div>5th May 2021</div>
        <div>
          Aside from dependency updates <Emoji symbol="😴" alt="Tired" />, we added an `isIndexed`
          config option to the `text`, `integer`, `float`, `select`, and `timestamp` field types —
          <Link href="/releases/2021-05-05">
            <a>read more</a>
          </Link>
        </div>
        <div>3rd May 2021</div>
        <div>
          Files in Keystone 6 <Emoji symbol="📁" alt="Folder" />! This release involved a bunch of
          busywork behind the scenes in Keystone 6 <Emoji symbol="🔧" alt="Working tools" /> —
          <Link href="/releases/2021-05-03">
            <a>read more</a>
          </Link>
        </div>
        <div>20th April 2021</div>
        <div>
          Improvements to the Lists API, deprecating `resolveFields`{' '}
          <Emoji symbol="🔧" alt="Working tool" /> —
          <Link href="/releases/2021-04-20">
            <a>read more</a>
          </Link>
        </div>
        <div>6th April 2021</div>
        <div>
          Controlled code demolition 🏗️ 👷‍♀️, Better pagination in Admin UI{' '}
          <Emoji symbol="⏭️" alt="Fast forward" /> —
          <Link href="/releases/2021-04-06">
            <a>read more</a>
          </Link>
        </div>
        <div>30th March 2021</div>
        <div>
          Goodbye legacy code 👋 🌇, Improved `select` field type{' '}
          <Emoji symbol="🔽" alt="Selector" />, Squashed bugs <Emoji symbol="🐛" alt="Bug" /> —
          <Link href="/releases/2021-03-30">
            <a>read more</a>
          </Link>
        </div>
        <div>23rd March 2021</div>
        <div>
          Added support for SQLite with Prisma <Emoji symbol="🎉" alt="Celebration" />, Noteworthy
          bug-squashing <Emoji symbol="🐛" alt="Bug" /> —
          <Link href="/releases/2021-03-23">
            <a>read more</a>
          </Link>
        </div>
        <div>22nd March 2021</div>
        <div>
          Prisma migrations <Emoji symbol="🚚" alt="Truck" />, Noteworthy bug-squashing{' '}
          <Emoji symbol="🐛" alt="Bug" /> —
          <Link href="/releases/2021-03-22">
            <a>read more</a>
          </Link>
        </div>
      </div>

      <Alert look="tip" css={{ margin: '1rem 0' }}>
        <Emoji symbol="🔎" alt="Magnifying Glass" /> You can also find all{' '}
        <strong>Keystone 6</strong> releases on{' '}
        <a
          href="https://github.com/keystonejs/keystone/releases"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </Alert>
    </DocsPage>
  );
}

export { getServerSideProps };
