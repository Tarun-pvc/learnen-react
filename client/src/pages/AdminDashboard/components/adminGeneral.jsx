// // import React from 'react'

// export default function AdminGeneral() {
//   return (
//     <div className='admin-general-wrapper'>
//       <p>Dashboard</p>
//     </div>
//   )
// }
import { faChalkboardUser, faSchool, faBug, faCircleExclamation} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'
 import 
 { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function AdminGeneral() {
  

    const data = [
        {
          name: 'Jan',
          ActiveMentors: 4000,
          ActiveStudents: 2400
        },
        {
          name: 'Feb',
          ActiveMentors: 3000,
          ActiveStudents: 1398
        },
        {
          name: 'Mar',
          ActiveMentors: 2000,
          ActiveStudents: 9800
        },
        {
          name: 'Apr',
          ActiveMentors: 2780,
          ActiveStudents: 3908
        },
        {
          name: 'May',
          ActiveMentors: 1890,
          ActiveStudents: 4800
        },
        {
          name: 'Jun',
          ActiveMentors: 2390,
          ActiveStudents: 3800
        },
        {
          name: 'Jul',
          ActiveMentors: 3490,
          ActiveStudents: 4300
        },
      ];

      const data_bar = [
        {
          name: 'Jan',
          Users: 10004
        },
        {
          name: 'Feb',
          Users: 5781
        },
        {
          name: 'Mar',
          Users: 19907
        },
        {
          name: 'Apr',
          Users: 15092
        },
        {
          name: 'May',
          Users: 40912
        },
        {
          name: 'Jun',
          Users: 70182
        },
        {
          name: 'Jul',
          Users: 98142
        },
      ];
     

  return (
    
    <main className='main-container'>
        <div className='main-title'>
            <h3 style={{color:'black'}} >ADMIN DASHBOARD.</h3>
        </div>

        <div className='main-cards'>
            <div className='card' id="mentor-card" >
                <div className='card-inner'>
                    <h3>Mentors</h3>
                    <FontAwesomeIcon className="card_icon" icon={faChalkboardUser} />
                </div>
                <h1>8893</h1>
            </div>
            <div className='card' id="student-card">
                <div className='card-inner'>
                    <h3>Students</h3>
                    <FontAwesomeIcon className="card_icon" icon={faSchool} />
                </div>
                <h1>99829</h1>
            </div>
            <div className='card' id='user-reports-card'>
                <div className='card-inner'>
                    <h3>User Reports</h3>
                    <FontAwesomeIcon className="card_icon" icon={faCircleExclamation} />
                </div>
                <h1>948</h1>
            </div>
            <div className='card' id="bug-reports-card">
                <div className='card-inner' >
                    <h3>Bug Reports</h3>
                    <FontAwesomeIcon className="card_icon" icon={faBug} />
                </div>
                <h1>110</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data_bar}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Users" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="ActiveStudents" stroke="#8884d8" activeDot={{ r: 10 }} />
                <Line type="monotone" dataKey="ActiveMentors" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default AdminGeneral;