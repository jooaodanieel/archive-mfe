import { Link } from "@reach/router"
import { ListItem, ListItemText } from "@mui/material"

export default function ArchiveItem({ id, children }) {
  const url = `/posts/${id}`

  return <Link to={url}>
    <ListItem>
      <ListItemText>{ children }</ListItemText>
    </ListItem>
  </Link>
}