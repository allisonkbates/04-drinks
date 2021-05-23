import RequestReset from "../components/RequestReset";
import Reset from '../components/Reset';

export default function ResetPage({ query }) {

  if(!query?.token) {
    return (
      <div>
        <p>You must have a reset token.</p> {/* TODO: Style this better! */}
        <RequestReset />
      </div>
    )
  }
  return (
    <div>
      <Reset token={query.token}/>
    </div>
  )
}