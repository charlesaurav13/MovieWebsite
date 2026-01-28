'use client'

import ContentWrapper from '../src/components/contentWrapper/ContentWrapper'

export default function Error({ error, reset }) {
  return (
    <div className="pageNotFound">
      <ContentWrapper>
        <span className="bigText">Oops!</span>
        <span className="smallText">Something went wrong!</span>
        <button
          onClick={reset}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            background: '#da2f68',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Try again
        </button>
      </ContentWrapper>
    </div>
  )
}
