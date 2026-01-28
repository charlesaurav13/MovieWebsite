'use client'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchDataFromApi } from '../src/utils/api'
import { getApiConfiguration, getGenres } from '../src/store/homeSlice'

export function AppInitializer() {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchApiConfig = () => {
      fetchDataFromApi('/configuration').then((res) => {
        const url = {
          backdrop: res.images.secure_base_url + 'original',
          poster: res.images.secure_base_url + 'original',
          profile: res.images.secure_base_url + 'original',
        }
        dispatch(getApiConfiguration(url))
      })
    }

    const genresCall = async () => {
      let promises = []
      let endPoints = ['tv', 'movie']
      let allGenres = {}

      endPoints.forEach((url) => {
        return promises.push(fetchDataFromApi(`/genre/${url}/list`))
      })
      const data = await Promise.all(promises)
      data.map(({ genres }) => {
        return genres.map((item) => (allGenres[item.id] = item))
      })
      dispatch(getGenres(allGenres))
    }

    fetchApiConfig()
    genresCall()
  }, [dispatch])

  return null
}
