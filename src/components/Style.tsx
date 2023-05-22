type StyleProps = {
    styles: React.CSSProperties
}
const Style = (props: StyleProps) => {
  return (
    <div style={props.styles}>
      Text Content
    </div>
  )
}

export default Style
