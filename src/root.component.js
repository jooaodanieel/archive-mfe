import { List } from "@mui/material"

import useArchive from "./hooks/useArchive"
import ArchiveItem from "./components/ArchiveItem"

export default function Root(props) {
  const archive = useArchive()

  return <>
    <h3>Post Archive</h3>
    <List>
      { archive.map(({ id, title }) => <ArchiveItem key={id} id={id}>{ title }</ArchiveItem>) }
    </List>
  </>
}
