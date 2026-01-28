import ContentWrapper from '../src/components/contentWrapper/ContentWrapper'
import '../src/pages_old/404/style.scss'

export default function NotFound() {
  return (
    <div className="pageNotFound">
      <ContentWrapper>
        <span className="bigText">404</span>
        <span className="smallText">Page not found!</span>
      </ContentWrapper>
    </div>
  )
}
