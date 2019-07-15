import React from 'react';
import MainNavbar from './MainNavbar';
import StudentInfo from './StudentInfo';
import PostIt from './PostIt';
import { Container, Table,  } from 'reactstrap';
import students from "./students"

function App() {
  let list = []
  for (let i = 0; i < students.length; i++) {
    list.push(<StudentInfo key={i} user={students[i]} />)
  }
  return (
    <div className="App">
      <MainNavbar />
      <Container>
        <h1 id="students">Students</h1>

        <Table hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>GitHub</th>
            </tr>
          </thead>
          <tbody>
            {list}
            {/* {students.map((student,i) => <StudentInfo key={i} user={student} />)} */}
          </tbody>
        </Table>

        <h1 id="topics-to-recap">Topics to Recap</h1>
        <div className="postits-container">
          <PostIt color="pink">Debugging Tool</PostIt>
          <PostIt color="tomato">APIs</PostIt>
          <PostIt color="lightblue">Mapbox</PostIt>
        </div>
        <br/><br/>
      </Container>
    </div>
  );
}

export default App;

