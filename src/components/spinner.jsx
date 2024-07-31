import { ClipLoader } from "react-spinners/ClipLoader"

const override = {
    display: 'block',
    margin: '100px auto',
}

const spinner = ({loading}) => {
  return (
    <ClipLoader
        color='#4338ca'
        loading={loading}
        cssOveride={override}
        size={150}
    />
  )
}

export default spinner