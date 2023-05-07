import { useEffect, useState } from "react";

import axios from "../utils/axios"

export default function useArchive() {
  const [archive, setArchive] = useState([])

  async function fetchArchive() {
    try {
      const { data } = await axios.get('/posts')

      setArchive(data)
    } catch (e) {
      console.log(e)
      setArchive([])
    }
  }

  useEffect(fetchArchive, [])

  return archive
}