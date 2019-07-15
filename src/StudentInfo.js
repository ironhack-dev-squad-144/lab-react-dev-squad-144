import React from 'react'

export default function StudentInfo(props) {
  console.log("props => ", props)
  let color = props.user.gender === "male" ? "#007bff" : "#dc3545"
  return (
    <tr>
      <td style={{color: color}}>{props.user.firstName}</td>
      <td><img src={`https://www.countryflags.io/${props.user.country}/flat/32.png`} alt=""/></td>
      <td>
        <a target="_blank" href={"https://github.com/"+props.user.githubUsername}>{props.user.githubUsername}</a>
      </td>
    </tr>
  )
}
