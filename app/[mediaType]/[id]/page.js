'use client'

import useFetch from '../../../src/hooks/useFetch'
import DetailsBanner from '../../../src/pages_old/details/detailsBanner/DetailsBanner'
import Cast from '../../../src/pages_old/details/cast/Cast'
import VideosSection from '../../../src/pages_old/details/videosSection/VideosSection'
import Similar from '../../../src/pages_old/details/carousels/Similar'
import Recommendation from '../../../src/pages_old/details/carousels/Recommendation'

export default function DetailsPage({ params }) {
  const { mediaType, id } = params
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`)
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  )

  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  )
}
