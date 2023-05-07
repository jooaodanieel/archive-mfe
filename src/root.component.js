import { List } from "@mui/material"

import useArchive from "./hooks/useArchive"
import ArchiveItem from "./components/ArchiveItem"
import { Title } from "@digidojo-blog/design-system"

export default function Root(props) {
  const archive = useArchive()

  return <div>
    <Title tertiary>Posts Archive</Title>
    <List>
      { archive.map(({ id, title }) => <ArchiveItem key={id} id={id}>{ title }</ArchiveItem>) }
    </List>
  </div>
}
