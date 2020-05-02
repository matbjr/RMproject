import React from 'react'
import { useSelector } from 'react-redux'

function CourseLogo() {
  const google_courses = useSelector((state) => state.rm_courses_json.display)
  return (
    <div>
      {google_courses ? (
        <img
          src='https://lh3.googleusercontent.com/w0s3au7cWptVf648ChCUP7sW6uzdwGFTSTenE178Tz87K_w1P1sFwI6h1CLZUlC2Ug'
          alt='Google Classroom Logo'
          height={50}
        />
      ) : !google_courses ? (
        <img
          src='https://www.questpond.com/img/2.png'
          alt='Google Classroom Logo'
          height={50}
        />
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default CourseLogo
