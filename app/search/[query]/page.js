'use client'

import { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import NoResult from '../../../src/assets/no-results.png'
import '../../../src/pages_old/searchResult/style.scss'
import { fetchDataFromApi } from '../../../src/utils/api'
import ContentWrapper from '../../../src/components/contentWrapper/ContentWrapper'
import MovieCard from '../../../src/components/movieCard/MovieCard'
import Spinner from '../../../src/components/spinner/Spinner'
import Image from 'next/image'

export default function SearchResultPage({ params }) {
  const [data, setData] = useState(null)
  const [pageNum, setPageNum] = useState(1)
  const [loading, setLoading] = useState(false)
  const { query } = params

  const fetchInitialData = () => {
    setLoading(true)
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        setData(res)
        setPageNum((prev) => prev + 1)
        setLoading(false)
      }
    )
  }

  const fetchNextPageData = () => {
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data?.results, ...res.results],
          })
        } else {
          setData(res)
        }
        setPageNum((prev) => prev + 1)
      }
    )
  }

  useEffect(() => {
    setPageNum(1)
    fetchInitialData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return (
    <div className="searchResultsPage">
      {loading && <Spinner initial={true} />}
      {!loading && (
        <ContentWrapper>
          {data?.results?.length > 0 ? (
            <>
              <div className="pageTitle">
                {`Search ${
                  data?.total_results > 1 ? 'results' : 'result'
                } of '${query}'`}
              </div>
              <InfiniteScroll
                className="content"
                dataLength={data?.results?.length || []}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.total_pages}
                loader={<Spinner />}
              >
                {data?.results.map((item, index) => {
                  if (item.media_type === 'person') return null
                  return (
                    <MovieCard key={index} data={item} fromSearch={true} />
                  )
                })}
              </InfiniteScroll>
            </>
          ) : (
            <div className="noresult">
              <Image src={NoResult} alt="No image found" width={300} height={300} />
              <span className="resultNotFound">Sorry, No Results found!</span>
            </div>
          )}
        </ContentWrapper>
      )}
    </div>
  )
}
